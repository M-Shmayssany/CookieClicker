let count = 0;
let score = 0;
let clickCount = document.getElementById("click");
let autoclicker = document.getElementById("autoclicker");
 
 document.getElementById("click").addEventListener('click', ()=>{
    autoclicker.disabled = true;
    console.log('ok');
});