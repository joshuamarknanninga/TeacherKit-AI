const API_BASE = import.meta.env.VITE_API_URL || 'http://localhost:5000';

async function post(path, payload = {}) {
  const response = await fetch(`${API_BASE}${path}`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(payload)
  });

  return response.json();
}

export const api = {
  createCheckoutSession: (priceKey) => post('/api/stripe/create-checkout-session', { priceKey }),
  createPortalSession: () => post('/api/stripe/create-portal-session')
};
