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

$('#hozzaado').click(function() {
$("ul").append('<li>ujabb elem</li>')
})

$('#torlo').click(() => {
    $("li:last-of-type").remove()
    })

    for (let i = 0; i < 100; i = i + 1) {
 $("ul").append(`<li>${i}. Nem csalok tobbet a vizsgan.</li>`)
   }

   let szinek = ['orange', 'magenta', 'red', 'brown', 'blue', 'teal']

   function egySzinDoboz(szin) {
$('.kontener').append('<div class="doboz"></div>')
$('.kontener div:last-of-type').css('background-color', szin)
   }

egySzinDoboz('lime')
egySzinDoboz('pink')



   szinek.forEach(egySzinDoboz)