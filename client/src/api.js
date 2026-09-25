export const API_URL = 'http://localhost:4000/api'

export const get = async (path) => {
  const res = await fetch(`${API_URL}${path}`)
  if (!res.ok) throw new Error(`API svarade ${res.status}`)
  return res.json()
}
