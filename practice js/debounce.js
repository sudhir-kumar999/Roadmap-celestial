function debounce(fn){
    let timer
    return function(...args){
        if(timer){
            clearTimeout(timer)
        }
        timer=setTimeout(() => {
            fn.apply(this,args)
        }, 5000);
    }
}
function hello(){
    console.log("hello")
}
let debounced=debounce(hello)
debounced()