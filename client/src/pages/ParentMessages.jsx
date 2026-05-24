import GeneratorForm from '../components/GeneratorForm';
import GeneratedPreview from '../components/GeneratedPreview';

export default function ParentMessages({ onGenerate, latest }) {
  return <section className="page split"><GeneratorForm type="parent" onGenerate={onGenerate} /><GeneratedPreview item={latest} /></section>;
}
