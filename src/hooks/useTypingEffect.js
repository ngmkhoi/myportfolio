import { useState, useEffect } from 'react'

/**
 * Custom hook for typing animation effect
 * @param {string[]} words - Array of words to type
 * @param {number} typingSpeed - Speed of typing in ms (default: 150)
 * @param {number} deletingSpeed - Speed of deleting in ms (default: 100)
 * @param {number} delayBetweenWords - Delay between words in ms (default: 2000)
 * @returns {string} Current text being displayed
 */
export function useTypingEffect(
  words = [],
  typingSpeed = 150,
  deletingSpeed = 100,
  delayBetweenWords = 2000
) {
  const [state, setState] = useState({
    currentWordIndex: 0,
    currentText: '',
    isDeleting: false,
  })

  useEffect(() => {
    if (!words || words.length === 0) return

    const { currentWordIndex, currentText, isDeleting } = state
    const currentWord = words[currentWordIndex]

    // Pause after typing complete word
    if (!isDeleting && currentText === currentWord) {
      const pauseTimer = setTimeout(() => {
        setState((prev) => ({ ...prev, isDeleting: true }))
      }, delayBetweenWords)
      return () => clearTimeout(pauseTimer)
    }

    // Move to next word after deleting
    if (isDeleting && currentText === '') {
      const nextTimer = setTimeout(() => {
        setState((prev) => ({
          ...prev,
          isDeleting: false,
          currentWordIndex: (prev.currentWordIndex + 1) % words.length,
        }))
      }, typingSpeed)
      return () => clearTimeout(nextTimer)
    }

    // Typing or deleting
    const timer = setTimeout(
      () => {
        setState((prev) => ({
          ...prev,
          currentText: prev.isDeleting
            ? currentWord.slice(0, prev.currentText.length - 1)
            : currentWord.slice(0, prev.currentText.length + 1),
        }))
      },
      isDeleting ? deletingSpeed : typingSpeed
    )

    return () => clearTimeout(timer)
  }, [state, words, typingSpeed, deletingSpeed, delayBetweenWords])

  return state.currentText
}
