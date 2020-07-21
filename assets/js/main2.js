(() => {

    // your code here
    let count = 0;
    let run = document.getElementById('img');
    let autoClickSpan1 = document.getElementById('span1');
    let autoClickSpan2 = document.getElementById('span2');
    let autoClickBtn = document.getElementById('autoclickerBtn');
    let storage = 0;
    var target = document.getElementById("target");
    var autoClick = 0;
    
    
    class Cookie{
        constructor(){
            this.count = 0,
            this.score = 0                                    
        }
        set SetScore(mult){
            
            this.score = this.count * mult;
        }
        set SetCount(val){
            this.score = this.score - val;
        }        
        get totalScore(){
            return this.score;
        }
    }

    class Multiplier{
        constructor(){
            this.price = 100,
            this.level = 1
        }
        set Update(a){
            this.price += ((this.price * 20) / 100);
            this.level += a;
        }

    }

    class Booster{
        constructor(){
            this.price = 150,
            this.time = 15,
            this.level = 1,
            this.qty = 0
        }
        set Buy(a){
            this.qty += a;
        }
        set Update(a){
            this.price += ((this.price * 20) / 100);
            this.level += a;
            this.time += 5
        }
        
    }
    class AutoClicker{
        constructor(){
            this.price = 25,
            this.level = 0
        }
        set Buy(a){
            this.level += a;
            this.price += parseInt((this.price * 20)/100);
        }
        get Price(){
            return this.price;
        }
        get Level(){
            return this.level;
        }
    }
    var booster = new Booster();
    var multiplier = new Multiplier();
    var playerOne = new Cookie();
    var autoClicker = new AutoClicker();
    function click(){
        
        playerOne.count += 1;
        playerOne.SetScore = multiplier.level;
        target.innerText = playerOne.totalScore;
        if(autoClicker.Level > 0){
            console.log(autoClicker.Level)
        setupTimeout(1000 / autoClicker.Level);
        
    }

    }
    function setupTimeout(delay){
        return setTimeout(() => (click()), delay);
    }

    function updateDisplay(){
        if(playerOne.totalScore >= autoClicker.Price){
            autoClickBtn.disabled = false;
        }else{
            autoClickBtn.disabled = true;
        }
        autoClickSpan1.innerHTML = `Buy ${autoClicker.Price}`;
        autoClickSpan2.innerHTML = `Level ${autoClicker.Level}`;
    }
    
        if(autoClicker.Level > 0){
        setupTimeout(1000 / autoClicker.Level);
        
        }

    updateDisplay()
    run.addEventListener('click',()=>{  
        click();
        updateDisplay()
    })
    autoClickBtn.addEventListener('click', ()=>{
        autoClicker.Buy = 1;
        playerOne.SetCount = playerOne.totalScore;
        console.log(autoClicker.Level);
        if(autoClick > 0){
            console.log(autoClicker.Level)
            setupTimeout(1000 / autoClicker.Level);
        }

        updateDisplay()
    });
    

})();
