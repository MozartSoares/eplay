class Game {
  category: string
  description: string
  image: string
  infos: string[]
  title: string
  system: string
  id: number

  constructor(
    category: string,
    description: string,
    image: string,
    infos: string[],
    title: string,
    system: string,
    id: number
  ) {
    this.id = id
    this.category = category
    this.description = description
    this.image = image
    this.infos = infos
    this.title = title
    this.system = system
  }
}

export default Game
