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

function test(){
    console.log("test")
}
const btn=document.getElementById("btn")
let debounced=debounce(test,2000)
btn.addEventListener('click',debounced)