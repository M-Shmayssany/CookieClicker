(() => {

    // your code here
    let run = document.getElementById('img');
    let autoClickSpan1 = document.getElementById('span1');
    let autoClickSpan2 = document.getElementById('span2');
    let autoClickSpanA1 = document.getElementById('spanA1');
    let autoClickSpanA2 = document.getElementById('spanA2');
    let autoClickBtn = document.getElementById('autoclickerBtn');
    let prixDeAmeliorationBtn = document.getElementById('prixDeAmelioration');
    let storage = 0;
    var target = document.getElementById("target");
    var autoClick = 0;
    
    var coociesObj = {'count': 0, 'score': 0};
    var multiplierObj = {'price': 100, 'level': 1};
    var boosterObj = {'price': 150, 'time':15, 'level': 0};
    var autoClickerObj = {'price': 150, 'level': 0, 'delay': 1000};
    var interval;

    function click(){        
        coociesObj.score += 1 * multiplierObj.level;
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

        
        autoClickSpan1.innerHTML = `Buy ${autoClickerObj.price}`;
        autoClickSpan2.innerHTML = `Level ${autoClickerObj.level}`;
        autoClickSpanA1.innerHTML = `Buy ${multiplierObj.price}`;
        autoClickSpanA2.innerHTML = `Level ${multiplierObj.level}`;

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
})();
