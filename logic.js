var button=document.querySelector('.btn')
var header=document.querySelector('header')


function changeBox() {
    console.log("function is running....");
    header.innerHTML='Congratulations Submitted your Form'
    header.style.background="linear-gradient(to bottom, lightblue, pink)";
    header.style.fontSize='5rem';
}
button.addEventListener('click',changeBox)