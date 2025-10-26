export interface Project {
  id: string
  title: string
  description: string
  shortDescription: string
  image: string
  tags: string[]
  results: ProjectResult[]
  link?: string
}

export interface ProjectResult {
  title: string
  description: string
  image: string
}

export interface Skill {
  name: string
  level: number
  icon?: string 
  category?: string
}

export interface Experience {
  title: string
  company: string
  period: string
  description: string
}
