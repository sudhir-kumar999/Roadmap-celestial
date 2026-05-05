
function anagram(){
    let str1="listen"
    let str2="silentt"

    let obj1={}
    let obj2={}
    for(let i=0;i<str1.length;i++){
        if(obj1[str1[i]]){
            obj1[str1[i]]+=1
        }else{
            obj1[str1[i]]=1
        }
    }
    for(let i=0;i<str2.length;i++){
        if(!obj1[str2[i]]){
            return false
        }else{
            obj1[str2[i]]--
        }
    }
    console.log(obj1)
    return true
}
const res=anagram()
console.log(res)


