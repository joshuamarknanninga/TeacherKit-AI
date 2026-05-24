import GeneratorForm from '../components/GeneratorForm';
import GeneratedPreview from '../components/GeneratedPreview';

const toolTypes = ['substitute', 'grading', 'behavior', 'bellRinger', 'rubric', 'procedure'];

export default function ClassroomTools({ onGenerate, latest }) {
  return (
    <section className="page">
      <h2>Classroom Tools</h2>
      <div className="grid tools-grid">
        {toolTypes.map((type) => (
          <div key={type}>
            <h3>{type}</h3>
            <GeneratorForm type={type} onGenerate={onGenerate} />
          </div>
        ))}
      </div>
      <GeneratedPreview item={latest} />
    </section>
  );
}
