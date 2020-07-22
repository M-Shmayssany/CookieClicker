(() => {

<<<<<<< HEAD
    /*let b = 1;
    let a = 1 * b;
    let c = 5;
    */
   
    // your code here
    let compteur = 0;
    let cookie = document.getElementById('cookie');
    let target = document.getElementById("target");
    
    cookie.addEventListener('click',()=>{
        compteur += 1;
        parseInt(localStorage.setItem('score', compteur));
        target.innerHTML = parseInt(localStorage.getItem('score'));
    })


    let mul2 = document.getElementById('mul2');
    let mul5 = document.getElementById('mul5');
    let autoClick = document.getElementById('autoClick');
    let boost = document.getElementById('boost');


    mul2.addEventListener('click',()=>{
        compteur -= Number(5);
        parseInt(localStorage.setItem('score', compteur));
        target.innerHTML = parseInt(localStorage.getItem('score'));

        cookie.addEventListener('click',()=>{
            compteur += 1;
            parseInt(localStorage.setItem('score', compteur));
            target.innerHTML = parseInt(localStorage.getItem('score'));
        })

    })


    mul5.addEventListener('click',()=>{
        compteur -= Number(10);
        parseInt(localStorage.setItem('score', compteur));
        target.innerHTML = parseInt(localStorage.getItem('score'));

        cookie.addEventListener('click',()=>{
            compteur += 4;
            parseInt(localStorage.setItem('score', compteur));
            target.innerHTML = parseInt(localStorage.getItem('score'));
        })

    })
    

    /*
    mul2.addEventListener('click',()=>{

        count = localStorage.getItem('score');
        count ++;
        parseInt(localStorage.setItem('score', count));
        target.innerHTML = parseInt(localStorage.getItem('score'));
    })
    */

})();
=======
    // your code here
    let run = document.getElementById('img');
    let w3 = document.getElementById('w3');
    let autoClickSpan1 = document.getElementById('span1');
    let autoClickSpan2 = document.getElementById('span2');
    let autoClickSpanA1 = document.getElementById('spanA1');
    let autoClickSpanA2 = document.getElementById('spanA2');
    let autoClickSpanB1 = document.getElementById('spanB1');
    let autoClickSpanB2 = document.getElementById('spanB2');
    let autoClickBtn = document.getElementById('autoclickerBtn');
    let prixDeAmeliorationBtn = document.getElementById('prixDeAmelioration');
    let boostBtn = document.getElementById('boost');
    let state = false;
    var target = document.getElementById("target");
    var value;
    var coociesObj = {'count': 0, 'score': 0};
    var multiplierObj = {'price': 100, 'level': 1};
    var boosterObj = {'price': 150, 'time':15, 'level': 0};
    var autoClickerObj = {'price': 150, 'level': 0, 'delay': 1000};
    var interval;

    function click(){ 
        if(!state){
            value = 1 * multiplierObj.level;
        }else{
            value = (1 * multiplierObj.level) * 2;
        }       
        coociesObj.score += value;
        target.innerText = coociesObj.score;
    }
    function updateDisplay(){
        if(coociesObj.score >= autoClickerObj.price){
            autoClickBtn.disabled = false;
        }else{
            autoClickBtn.disabled = true;
        }
        if(coociesObj.score >= multiplierObj.price){
            prixDeAmeliorationBtn.disabled = false;
        }else{
            prixDeAmeliorationBtn.disabled = true;
        }        
        if(coociesObj.score >= boosterObj.price && state == false){
            boostBtn.disabled = false;
        }else{
            boostBtn.disabled = true;
        }        

        autoClickSpan1.innerHTML = `Buy ${autoClickerObj.price}`;
        autoClickSpan2.innerHTML = `Level ${autoClickerObj.level+1}`;
        autoClickSpanA1.innerHTML = `Buy ${multiplierObj.price}`;
        autoClickSpanA2.innerHTML = `Level ${multiplierObj.level}`;
        autoClickSpanB1.innerHTML = `Buy ${boosterObj.price}`;
        autoClickSpanB2.innerHTML = `Level ${boosterObj.level+1} Time ${boosterObj.time}`;
    }
    function countSeconds(time){
        let i = 0;
        
        
        let timeInt = setInterval(()=>{
                if ( i <= time) {
                boostBtn.disabled = true;
                w3.style.width = `${(100*i)/time}%`;
                w3.innerText = `${parseInt((100*i)/time)}%`;
                i++;
                state = true;
            }else{
                clearInterval(timeInt);
                
                console.log('done');
                w3.style.width = `${0}%`;
                w3.innerText = `${0}%`;
                state = false;
            }
            },1000);
            
    }
    function autoclick(){
        clearInterval(interval);
        interval = setInterval(function(){        
            if(autoClickerObj.level > 0){
                
                click();
                updateDisplay()
                console.log(autoClickerObj.delay);
            }else{
                updateDisplay();
            }       
        }, autoClickerObj.delay);
    }
        run.addEventListener('click',()=>{  
            click();
            updateDisplay()
        });
        
        autoClickBtn.addEventListener('click', ()=>{
            autoClickerObj.level += 1;
            autoClickerObj.delay = autoClickerObj.delay /1.1;
            coociesObj.score = coociesObj.score - autoClickerObj.price;
            autoClickerObj.price += parseInt((autoClickerObj.price * 70) / 100);
            console.log(autoClickerObj.level);
            autoclick();
            updateDisplay();
        });

        prixDeAmeliorationBtn.addEventListener('click', ()=>{
            multiplierObj.level += 1; 
            coociesObj.score = coociesObj.score - multiplierObj.price;
            multiplierObj.price += parseInt((multiplierObj.price * 70) / 100);
            autoclick();
            updateDisplay();
        });
        boostBtn.addEventListener('click',()=>{
            boosterObj.level += 1;
            boosterObj.time += 1;
            coociesObj.score = coociesObj.score - boosterObj.price;
            boosterObj.price += parseInt((boosterObj.price * 30) / 100);
            countSeconds(boosterObj.time);
            updateDisplay();
        });
})();
>>>>>>> mohamed
