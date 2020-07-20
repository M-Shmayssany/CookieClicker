// VAR DELCARATION

let click = 1;
let count = localStorage.setItem('count',0);
let cookie = document.getElementById('cookie');
let upgrade = document.getElementById('upgrade');
let boost = document.getElementById('boost');
let amelio = document.getElementById('amelioration');
let autoClicker = document.getElementById('autoclicker');
let target = document.getElementById('target');
let upgradeCount = 0 ;
let multiplier = 1;
let amelioCost = 100;
let upgradeCost = 5;
let multiplierCost = 50;
let autoclickCost = 25;

// action button
upgrade.addEventListener('click', ()=>{
    if(Number(count) > upgradeCost){
    count -= upgradeCost;
    localStorage.setItem('count',count);
    upgradeCount++;
    click = upgradeCount;
    upgradeCost = upgradeCost * 2
    update();
    document.getElementById('upgrated').innerHTML = upgradeCost;
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
    update();
})

autoClicker.addEventListener('click',()=>{
    if(Number(count) >= autoclickCost){
        count -= autoclickCost;
        autoclickCost = autoclickCost *2 ;
        document.getElementById('autocliked').innerHTML =  autoclickCost;
        update();
        for(let i = 0 ; i < 50 ; i++){
            count++
            update();
        
        
    }
    localStorage.setItem('count' , count);
    }else{
        
        alert("Vous n'avez pas assez de points .");
    }
})
amelio.addEventListener('click', ()=>{
    if(count >= amelioCost){
        count -= amelioCost ;
        update();
        amelioCost = amelioCost * 2;
        document.getElementById('ameliored').innerHTML = amelioCost;
        for(let i = 0; i<amelioCost;i++){
            count++;
            count++;
            
            update();
        }
    }else{
        alert("Vous n'avez pas assez de points .");
    }
        localStorage.setItem('count' , count);
        update();
})



// function 

function DisplayCount(){
    target.innerHTML = localStorage.getItem('count');
}

function update(){
    
    localStorage.setItem('count', count);
    target.innerHTML = Number(localStorage.getItem('count'));
    
}

