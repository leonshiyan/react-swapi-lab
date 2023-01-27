const baseUrl = "https://swapi.dev"

export async function getAllStarships() {
  const res = await fetch(`${baseUrl}/api/starships/`)
  console.log(res)
  return res.json()
}
