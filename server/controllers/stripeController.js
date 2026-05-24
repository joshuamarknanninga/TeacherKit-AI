import Stripe from 'stripe';

const getStripe = () => {
  if (!process.env.STRIPE_SECRET_KEY) return null;
  return new Stripe(process.env.STRIPE_SECRET_KEY);
};

const priceMap = {
  teacher: process.env.STRIPE_PRICE_TEACHER,
  pro: process.env.STRIPE_PRICE_PRO,
  school: process.env.STRIPE_PRICE_SCHOOL
};

export async function createCheckoutSession(req, res) {
  const stripe = getStripe();
  if (!stripe) return res.status(400).json({ error: 'Stripe is not configured yet. Add STRIPE_SECRET_KEY to enable subscriptions.' });

  const priceId = priceMap[req.body.priceKey];
  if (!priceId) return res.status(400).json({ error: 'Invalid plan selected. Please choose Teacher, Pro Teacher, or School Team.' });

  try {
    const session = await stripe.checkout.sessions.create({
      mode: 'subscription',
      line_items: [{ price: priceId, quantity: 1 }],
      success_url: `${process.env.CLIENT_URL}/settings?success=true`,
      cancel_url: `${process.env.CLIENT_URL}/pricing?canceled=true`
    });
    return res.json({ url: session.url });
  } catch {
    return res.status(500).json({ error: 'Unable to create checkout session at the moment.' });
  }
}

export async function createPortalSession(req, res) {
  const stripe = getStripe();
  if (!stripe) return res.status(400).json({ error: 'Stripe is not configured yet. Add STRIPE_SECRET_KEY to enable billing portal.' });

  try {
    return res.status(400).json({ error: 'Billing portal requires a customer id from a completed subscription.' });
  } catch {
    return res.status(500).json({ error: 'Unable to launch billing portal right now.' });
  }
}
