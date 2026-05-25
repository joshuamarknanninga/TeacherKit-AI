import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { useMemo, useState } from 'react';
import Navbar from './components/Navbar';
import Dashboard from './pages/Dashboard';
import LessonBuilder from './pages/LessonBuilder';
import Resources from './pages/Resources';
import ParentMessages from './pages/ParentMessages';
import ClassroomTools from './pages/ClassroomTools';
import Pricing from './pages/Pricing';
import Settings from './pages/Settings';
import { formatGeneratedContent } from './services/contentFormatter';

export default function App() {
  const [resources, setResources] = useState(() => JSON.parse(localStorage.getItem('tk_resources') || '[]'));
  const latest = useMemo(() => resources[0], [resources]);

  const onGenerate = (input) => {
    const generated = formatGeneratedContent(input);
    const next = [generated, ...resources];
    setResources(next);
    localStorage.setItem('tk_resources', JSON.stringify(next));
  };

  return (
    <BrowserRouter>
      <Navbar />
      <main>
        <Routes>
          <Route path="/" element={<Dashboard resources={resources} />} />
          <Route path="/lesson-builder" element={<LessonBuilder onGenerate={onGenerate} latest={latest} />} />
          <Route path="/resources" element={<Resources resources={resources} />} />
          <Route path="/parent-messages" element={<ParentMessages onGenerate={onGenerate} latest={latest} />} />
          <Route path="/classroom-tools" element={<ClassroomTools onGenerate={onGenerate} latest={latest} />} />
          <Route path="/pricing" element={<Pricing />} />
          <Route path="/settings" element={<Settings />} />
        </Routes>
      </main>
    </BrowserRouter>
  );
}
