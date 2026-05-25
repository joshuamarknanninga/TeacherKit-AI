import { NavLink } from 'react-router-dom';

const links = [
  ['/', 'Dashboard'],
  ['/lesson-builder', 'Lesson Builder'],
  ['/resources', 'Resources'],
  ['/parent-messages', 'Parent Messages'],
  ['/classroom-tools', 'Classroom Tools'],
  ['/pricing', 'Pricing'],
  ['/settings', 'Settings']
];

export default function Navbar() {
  return (
    <header className="navbar">
      <div className="brand">TeacherKit AI</div>
      <nav>
        {links.map(([to, label]) => (
          <NavLink key={to} to={to} className={({ isActive }) => `nav-link ${isActive ? 'active' : ''}`}>
            {label}
          </NavLink>
        ))}
      </nav>
    </header>
  );
}
