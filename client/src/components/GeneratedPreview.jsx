export default function GeneratedPreview({ item }) {
  if (!item) return <p className="muted">Generate a resource to see it here.</p>;

  return (
    <article className="preview-card">
      <small>{item.coach} style</small>
      <h3>{item.title}</h3>
      <p>{item.body}</p>
    </article>
  );
}
