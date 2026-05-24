export default function ResourceCard({ resource }) {
  return (
    <article className="resource-card">
      <div className="resource-chip">{resource.type}</div>
      <h4>{resource.title}</h4>
      <p>{resource.body.split('\n')[0]}</p>
      <small>{resource.subject} · Grade {resource.grade} · {resource.createdAt}</small>
    </article>
  );
}
