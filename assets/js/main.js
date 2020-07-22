(() => {

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