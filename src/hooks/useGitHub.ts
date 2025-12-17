import { useQuery } from '@tanstack/react-query'

interface GitHubRepo {
  name: string
  full_name: string
  html_url: string
  description: string
  stargazers_count: number
  forks_count: number
  watchers_count: number
  language: string
  updated_at: string
  topics: string[]
}

interface GitHubUser {
  login: string
  avatar_url: string
  html_url: string
  public_repos: number
  followers: number
  following: number
  bio: string
}

const GITHUB_USERNAME = 'Ruthvik-Bandari'

// Fetch user profile
export function useGitHubUser() {
  return useQuery({
    queryKey: ['github-user', GITHUB_USERNAME],
    queryFn: async (): Promise<GitHubUser> => {
      const response = await fetch(`https://api.github.com/users/${GITHUB_USERNAME}`)
      if (!response.ok) throw new Error('Failed to fetch user')
      return response.json()
    },
    staleTime: 1000 * 60 * 10, // 10 minutes
  })
}

// Fetch all repos
export function useGitHubRepos() {
  return useQuery({
    queryKey: ['github-repos', GITHUB_USERNAME],
    queryFn: async (): Promise<GitHubRepo[]> => {
      const response = await fetch(
        `https://api.github.com/users/${GITHUB_USERNAME}/repos?per_page=100&sort=updated`
      )
      if (!response.ok) throw new Error('Failed to fetch repos')
      return response.json()
    },
    staleTime: 1000 * 60 * 5, // 5 minutes
  })
}

// Fetch specific repo stats
export function useGitHubRepoStats(repoName: string) {
  return useQuery({
    queryKey: ['github-repo', GITHUB_USERNAME, repoName],
    queryFn: async (): Promise<GitHubRepo | null> => {
      try {
        const response = await fetch(
          `https://api.github.com/repos/${GITHUB_USERNAME}/${repoName}`
        )
        if (!response.ok) return null
        return response.json()
      } catch {
        return null
      }
    },
    staleTime: 1000 * 60 * 5,
    enabled: !!repoName,
  })
}

// Map project ID to GitHub repo name
export const projectRepoMap: Record<string, string> = {
  'ctppo': 'CTPPO-Cyber_Threat_Propagation_Path_Optimizer',
  'mindcare-ai': 'AAI6600-Research-Aggregation-Pipeline',
  'image-prompt-generator': 'Image_Prompt_Generator',
  'taskapp': 'Task-app',
  'neuroface': 'NeuroFace-Recognition-System',
  'cybersafex': 'CyberSafeX-Detection-Suite',
  'customer-intelligence': 'Customer-intelligence-pipeline',
  'heuristers': 'Heuristers-Technology-Solutions-LLP',
}

// Get total stats across all repos
export function useGitHubTotalStats() {
  const { data: repos } = useGitHubRepos()

  if (!repos) return { totalStars: 0, totalForks: 0, totalRepos: 0 }

  return {
    totalStars: repos.reduce((acc, repo) => acc + repo.stargazers_count, 0),
    totalForks: repos.reduce((acc, repo) => acc + repo.forks_count, 0),
    totalRepos: repos.length,
  }
}
