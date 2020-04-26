const log = console.log.bind(console)

const e = function (sel) {
    return document.querySelector(sel)
}

const es = function (sel) {
    return document.querySelectorAll(sel)
}

const randomIntBetween = function (a, b) {
    return Math.floor(Math.random() * b) + a
}
