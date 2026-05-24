import GeneratorForm from '../components/GeneratorForm';
import GeneratedPreview from '../components/GeneratedPreview';

export default function LessonBuilder({ onGenerate, latest }) {
  return <section className="page split"><GeneratorForm type="lesson" onGenerate={onGenerate} /><GeneratedPreview item={latest} /></section>;
}
