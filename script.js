const root=document.getElementById("root")
let counter=0
function increase(){
    counter++
    console.log(counter);
    root.innerHTML = counter;
    root.style.color='green'
}
function decrease(){
    counter--
    console.log(counter);
   root.innerHTML=counter
   root.style.color='red'
}
function reset(){
    counter=0
    console.log(counter);
    root.innerHTML=counter
    root.style. color= rgb(133, 133, 215);
}
