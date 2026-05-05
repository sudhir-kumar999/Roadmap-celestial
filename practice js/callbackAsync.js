function one(name,callback){
    console.log(name)
    callback()
}
function two(name,callback){
    console.log(name)
    callback()
}
function three(name,callback){
    console.log(name)
    callback()
}
function four(name,callback){
    console.log(name)
    callback()
}

one("sudhir",()=>{
    two("sudhir",()=>{
        three("kumar",()=>{
            four("singh",()=>{
                console.log("first")
            })
        })
    })
})
