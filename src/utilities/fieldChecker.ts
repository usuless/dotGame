const roadblocks = ["|", "-"]

export let fieldCheck = (e: string) => {
    const element = {
      class: "bg-red-500"
    }
    if(e === ".") {
      element.class = "bg-white"
    } else if (e === "X") {
      element.class = "bg-green-500"
    } else if(roadblocks.includes(e)) {
      element.class = "bg-red-500"
    } else if(e === '*') {
      element.class = "bg-yellow-500"
    }
    return element
  }