let nevem ="Marcsi"
let azEnKorom = 47
console.log('A JavaScript is betoltott')
console.log(nevem)

if (azEnKorom > 18) {
    console.log('Mar eleg idos ahhoz, hogy igyon egy sort')
}

console.log('Ez itt a vege')

//jQuerys resz

// let szovegAzOldalon = $("h1").text()
// console.log(szovegAzOldalon)

console.log($("h1").text())
$("h1").text("Ezt javascriptbol valtoztattuk meg!")

console.log($(".sarga").css("background-color"))
$(".sarga").css("background-color", "magenta")

$('button').click(function() {
$("ul").append('<li>ujabb elem</li>')
})
