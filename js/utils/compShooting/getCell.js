export const getCell = (X, Y, id) => {
    return document.querySelector(`${id} [data--x = "${X}"][data--y = "${Y}"]`)
}