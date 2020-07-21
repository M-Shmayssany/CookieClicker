(() => {

    // your code here
    // let count = 0;
    

    var run = document.getElementById('img');
    var target = document.getElementById("target");
    var acheterAutoClickBt = document.getElementById("acheterAutoClickBt");
    var reset = document.getElementById("reset");
    var cookieParSeconde = document.getElementById("cookieParSeconde");
    var ameliorationClickBt = document.getElementById("ameliorationClickBt");
    var afficherClick = document.getElementById("nbrClick");
    var acheterAutoClick2Bt = document.getElementById("acheterAutoClick2Bt");

    if(!localStorage.getItem('score'))
        localStorage.setItem('score', 0);
    if(!localStorage.getItem('autoClick'))
        localStorage.setItem('autoClick', 0);
    if(!localStorage.getItem('click'))
        localStorage.setItem('click', 1);
    if(!localStorage.getItem('autoClick2'))
        localStorage.setItem('autoClick2', 0);

    var cookieCount = parseInt(localStorage.getItem('score'));
    var autoClick = parseInt(localStorage.getItem('autoClick'));
    var autoClick2 = parseInt(localStorage.getItem('autoClick2'));
    var click = parseInt(localStorage.getItem('click'));

    var autoClickPrix = 50 * Math.pow(1.1, autoClick);
    var clickPrix = 10 * Math.pow(1.06, click - 1);
    var autoClick2Prix = 200 * Math.pow(1.2, autoClick2);

    function resetTheGame(){
        cookieCount = 0;
        autoClick = 0;
        autoClickPrix = 50;
        click = 1;
        clickPrix = 10;
        update();
    }

//fonction update 
    function update(){
        localStorage.setItem('score', cookieCount);
        localStorage.setItem('autoClick', autoClick);
        localStorage.setItem('click', click);
        localStorage.setItem('autoClick2', autoClick2);
        target.innerHTML = Number (localStorage.getItem('score')).toFixed(2) + "Cc";
        ameliorationClickBt.innerHTML = 'click: ' + clickPrix.toFixed(2) +"Cc"; 
        acheterAutoClickBt.innerHTML = 'autoclicker: ' + autoClickPrix.toFixed(2) +"Cc";
        acheterAutoClick2Bt.innerHTML = 'autoclicker 2: ' + autoClick2Prix.toFixed(2)+ "Cc";
        cookieParSeconde.innerHTML = "Cookie par seconde: " + (autoClick+autoClick2) + "Cc/s";
        afficherClick.innerHTML = "Force de click: " + click + "Cc/par tape";
    }

//fonction timer
    function timer(){
        cookieCount = cookieCount + autoClick + autoClick2;
        update();
    }
    setInterval(timer, 1000);

//fonction clicker sur image
    function add(){
        cookieCount += click;
        update();    
    }

//amelioration de la force du click
    function plusDeClick(){
        if(cookieCount >= clickPrix){
            cookieCount -= clickPrix;
            click++;
            clickPrix *= 1.06;
            update();
        }
    }

//fonction acheter autoclick
    function acheterAutoClick(){
        if(cookieCount >= autoClickPrix){
            cookieCount -= autoClickPrix;
            autoClick++;
            autoClickPrix *= 1.1;
            update();
        }
    }

    function acheterAutoClick2(){
        if(cookieCount >= autoClick2Prix){
            cookieCount -= autoClick2Prix
            autoClick2 +=2;
            autoClick2Prix *= 1.2
            update();
        }
    }

//click
    if(run.addEventListener){
        run.addEventListener('click', add);
    }
    if(acheterAutoClickBt.addEventListener){
        acheterAutoClickBt.addEventListener('click', acheterAutoClick);
    }
    if(reset.addEventListener){
        reset.addEventListener('click', resetTheGame);
    }
    if(ameliorationClickBt.addEventListener){
        ameliorationClickBt.addEventListener('click', plusDeClick);
    }
    if(acheterAutoClick2Bt.addEventListener){
        acheterAutoClick2Bt.addEventListener('click', acheterAutoClick2)    
    }
})();