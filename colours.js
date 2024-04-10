const changedcolor = (color, delay) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            document.body.style.backgroundColor = color;
            resolve()
        }, 1000)
    })
}

changedcolor('orange', 1000)
    .then(() => changedcolor("red", 1000))
    .then(() => changedcolor('olive', 1000))
    .then(() => changedcolor('green', 1000))
    .then(() => changedcolor('orange', 1000))
    .then(() => changedcolor('blue', 1000))
    .then(() => changedcolor('magenta', 1000))
    .then(() => changedcolor('violet', 1000))




