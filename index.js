// Code your solution in this file!


function distanceFromHqInBlocks(street) {
    return Math.abs(street - 42);
}

function distanceFromHqInFeet(street) {
    return Math.abs(street - 42) * 264;
}

function distanceTravelledInFeet(start, destination) {
    return Math.abs(( destination - start ) * 264);
}

function calculatesFarePrice(start, destination) {
    const distance = Math.abs(( destination - start ) * 264);

    if (distance <= 400) return 0;
    if (distance < 2000) return (distance - 400) * 0.02;
    if (distance > 2000 && distance <= 2500) return 25;
    else return 'cannot travel that far';

}