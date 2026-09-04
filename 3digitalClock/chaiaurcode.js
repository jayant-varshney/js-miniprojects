const clock = document.getElementById('clock')
// or use      
//const clock = document.queryselector('#clock') //both the lines do the same thing 


setInterval(function(){
    let date = new Date();
    // console.log(date.toLocaleTimeString());
    clock.innerHTML = date.toLocaleTimeString();
}, 1000);