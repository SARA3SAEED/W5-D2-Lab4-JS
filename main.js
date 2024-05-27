



let square = document.getElementById('square');
let btn = document.getElementById('btn');
let btn2 = document.getElementById('btn2');

let t1 = document.getElementById('t1');
let t2 = document.getElementById('t2');
let t3 = document.getElementById('t3');
let t4 = document.getElementById('t4');


btn.addEventListener('click', () => {
    square.style.width = t1.value + 'px';
    square.style.height = t2.value + 'px';
    square.style.borderRadius = t3.value + 'px';
    square.style.backgroundColor = t4.value;
  


 
});


btn2.addEventListener('click', () => {
    square.style.width = '30%';
    square.style.height = '400px';
    square.style.borderRadius = '0px';
    square.style.backgroundColor = 'blue';
    });