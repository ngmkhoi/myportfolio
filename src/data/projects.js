/**
 * Projects data
 * category: 'frontend' | 'backend' | 'fullstack'
 * To add a project, just add an object to the array.
 */

export const projectCategories = [
  { id: 'all', label: { vi: 'Tất cả', en: 'All' } },
  { id: 'frontend', label: { vi: 'Frontend', en: 'Frontend' } },
  { id: 'backend', label: { vi: 'Backend', en: 'Backend' } },
  { id: 'fullstack', label: { vi: 'Fullstack', en: 'Fullstack' } },
]

export const projects = [
  // Example project — replace or add your own
  {
    id: 1,
    title: {
      vi: 'Portfolio Website',
      en: 'Portfolio Website',
    },
    description: {
      vi: 'Website portfolio cá nhân với thiết kế glassmorphism, hỗ trợ đa ngôn ngữ và tích hợp GitHub API.',
      en: 'Personal portfolio website with glassmorphism design, multilingual support and GitHub API integration.',
    },
    category: 'frontend',
    techs: ['React', 'Tailwind CSS', 'Vite', 'i18next'],
    demoUrl: '',
    githubUrl: 'https://github.com/ngmkhoi/myportfolio',
    image: '', // Add screenshot path or URL
    featured: true,
  },
  // Add more projects here...
]
