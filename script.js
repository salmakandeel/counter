const root=document.getElementById("root")
let counter=0
function increase(){
    counter++
    console.log(counter);
    root.innerHTML = counter;
}
function decrease(){
    counter--
    console.log(counter);
   root.innerHTML=counter
}
function reset(){
    counter=0
    console.log(counter);
    root.innerHTML=counter
}