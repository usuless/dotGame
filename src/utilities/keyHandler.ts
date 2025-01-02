import { moveDown, moveLeft, moveRight, moveUp } from "./moveSet";

export const handleKey = (key: string, map: string[], playerLocation: number[]) => {
    switch(key) {
        case "ArrowDown":
          return map = moveDown(map, playerLocation)
        case "ArrowUp":
          return map = moveUp(map, playerLocation)
        case "ArrowLeft":
          return map = moveLeft(map, playerLocation)
        case "ArrowRight":
          return map = moveRight(map, playerLocation)
        default:
          return map
        }
}