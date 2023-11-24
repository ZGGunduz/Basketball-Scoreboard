let homePointCount = document.getElementById("count-home")
let awayPointCount = document.getElementById("count-away")

let homeCount = 0
let awayCount = 0


function incrementHomeOne(){
    homeCount += 1
    homePointCount.textContent = homeCount
}

function incrementHomeTwo(){
    homeCount += 2
    homePointCount.textContent = homeCount
}

function incrementHomeThree(){
    homeCount += 3
    homePointCount.textContent = homeCount
}

function incrementAwayOne(){
    awayCount += 1
    awayPointCount.textContent = awayCount
}

function incrementAwayTwo(){
    awayCount += 2
    awayPointCount.textContent = awayCount
}

function incrementAwayThree(){
    awayCount += 3
    awayPointCount.textContent = awayCount
}