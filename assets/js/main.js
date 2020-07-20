// VAR DELCARATION

let click = 1;
let count = localStorage.setItem('count',0);
let cookie = document.getElementById('cookie');
let upgrade = document.getElementById('amelioration');
let boost = document.getElementById('boost');
let btnUpgrade = document.getElementById('boutonAmelioration');
let autoClicker = document.getElementById('autoclicker');
let target = document.getElementById('target');
let upgradeCount = 0 ;
let multiplier = 1;
let multiplierCost = 50;
let autoclickCost = 25;

// action button
btnUpgrade.addEventListener('click', ()=>{
    if(Number(count) > 5){
    count -= 5;
    localStorage.setItem('count',count);
    upgradeCount++;
    click = upgradeCount;
    return click;
    
    }else{
        alert("Vous n'avez pas assez de points .");
        
    }
})


cookie.addEventListener('click',()=>{
    count = localStorage.getItem('count');
    count = Number(click) + Number(count);
    localStorage.setItem('count', count);
    DisplayCount();
})

autoClicker.addEventListener('click',()=>{
    if(Number(count) > 25){
        count -= autoclickCost;
        DisplayCount();
        for(let i = 0 ; i < 50 ; i++){
        count++ ;
        
        DisplayCount();
        
    }
    localStorage.setItem('count' , count);
    }else{
        
        alert("Vous n'avez pas assez de points .");
    }
})
upgrade.addEventListener('click', ()=>{
    if(count > 100){
        count -= 100 ;
        localStorage.setItem('count' , count);
        DisplayCount();
        for(let i = 0; i<100;i++){
            count += 3;
            localStorage.setItem('count' , count);
            DisplayCount();
        }
    }else{
        alert("Vous n'avez pas assez de points .");
    }
        DisplayCount();
})
console.log(click);


// function 

function DisplayCount(){
    target.innerHTML = localStorage.getItem('count');
}
