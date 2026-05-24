const subjects = ['English', 'Math', 'Science', 'Social Studies', 'Theatre', 'Fine Arts', 'CTE', 'Elementary', 'Special Education', 'Other'];
const grades = ['K-2', '3-5', '6-8', '9-12', 'Adult'];

export default function GeneratorForm({ type, onGenerate }) {
  const handleSubmit = (e) => {
    e.preventDefault();
    const data = Object.fromEntries(new FormData(e.currentTarget).entries());
    onGenerate({ ...data, type });
    e.currentTarget.reset();
  };

  return (
    <form className="generator-form" onSubmit={handleSubmit}>
      <input name="title" placeholder="Resource title" required />
      <select name="subject" required>{subjects.map((s) => <option key={s}>{s}</option>)}</select>
      <select name="grade" required>{grades.map((g) => <option key={g}>{g}</option>)}</select>
      <input name="objective" placeholder="Learning objective" required />
      <textarea name="notes" placeholder="Specific context or student needs" rows="3" />
      <button type="submit">Generate & Save</button>
    </form>
  );
}
