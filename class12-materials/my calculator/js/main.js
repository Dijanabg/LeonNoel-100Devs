let total = 0

document.querySelector('#nula').addEventListener('click', makeZero)
document.querySelector('#jedan').addEventListener('click', jumanji)
document.querySelector('#dva').addEventListener('click', two)
document.querySelector('#tri').addEventListener('click', Vladan)
document.querySelector('#cetiri').addEventListener('click', Ana)
document.querySelector('#pet').addEventListener('click', Jelena)
document.querySelector('#sest').addEventListener('click', Zuzana)
document.querySelector('#sedam').addEventListener('click', Zebra)
document.querySelector('#osam').addEventListener('click', Bog)


function makeZero() {
    total = 0
    document.querySelector('#placeToPutResult').innerText = total
}
function jumanji() {
    total = total + 1
    document.querySelector('#placeToPutResult').innerText = total
}
function two() {
    total = total + 2
    document.querySelector('#placeToPutResult').innerHTML = total
}
function Vladan() {
    total = total + 3
    document.querySelector('#placeToPutResult').innerHTML = total
}
function Ana() {
    total = total + 4
    document.querySelector('#placeToPutResult').innerHTML = total
}
function Jelena() {
    total = total + 5
    document.querySelector('#placeToPutResult').innerHTML = total
}
function Zuzana() {
    total = total + 6
    document.querySelector('#placeToPutResult').innerHTML = total
}
function Zebra() {
    total = total + 7
    document.querySelector('#placeToPutResult').innerHTML = total
}
function Bog() {
    total = total + 8
    document.querySelector('#placeToPutResult').innerHTML = total
}
