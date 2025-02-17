import { gameFile1 } from "../assets/maps/game1";
import { gameFile2 } from "../assets/maps/game2";
import { gameFile3 } from "../assets/maps/game3";

export const loadMap = (id: number) => {
    let map = "";
    switch (id) {
        default:
        case 1:
            map = gameFile1;
            break;
        case 2:
            map = gameFile2;
            break;
        case 3:
            map = gameFile3;
    }

    return map.split("\n");
};
