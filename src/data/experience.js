/**
 * Experience data — timeline entries
 * type: 'education' | 'work' | 'certification'
 * To add an entry, just add an object to the array (newest first).
 */

export const experiences = [
  {
    id: 1,
    type: 'education',
    date: {
      vi: '2021 - 2026',
      en: '2021 - 2026',
    },
    title: {
      vi: 'Cử nhân Công nghệ Thông tin',
      en: 'Bachelor of Information Technology',
    },
    organization: {
      vi: 'Trường Đại học Ngoại Ngữ - Tin Học TP.HCM',
      en: 'University of Foreign Languages - Information Technology Ho Chi Minh City',
    },
    description: {
      vi: 'Chuyên ngành Kỹ thuật phần mềm. Tham gia các dự án nhóm và câu lạc bộ lập trình.',
      en: 'Major in Software Engineering. Participated in team projects and programming clubs.',
    },
  },
  {
    id: 2,
    type: 'internship',
    date: {
      vi: '2025 - 2026',
      en: '2025 - 2026',
    },
    title: {
      vi: 'AI Agent Developer',
      en: 'AI Agent Developer',
    },
    organization: {
      vi: 'Nexle Soft Company',
      en: 'Nexle Soft Company',
    },
    description: {
      vi: 'Tham gia và tập trung nghiên cứu phát triển chatbot AI agent và RAG system',
      en: 'Participated in developing AI agent and RAG system.',
    },
  },
]
