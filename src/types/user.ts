export interface IUser {
  _id: string
  username: string
  email: string
  score: number
  token: string
}

export interface UserDetails {
  username?: string | undefined
  email: string
  password: string
  confirmPassword?: string
}
