const walls = ["-", "|"]

export const moveRight = (map: string[], playerLocation: number[]) => {
    if (playerLocation[1] === map[1].length - 1 || walls.includes(map[playerLocation[0]][playerLocation[1] + 1])) {
        return map;
    }

    let line = map[playerLocation[0]];
    let parsedLine = [...line];
    parsedLine[playerLocation[1]] = ".";
    parsedLine[playerLocation[1] + 1] = "X";
    line = parsedLine.join("");
    map[playerLocation[0]] = line;
    return map;
};

export const moveLeft = (map: string[], playerLocation: number[]) => {
    if (playerLocation[1] === 1 || walls.includes(map[playerLocation[0]][playerLocation[1] - 1])) {
        return map;
    }
    let line = map[playerLocation[0]];
    let parsedLine = [...line];
    parsedLine[playerLocation[1]] = ".";
    parsedLine[playerLocation[1] - 1] = "X";
    line = parsedLine.join("");
    map[playerLocation[0]] = line;
    return map;
};

export const moveUp = (map: string[], playerLocation: number[]) => {
    if (playerLocation[0] === 1 || walls.includes(map[playerLocation[0] - 1][playerLocation[1]])) {
        return map;
    }
    let previousLine = map[playerLocation[0]];
    let nextLine = map[playerLocation[0] - 1]
    let parsedLine = [...previousLine];
    let parsedNextLine = [...nextLine]
    parsedLine[playerLocation[1]] = ".";
    parsedNextLine[playerLocation[1]] = "X";
    previousLine = parsedLine.join("");
    nextLine = parsedNextLine.join("")
    map[playerLocation[0] - 1] = nextLine
    map[playerLocation[0]] = previousLine;
    return map;
};

export const moveDown = (map: string[], playerLocation: number[]) => {
    if (playerLocation[0] === map.length - 2 || walls.includes(map[playerLocation[0] + 1][playerLocation[1]])) {
        return map;
    }
    let previousLine = map[playerLocation[0]];
    let nextLine = map[playerLocation[0] + 1]
    let parsedLine = [...previousLine];
    let parsedNextLine = [...nextLine]
    parsedLine[playerLocation[1]] = ".";
    parsedNextLine[playerLocation[1]] = "X";
    previousLine = parsedLine.join("");
    nextLine = parsedNextLine.join("")
    map[playerLocation[0] + 1] = nextLine
    map[playerLocation[0]] = previousLine;
    return map;
};
