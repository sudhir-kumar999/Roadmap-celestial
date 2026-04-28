
function memoize(){
    let cache={}
    return function (n){
        if(cache[n]){
            console.log("from cache")
            return cache[n]
        }else{
            console.log("calculate result")
            let result=n+n;
            cache[n]=result
            // console.log(cache)
            return result
        }
    }
}
let res=memoize()
console.log(res(5))
console.log(res(5))