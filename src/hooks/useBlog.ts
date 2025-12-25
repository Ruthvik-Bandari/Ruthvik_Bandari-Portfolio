import { useQuery } from '@tanstack/react-query'

interface HashnodePost {
  id: string
  title: string
  brief: string
  slug: string
  coverImage?: {
    url: string
  }
  publishedAt: string
  readTimeInMinutes: number
  tags: Array<{
    name: string
    slug: string
  }>
  url: string
}

interface HashnodeResponse {
  data: {
    publication: {
      posts: {
        edges: Array<{
          node: HashnodePost
        }>
      }
    }
  }
}

export interface BlogPost {
  id: string
  title: string
  excerpt: string
  slug: string
  coverImage: string
  publishedAt: string
  readTime: number
  tags: string[]
  url: string
}

// Your Hashnode blog handle (the part after hashnode.dev/)
const HASHNODE_HOST = import.meta.env.VITE_HASHNODE_HOST || 'hallucination-detection-for-llms.hashnode.dev'

const HASHNODE_QUERY = `
  query GetPosts($host: String!, $first: Int!) {
    publication(host: $host) {
      posts(first: $first) {
        edges {
          node {
            id
            title
            brief
            slug
            coverImage {
              url
            }
            publishedAt
            readTimeInMinutes
            tags {
              name
              slug
            }
            url
          }
        }
      }
    }
  }
`

export function useBlogPosts(limit: number = 6) {
  return useQuery({
    queryKey: ['blog-posts', HASHNODE_HOST, limit],
    queryFn: async (): Promise<BlogPost[]> => {
      try {
        const response = await fetch('https://gql.hashnode.com/', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            query: HASHNODE_QUERY,
            variables: {
              host: HASHNODE_HOST,
              first: limit,
            },
          }),
        })

        if (!response.ok) {
          throw new Error('Failed to fetch blog posts')
        }

        const data: HashnodeResponse = await response.json()
        
        if (!data.data?.publication?.posts?.edges) {
          return []
        }

        return data.data.publication.posts.edges.map(({ node }) => ({
          id: node.id,
          title: node.title,
          excerpt: node.brief,
          slug: node.slug,
          coverImage: node.coverImage?.url || '/images/default-blog.png',
          publishedAt: node.publishedAt,
          readTime: node.readTimeInMinutes,
          tags: node.tags.map(tag => tag.name),
          url: node.url,
        }))
      } catch (error) {
        console.error('Failed to fetch Hashnode posts:', error)
        return []
      }
    },
    staleTime: 1000 * 60 * 10, // 10 minutes
  })
}

// Get a single post by slug
export function useBlogPost(slug: string) {
  return useQuery({
    queryKey: ['blog-post', HASHNODE_HOST, slug],
    queryFn: async (): Promise<BlogPost | null> => {
      try {
        const response = await fetch('https://gql.hashnode.com/', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            query: `
              query GetPost($host: String!, $slug: String!) {
                publication(host: $host) {
                  post(slug: $slug) {
                    id
                    title
                    brief
                    slug
                    coverImage {
                      url
                    }
                    publishedAt
                    readTimeInMinutes
                    tags {
                      name
                      slug
                    }
                    url
                    content {
                      html
                    }
                  }
                }
              }
            `,
            variables: {
              host: HASHNODE_HOST,
              slug,
            },
          }),
        })

        if (!response.ok) return null

        const data = await response.json()
        const post = data.data?.publication?.post

        if (!post) return null

        return {
          id: post.id,
          title: post.title,
          excerpt: post.brief,
          slug: post.slug,
          coverImage: post.coverImage?.url || '',
          publishedAt: post.publishedAt,
          readTime: post.readTimeInMinutes,
          tags: post.tags.map((tag: any) => tag.name),
          url: post.url,
        }
      } catch {
        return null
      }
    },
    enabled: !!slug,
  })
}
