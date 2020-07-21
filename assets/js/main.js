

    // your code here
    let count = 0;
    let run = document.getElementById('img');
    let storage = 0;
    var target = document.getElementById("target");
    
    run.addEventListener('click',()=>{
        //let count = localStorage.getItem('score');    
        count++;
        parseInt(localStorage.setItem('score', count));
        target.innerHTML = localStorage.getItem('score');
    })
