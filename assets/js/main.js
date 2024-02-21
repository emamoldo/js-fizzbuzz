// Creating a for cicle with numbers that goes from 1 to 100;


// Const
const three = 3;
const five = 5;


// Cicle that goes from 1 to 100;
const elementList = document.getElementById("list")

for (let i = 1; i <= 35; i++) {

    console.log(i);
    elementList.insertAdjacentHTML('beforeend', `<li class="box">${i}</li>`)

    const remainder3 = i % three
    if (remainder3 === 0) {
        console.log("Fizz");
    }
    

    const remainder5 = i % five
    if (remainder5 === 0) {
        console.log("Buzz");
    }

}


// ``