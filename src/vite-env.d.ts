/// <reference types="vite/client" />

interface ImportMetaEnv {
  readonly VITE_FORMSPREE_ID: string
  readonly VITE_HASHNODE_HOST: string
  readonly VITE_LASTFM_API_KEY: string
  readonly VITE_LASTFM_USERNAME: string
  readonly VITE_GITHUB_TOKEN: string
  readonly VITE_GA_TRACKING_ID: string
}

interface ImportMeta {
  readonly env: ImportMetaEnv
}