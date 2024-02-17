export interface User {
  id?: string
  username?: string
  isVerified?: Number
  kelas?: Number
  email: string
  token?: string
  role?: string
}

export interface Project {
  id: string
  user_id: Number
  tool_id: Array<Number>
  nama_project: string
  github: string
}

export interface Tools {
  id?: string
  tools: string
  image: string
}

export interface Total {
  user: string
  project: string
  tools: string
}
