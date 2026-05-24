import { useState } from 'react';
import PlanCard from '../components/PlanCard';
import { api } from '../services/api';

const plans = [
  { key: 'teacher', name: 'Teacher', price: '$12/month', features: ['lesson builders', 'parent message tools', 'saved resources', 'classroom tools'] },
  { key: 'pro', name: 'Pro Teacher', price: '$29/month', features: ['unlimited resource generation', 'grading comment tools', 'substitute plan generator', 'standards organization', 'saved templates'] },
  { key: 'school', name: 'School Team', price: '$79/month', features: ['multi-teacher access', 'shared resource library', 'admin dashboard', 'priority support'] }
];

export default function Pricing() {
  const [loading, setLoading] = useState(false);

  const subscribe = async (priceKey) => {
    setLoading(true);
    const data = await api.createCheckoutSession(priceKey);
    setLoading(false);
    if (data?.url) window.location.href = data.url;
    else alert(data?.error || 'Unable to start checkout right now.');
  };

  return <section className="page pricing-grid">{plans.map((p) => <PlanCard key={p.key} plan={p} onSubscribe={subscribe} loading={loading} />)}</section>;
}
