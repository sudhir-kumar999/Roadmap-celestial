

function narrow(details: string|number){
    if(typeof details==='string'){
        console.log(details.toUpperCase())
    }
    else if(typeof details==='number'){
        console.log(details*10)
    }
}

// let details="sudhir"
let details=10
// narrow(details)

// Exhaustive check

function beverages(size:"small" | "medium" | "large" |number){
    if(size==='small'){
        console.log("small cup")
    }
    if(size==='medium' || size==="large"){
        console.log("medium with large")
    }
    console.log(size)
}

// beverages(33)


type order={
    type:string,
    sugar:string
}

function isOrder(obj:any):obj is order{
    return (
        typeof obj==='object' && 
        obj!=='null' &&
        typeof obj.type==="string" &&
        typeof obj.sugar==="number"
    )
}

function serve(item:order | string){
    if(isOrder(item)){
        return `serving ${item.type}`
    }
    return `custom {$itme}`
}