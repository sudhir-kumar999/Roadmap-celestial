

let theme=document.getElementById("theme")
let btn=document.getElementById("btn")

// btn.addEventListener('click',()=>{
//     if(theme.classList.contains("light")){
//         theme.classList.remove("light")
//         theme.classList.add("dark")
//     } else{
//         theme.classList.remove("dark")
//         theme.classList.add("light")
//     }
// })

btn.addEventListener("click",()=>{
    // console.log(theme.getAttribute("class"))

    theme.classList.toggle("dark")
})