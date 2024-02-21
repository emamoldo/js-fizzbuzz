// Creating a for cicle with numbers that goes from 1 to 100;


// Cicle that goes from 1 to 100;
const elementList = document.getElementById("list");


for (let i = 1; i <= 100; i++) {

    
    
    
    if (i % 3 == 0 && i % 5 == 0) {
        console.log("FizzBuzz");
        elementList.insertAdjacentHTML('beforeend', `<li class="box fizzbuzz">FizzBuzz</li>`);

    } else if (i % 3 == 0) {
        console.log("Fizz");
        elementList.insertAdjacentHTML('beforeend', `<li class="box fizz">Fizz</li>`);

    } else if (i % 5 == 0) {
        console.log("Buzz");
        elementList.insertAdjacentHTML('beforeend', `<li class="box buzz">Buzz</li>`);

    } else {
        console.log(i);
        elementList.insertAdjacentHTML('beforeend', `<li class="box ${i}">${i}</li>`);

    }
    
}


// ``