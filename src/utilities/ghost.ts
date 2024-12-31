export const ghost = (player: number[], ghost: number[], map: string[], score: number) => {
    let highestY: number
    let highestX: number
    if(player[0] > ghost[0]) {
        highestY = player[0]
    } else {
        highestY = ghost[0]
    }

    if(player[1] > ghost[1]) {
        highestY = player[1]
    } else {
        highestY = ghost[1]
    }

    const ghostMove = async () => {
        return ghost[ghost[0], ghost[1] - 1]
    }
    while(player != ghost || score < 20) {
        setTimeout(ghostMove, 1000)
    }
}