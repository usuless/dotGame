export const moveRight = (map: string[], playerLocation: number[]) => {
    if (playerLocation[1] === map[1].length - 1) {
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
    if (playerLocation[1] === 0) {
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

export const moveUp = (map: string[], playerLocation: number[]) => {
    if (playerLocation[1] === map[1].length - 1) {
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

export const moveDown = (map: string[], playerLocation: number[]) => {
    if (playerLocation[1] === map[1].length - 1) {
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
