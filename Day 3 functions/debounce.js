function debounce(callback,delay){
    let timer;
    return function(){
        if(timer){
            clearTimeout(timer)
        }
        timer=setTimeout(() => {
            callback()
        }, delay);

    }

}

// function test(){
//     console.log("test")
// }
// const btn=document.getElementById("btn")
// let debounced= debounce(test,2000)
// btn.addEventListener('click',debounced)




// function throttle(callback,delay){
//     let last=0;
//     let interval
//     return function(){
//         let now=Date.now()
//         if(interval){
//             clearInterval(interval)
//         }
//             interval=setInterval(() => {
//             if(now-last>=delay){
//             callback()
//             last=now
//                 }
//             }, delay);
        

//     }
// }

function throttle(callback, delay){
    let last = 0;

    return function(){
        let now = Date.now();

        if(now - last >= delay){
            callback();
            last = now;
        }
    }
}



function test(){
    console.log("test")
}
const btn=document.getElementById("btn")
let throt=throttle(test,1000)
btn.addEventListener('click',throt)