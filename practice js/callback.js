function one(callback){
    console.log("one called")
    callback()
}
function two(callback){
    console.log("two called")
    callback()
}
function three(callback){
    console.log("three called")
    callback()
}
function four(callback){
    console.log("four called")
    callback()
}
function five(callback){
    console.log("five called")
    callback()
}
function six(callback){
    console.log("six called")
    callback()
}

one(()=>{
    two(()=>{
        three(()=>{
            four(()=>{
                five(()=>{
                    six(()=>{
                        console.log("done")
                    })
                })
            })
        })
    })
})