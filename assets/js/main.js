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
let amelioCount = 100;
let multiplier = 1;

let amelioCost = 50;
let clickCost = 1;
let upgradeCost = 5;
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
        autoClick();
        update();
    }else{
        
        alert("Vous n'avez pas assez de points .");
    }
})
amelio.addEventListener('click', ()=>{
    if(count >= amelioCost){
        count -= amelioCost ;
        update();
        amelioCost = amelioCost * 2;
        amelioCount = parseInt(amelioCount * 1.1);
        document.getElementById('ameliored').innerHTML = amelioCost;
        for(let i = 0; i<25;i++){
            count += amelioCount;
            
            
            update();
        }
    }else{
        alert("Vous n'avez pas assez de points .");
    }
        localStorage.setItem('count' , count);
        update();
})

boost.addEventListener('click', ()=>{
    if(count >= clickCost){
        count -= clickCost;
        click++;
        clickCost = parseInt(clickCost * 2);
        document.getElementById('boosted').innerHTML = clickCost;
        update();
    }else{
        alert("Vous n'avez pas assez de points .");
    }
})

// function 

function DisplayCount(){
    target.innerHTML = localStorage.getItem('count');
}
function autoClick(){
        count -= autoclickCost;
        let time = 30;
        autoclickCost = parseInt(Math.floor(autoclickCost *1.2));
        console.log("AutoClick Launch");       
        let interval = setInterval(()=>{
                                        time--;    
                                        if(time <= 0){clearInterval(interval);}
                                        else{target.innerHTML = count +=1;
                                            document.getElementById('autocliked').innerHTML = "cout"+autoclickCost+"<br>" +time+"/30";
                                            }
                                            },1000);
                     
}


function update(){
    localStorage.setItem('amelioCost',amelioCost);
    localStorage.setItem('clickCost',clickCost);
    localStorage.setItem('count', count);
    localStorage.setItem('upgradeCost',upgradeCost);
    target.innerHTML = Number(localStorage.getItem('count'));
    
}



