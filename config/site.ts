export type SiteConfig = {
    name: string
    url: string
    links: {
        github: string
        twitter?: string
        discord?: string
    }
}

export const siteConfig: SiteConfig = {
    name: "Portfolio",
    url: "https://example.com",
    links: {
        github: "https://github.com/yashi846",
    },
}

export default siteConfig
