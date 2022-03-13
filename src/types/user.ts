export interface IUser {
  _id: string
  username: string
  email: string
  points: number
  token: string
}

export interface UserDetails {
  username?: string
  email: string
  password: string
  confirmPassword?: string
}
