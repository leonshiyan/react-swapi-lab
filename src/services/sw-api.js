const baseUrl = "https://swapi.dev"

export async function getAllStarships() {
  const res = await fetch(`${baseUrl}/api/starships/`)
  console.log(res)
  return res.json()
}

export async function getDetails(apiUrl) {
  const res = await fetch(`${apiUrl}`)
  return res.json()
}