
const getRandomInt = (max: number) => {
    return Math.floor(Math.random() * max);
}



export const placePoint = (map: string[]) => {
    let randomY = getRandomInt(map.length - 2)
    let randomX = getRandomInt(map[randomY].length - 2)
    console.log(randomY,randomX)
    while(map[randomY][randomX] != ".") {
        randomY = getRandomInt(map.length - 2)
        randomX = getRandomInt(map[randomY].length - 2)
    }

    let line = map[randomY];
    let parsedLine = [...line];
    parsedLine[randomX] = "*";
    line = parsedLine.join("");
    map[randomY] = line;
    return map;
}