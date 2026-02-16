import { useState, useEffect } from 'react'
import { profile } from '../data/profile'

const CACHE_KEY = 'github_repos_cache'
const CACHE_DURATION = 30 * 60 * 1000 // 30 minutes

/**
 * Custom hook to fetch GitHub repos and user data.
 * Implements caching to avoid rate limits (60 req/hour unauthenticated).
 *
 * @param {string} username - GitHub username
 * @returns {{ repos, user, loading, error }}
 */
export function useGitHub(username) {
  const [repos, setRepos] = useState([])
  const [user, setUser] = useState(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)

  useEffect(() => {
    if (!username) {
      setLoading(false)
      return
    }

    const fetchData = async () => {
      // Check cache first
      const cached = localStorage.getItem(CACHE_KEY)
      if (cached) {
        const { data, timestamp } = JSON.parse(cached)
        if (Date.now() - timestamp < CACHE_DURATION) {
          setRepos(data.repos)
          setUser(data.user)
          setLoading(false)
          return
        }
      }

      try {
        setLoading(true)
        const [reposRes, userRes] = await Promise.all([
          fetch(`https://api.github.com/users/${username}/repos?sort=updated&per_page=6`),
          fetch(`https://api.github.com/users/${username}`),
        ])

        if (!reposRes.ok || !userRes.ok) {
          throw new Error('GitHub API rate limited or unavailable')
        }

        const reposData = await reposRes.json()
        const userData = await userRes.json()

        // Sort by stars, then filter out hidden repos
        const hidden = profile.hiddenRepos || []
        const sortedRepos = reposData
          .sort((a, b) => b.stargazers_count - a.stargazers_count)
          .filter((repo) => !hidden.includes(repo.name))

        setRepos(sortedRepos)
        setUser(userData)

        // Cache the results
        localStorage.setItem(CACHE_KEY, JSON.stringify({
          data: { repos: sortedRepos, user: userData },
          timestamp: Date.now(),
        }))
      } catch (err) {
        setError(err.message)
      } finally {
        setLoading(false)
      }
    }

    fetchData()
  }, [username])

  return { repos, user, loading, error }
}
