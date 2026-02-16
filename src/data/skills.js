/**
 * Skills data — grouped by category
 * proficiency: 1-5 scale (1=beginner, 5=expert)
 * icon: Lucide icon name (https://lucide.dev/icons)
 *
 * To add a new skill, just add an object to the relevant category array.
 */

export const skillCategories = [
  {
    id: 'frontend',
    label: { vi: 'Frontend', en: 'Frontend' },
    skills: [
      { name: 'React', proficiency: 4, icon: 'Code2' },
      { name: 'Redux', proficiency: 3, icon: 'Layers' },
      { name: 'JavaScript', proficiency: 4, icon: 'FileCode' },
      { name: 'HTML/CSS', proficiency: 4, icon: 'Globe' },
      { name: 'Tailwind CSS', proficiency: 3, icon: 'Palette' },
    ],
  },
  {
    id: 'backend',
    label: { vi: 'Backend', en: 'Backend' },
    skills: [
      { name: 'Node.js', proficiency: 4, icon: 'Server' },
      { name: 'Express.js', proficiency: 4, icon: 'Route' },
      { name: 'REST API', proficiency: 4, icon: 'Plug' },
      { name: 'GraphQL', proficiency: 2, icon: 'Plug' },
    ],
  },
  {
    id: 'database',
    label: { vi: 'Cơ sở dữ liệu', en: 'Database' },
    skills: [
      { name: 'Prisma', proficiency: 3, icon: 'Database' },
      { name: 'PostgreSQL/MySQL', proficiency: 3, icon: 'HardDrive' },
      { name: 'MongoDB', proficiency: 2, icon: 'Cylinder' },
      { name: 'Firebase', proficiency: 2, icon: 'Fire' },
      { name: 'Supabase', proficiency: 2, icon: 'Database' },
      { name: 'Redis', proficiency: 2, icon: 'Cache' },
      { name: 'ChromaDB', proficiency: 2, icon: 'Database' },
      { name: 'Qdrant', proficiency: 2, icon: 'Database' },
    ],
  },
  {
    id: 'tools',
    label: { vi: 'Công cụ', en: 'Tools' },
    skills: [
      { name: 'Git', proficiency: 4, icon: 'GitBranch' },
      { name: 'VS Code', proficiency: 4, icon: 'Terminal' },
      { name: 'Vite', proficiency: 3, icon: 'Zap' },
      { name: 'Postman', proficiency: 3, icon: 'Send' },
      { name: 'Docker', proficiency: 2, icon: 'Docker' },
      { name: 'DigitalOcean', proficiency: 2, icon: 'Cloud' },
    ],
  },
]
