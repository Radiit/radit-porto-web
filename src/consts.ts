import type { Site, Page, Links, Socials } from "@types"

// Global
export const SITE: Site = {
  TITLE: ".is-a.dev",
  DESCRIPTION: "Welcome to Astro Sphere, a portfolio and blog for designers and developers.",
  AUTHOR: "Raditya Aydin",
}

// Work Page
export const WORK: Page = {
  TITLE: "Work",
  DESCRIPTION: "Places I have worked.",
}

// Blog Page
export const BLOG: Page = {
  TITLE: "Blog",
  DESCRIPTION: "Writing on topics I am passionate about.",
}

// Projects Page 
export const PROJECTS: Page = {
  TITLE: "Projects",
  DESCRIPTION: "Recent projects I have worked on.",
}

// Search Page
export const SEARCH: Page = {
  TITLE: "Search",
  DESCRIPTION: "Search all posts and projects by keyword.",
}

// Links
export const LINKS: Links = [
  { 
    TEXT: "Home", 
    HREF: "/", 
  },
  { 
    TEXT: "Work", 
    HREF: "/work", 
  },
  { 
    TEXT: "Blog", 
    HREF: "/blog", 
  },
  { 
    TEXT: "Projects", 
    HREF: "/projects", 
  },
]

// Socials
export const SOCIALS: Socials = [
  { 
    NAME: "Email",
    ICON: "email", 
    TEXT: "radityaaydin@gmail.com",
    HREF: "mailto:radityaaydin@gmail.com",
  },
  { 
    NAME: "Github",
    ICON: "github",
    TEXT: "Radiit",
    HREF: "https://github.com/Radiit"
  },
  { 
    NAME: "LinkedIn",
    ICON: "linkedin",
    TEXT: "Raditya Aydin",
    HREF: "https://linkedin.com/in/radityaaydin",
  },
  { 
    NAME: "Discord",
    ICON: "discord",
    TEXT: ".radit",
    HREF: "https://discord.com/users/263839843732291585",
  },
]

