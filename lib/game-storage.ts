export type SavedGame = {
  id: string
  pais: string
  lider: string
  currentNode: string
  stats: {
    popularidad: number
    derechos: number
    economia: number
    estabilidad: number
  }
  timestamp: number
}

const STORAGE_KEY = "political_game_saves"

export function getSavedGames(): SavedGame[] {
  if (typeof window === "undefined") return []

  try {
    const saved = localStorage.getItem(STORAGE_KEY)
    return saved ? JSON.parse(saved) : []
  } catch {
    return []
  }
}

export function getSavedGame(id: string): SavedGame | null {
  const games = getSavedGames()
  return games.find((game) => game.id === id) || null
}

export function saveGame(game: SavedGame): void {
  if (typeof window === "undefined") return

  try {
    const games = getSavedGames()
    const index = games.findIndex((g) => g.id === game.id)

    if (index >= 0) {
      games[index] = game
    } else {
      games.push(game)
    }

    localStorage.setItem(STORAGE_KEY, JSON.stringify(games))
  } catch (error) {
    console.error("Error saving game:", error)
  }
}

export function deleteSavedGame(id: string): void {
  if (typeof window === "undefined") return

  try {
    const games = getSavedGames()
    const filtered = games.filter((game) => game.id !== id)
    localStorage.setItem(STORAGE_KEY, JSON.stringify(filtered))
  } catch (error) {
    console.error("Error deleting game:", error)
  }
}
