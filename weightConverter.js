function kilosToPounds(kg)
{
    return kg * 2.2046;
}

function poundsToKilos(lbs)
{
    return lbs / 2.2046;
}

let lbs = kilosToPounds(100);

let kilos = poundsToKilos(lbs);

console.log(lbs + " libras es igual a " + kilos + " kilos.")