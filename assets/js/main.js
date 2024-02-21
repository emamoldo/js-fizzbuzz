// Creating a for cicle with numbers that goes from 1 to 100;


// Cicle that goes from 1 to 100;
const elementList = document.getElementById("list");

for (let i = 1; i <= 35; i++) {


    elementList.insertAdjacentHTML('beforeend', `<li class="box">${i}</li>`);

    if (i % 3 == 0 && i % 5 == 0) {
        console.log("FizzBuzz");

    } else if (i % 3 == 0) {
        console.log("Fizz");
    } else if (i % 5 == 0) {
        console.log("Buzz");
    } else {
        console.log(i);
    }
    
}


// ``