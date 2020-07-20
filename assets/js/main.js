(() => {

    // your code here
    // let count = 0;
    

    var run = document.getElementById('img');
    var target = document.getElementById("target");
    var acheterAutoClickBt = document.getElementById("acheterAutoClickBt");
    var reset = document.getElementById("reset");
    var cookieParSeconde = document.getElementById("cookieParSeconde");
    var ameliorationClickBt = document.getElementById("ameliorationClickBt");

    if(!localStorage.getItem('score'))
        localStorage.setItem('score', 0);
    if(!localStorage.getItem('autoClick'))
        localStorage.setItem('autoClick', 0);
    if(!localStorage.getItem('click'))
        localStorage.setItem('click', 1);

    var cookieCount = parseInt(localStorage.getItem('score'));
    var autoClick = parseInt(localStorage.getItem('autoClick'));
    var click = parseInt(localStorage.getItem('click'));

    var autoClickPrix = (autoClick + 1) * 5;
    var clickPrix = (click + 1)*2;

    function resetTheGame(){
        cookieCount = 0;
        autoClick = 0;
        autoClickPrix = 5;
        click = 1;
        update();
    }

//fonction update 
    function update(){
        localStorage.setItem('score', cookieCount);
        localStorage.setItem('autoClick', autoClick);
        localStorage.setItem('click', click);
        target.innerHTML = localStorage.getItem('score');
        ameliorationClickBt.innerHTML = 'click: ' + clickPrix;
        acheterAutoClickBt.innerHTML = 'autoclicker: ' + autoClickPrix;
        cookieParSeconde.innerHTML = "Cookie par seconde: " + autoClick + "/s";
    }

//fonction timer
    function timer(){
        cookieCount = cookieCount + autoClick;
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
            clickPrix += 2
            update();
        }
    }

//fonction acheter autoclick
    function acheterAutoClick(){
        if(cookieCount >= autoClickPrix){
            cookieCount -= autoClickPrix;
            autoClick++;
            autoClickPrix += 5;
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
})();