var wartoscsuwaka = document.getElementById("myRange");
var circle = document.getElementById('circle');
var circleText = document.getElementById('circleText');

function aktualizacjaSuwak() {
    var promien = wartoscsuwaka.value; // Pobierz wartość z suwaka
    circle.style.width = `${promien}px`; // Zaktualizuj szerokość koła
    circle.style.height = `${promien}px`; // Zaktualizuj wysokość koła
    circleText.textContent = promien;    // Zaktualizuj tekst wewnątrz koła
}

// Nasłuchiwanie na zmianę wartości suwaka
wartoscsuwaka.addEventListener('input', aktualizacjaSuwak);

