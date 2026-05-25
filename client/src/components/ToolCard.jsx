export default function ToolCard({ title, description }) {
  return (
    <article className="tool-card">
      <h4>{title}</h4>
      <p>{description}</p>
    </article>
  );
}
