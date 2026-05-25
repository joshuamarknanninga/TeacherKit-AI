export default function PlanCard({ plan, onSubscribe, loading }) {
  return (
    <article className="plan-card">
      <h3>{plan.name}</h3>
      <p className="price">{plan.price}</p>
      <ul>
        {plan.features.map((feature) => <li key={feature}>{feature}</li>)}
      </ul>
      <button onClick={() => onSubscribe(plan.key)} disabled={loading}>
        {loading ? 'Connecting...' : 'Subscribe'}
      </button>
    </article>
  );
}
