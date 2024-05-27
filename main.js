
let width1 ='50%';
let height1 ='290px';
let borderRadius1 = '20px';
let backgroundColor1 = 'green';



let square = document.getElementById('square');
let btn = document.getElementById('btn');
let btn2 = document.getElementById('btn2');



btn.addEventListener('click', () => {
    square.style.width = width1 ;
    square.style.height = height1;
    square.style.borderRadius = borderRadius1;
    square.style.backgroundColor = backgroundColor1;
});


btn2.addEventListener('click', () => {
    square.style.width = '30%';
    square.style.height = '400px';
    square.style.borderRadius = '0px';
    square.style.backgroundColor = 'blue';
    });