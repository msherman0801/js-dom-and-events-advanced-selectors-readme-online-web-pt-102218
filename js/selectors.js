// declare your functions here...

function paragraphSelector() {
    return $("p");
}

function lastImageSelector() {
    return $(".pics img:last");
}

function ninjaBabySelector() {
    return $("#baby-ninja")
}

function divSelector() {
    let arr = []
    let index = 0
    const out = $("div")
    while (index < 2) {
        arr.push(out[index])
        index++
    }
    return arr
}

function firstListItem() {
    return $("li:first-child")
}