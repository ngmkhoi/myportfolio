/**
 * Projects data
 * category: 'frontend' | 'backend' | 'fullstack'
 * To add a project, just add an object to the array.
 */

import portfolioImg from '../assets/portfolio.png'
import threadsImg from '../assets/threads.png'
import spotifyImg from '../assets/spotify.png'

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
      vi: 'Website portfolio cá nhân với thiết kế glassmorphism, hỗ trợ đa ngôn ngữ.',
      en: 'Personal portfolio website with glassmorphism design, multilingual support.',
    },
    category: 'frontend',
    techs: ['React', 'Tailwind CSS', 'Vite', 'i18next'],
    demoUrl: 'https://www.devkhoi.me',
    githubUrl: 'https://github.com/ngmkhoi/myportfolio',
    image: portfolioImg,
    featured: true,
  },
  {
    id: 2,
    title: {
      vi: 'Threads City Clone',
      en: 'Threads City Clone',
    },
    description: {
      vi: 'Clone website Threads City project. Tương tác thời gian thực: Đăng bài (Threads), phản hồi, yêu thích và chia sẻ khoảnh khắc ngay lập tức. Hỗ trợ đa ngôn ngữ.',
      en: 'Clone website Threads City project. Real-time interaction: Posting (Threads), commenting, liking, and sharing moments instantly. Multilingual support.',
    },
    category: 'frontend',
    techs: ['React', 'Tailwind CSS', 'Vite', 'i18next', 'Redux Toolkit', 'Shadcn UI'],
    demoUrl: 'https://ngmkhoi.github.io/threads-clone/',
    githubUrl: 'https://github.com/ngmkhoi/threads-clone',
    image: threadsImg,
    featured: true,
  },
  {
    id: 3,
    title: {
      vi: 'Spotify Clone',
      en: 'Spotify Clone',
    },
    description: {
      vi: 'Clone website Spotify project. ứng dụng Spotify Clone với giao diện hiện đại, đa ngôn ngữ và các tính năng chính như: Đăng nhập, đăng ký, tìm kiếm, playlist, nhạc.',
      en: 'Clone website Spotify project. Spotify Clone with modern interface, multilingual support and main features such as login, registration, search, playlist, music.',
    },
    category: 'frontend',
    techs: ['HTML CSS', 'JavaScript'],
    demoUrl: 'https://ngmkhoi.github.io/spotify_FE/',
    githubUrl: 'https://github.com/ngmkhoi/spotify_FE',
    image: spotifyImg,
    featured: true,
  },
  // Add more projects here...
]
