import { useState } from 'react';
import ResourceCard from '../components/ResourceCard';

export default function Resources({ resources }) {
  const [query, setQuery] = useState('');
  const [subject, setSubject] = useState('all');
  const [type, setType] = useState('all');

  const filtered = resources.filter((r) =>
    (subject === 'all' || r.subject === subject) &&
    (type === 'all' || r.type === type) &&
    `${r.title} ${r.body} ${r.grade}`.toLowerCase().includes(query.toLowerCase())
  );

  return (
    <section className="page">
      <h2>Resource Library</h2>
      <div className="filters">
        <input placeholder="Search resources" value={query} onChange={(e) => setQuery(e.target.value)} />
        <select value={subject} onChange={(e) => setSubject(e.target.value)}>
          <option value="all">All Subjects</option>{[...new Set(resources.map((r) => r.subject))].map((s) => <option key={s} value={s}>{s}</option>)}
        </select>
        <select value={type} onChange={(e) => setType(e.target.value)}>
          <option value="all">All Types</option>{[...new Set(resources.map((r) => r.type))].map((t) => <option key={t} value={t}>{t}</option>)}
        </select>
      </div>
      <div className="grid resources">{filtered.map((r) => <ResourceCard key={r.id} resource={r} />)}</div>
    </section>
  );
}
