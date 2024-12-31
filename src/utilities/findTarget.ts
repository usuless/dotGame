export let findTarget = (map: string[], target:string) => {
    for(let i = 0; i < map.length; i++) {
      for(let idx = 0; idx < map[i].length; idx++) {
        if(map[i][idx] === target) {
          let targetLocation = [i, idx]
          return targetLocation
        }
    }
}
return [420,69]
}