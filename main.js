
function carB(){
    let carCounter = 10;
    const maxCars = 25;

    while (carCounter < maxCars) {
        window.alert("Car Number" + carCounter + "is entering");
        carCounter += 1;
    }
    window.alert("Garage is full.")
}
