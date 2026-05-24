import { Link } from 'react-router-dom';
import StatCard from '../components/StatCard';
import ToolCard from '../components/ToolCard';
import ResourceCard from '../components/ResourceCard';

export default function Dashboard({ resources }) {
  const recent = resources.slice(0, 4);
  return (
    <section className="page">
      <div className="hero">
        <h1>TeacherKit AI</h1>
        <p>Save hours every week with classroom-ready tools</p>
      </div>
      <div className="grid stats">
        <StatCard label="Resources Created" value={resources.length} />
        <StatCard label="Subjects Covered" value={new Set(resources.map((r) => r.subject)).size || 0} />
        <StatCard label="Messages Generated" value={resources.filter((r) => r.type === 'parent').length} />
      </div>
      <div className="grid tools">
        <ToolCard title="Lesson Builder Preview" description="Standards-aligned structure inspired by your Lesson Plan Architect workflow." />
        <ToolCard title="Parent Message Preview" description="Family-friendly updates with clear next steps and positive tone." />
        <ToolCard title="Classroom Tools Preview" description="Rubrics, bell ringers, procedures, behavior notes, and more." />
      </div>
      <h2>Saved Resources</h2>
      <div className="grid resources">
        {recent.length ? recent.map((resource) => <ResourceCard key={resource.id} resource={resource} />) : <p className="muted">No saved resources yet.</p>}
      </div>
      <Link to="/pricing" className="cta">Upgrade for unlimited generation</Link>
    </section>
  );
}
