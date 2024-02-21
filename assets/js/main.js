// Creating a for cicle with numbers that goes from 1 to 100;

const elementList=document.getElementById("list")

for (let i=1; i<=14; i++) {
    console.log(i);
        elementList.insertAdjacentHTML('beforeend', `<li class="box">${i}</li>` )
}
