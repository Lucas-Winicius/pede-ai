import api from './api'

interface LoginResponse {
  token: string
}

export const login = async (email: string, password: string): Promise<LoginResponse> => {
  const response = await api.post<LoginResponse>('/login', { email, password })
  localStorage.setItem('token', response.data.token)
  return response.data
}

export const logout = () => {
  localStorage.removeItem('token')
}

export const isAuthenticated = (): boolean => {
  return !!localStorage.getItem('token')
}
