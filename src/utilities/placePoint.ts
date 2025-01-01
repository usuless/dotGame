const getRandomInt = (max: number) => {
    return Math.floor(Math.random() * max);
}

export const placePoint = (map: string[]) => {
    let randomY = getRandomInt(map.length)
    let randomX = getRandomInt(map[randomY].length)
    while(map[randomY][randomX] != ".") {
        randomY = getRandomInt(map.length)
        randomX = getRandomInt(map[randomY].length)
    }

    let line = map[randomY];
    let parsedLine = [...line];
    parsedLine[randomX] = "*";
    line = parsedLine.join("");
    map[randomY] = line;
    return map;
}