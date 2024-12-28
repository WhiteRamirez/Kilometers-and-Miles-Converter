
function MilesTokilom() {
    let miles = document.getElementById(`MilesToKm`).value
    let kilometers = miles * 1.61
    document.getElementById(`ResultMilesToKm`).innerText =  kilometers.toFixed(2) + " км"
}
function KmToMiles() {
    let kilometers = document.getElementById(`KmToMiles`).value
    let miles = kilometers * 0.61
    document.getElementById(`ResultKmToMiles`).innerText =  miles.toFixed(2) + " миль"
}
function SmToDy() {
    let dymes = document.getElementById(`SmToDy`).value
    let sentimeters = dymes * 0.3937
    document.getElementById(`ResultSmToDy`).innerText = sentimeters.toFixed(2) + " дюйм"
}
function DyToSm() {
    let sentimeters = document.getElementById(`DyToSm`).value
    let dymes = sentimeters * 2.54
    document.getElementById(`ResultDyToSm`).innerText = dymes.toFixed(2) + " см"
}