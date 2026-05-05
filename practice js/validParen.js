var isValid = function(s) {
    let obj={}
    for(let i=0;i<s.length;i++){
        if(obj[s[i]]){
            obj[s[i]]+=1
        }else{
            obj[s[i]]=1
        }
    }
    console.log(obj)
    for(let key in obj){
        if(obj[key]!=2){
            return true
        }else{
            return false
        }
    }
};

let s = "()[]{}"
let res=isValid(s)
console.log(res)

