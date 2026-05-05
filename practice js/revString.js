
function reverse(){
    let str= "my name is sudhir kumar"
    let words=""
    let word=""
    for(let i=str.length-1;i>=0;i--){
        if(str[i]==" "){
            words+=word+" "
            word=""
        }else{
            word=str[i]+word
        }
    }
    if(word!==""){
        words+=word
    }
    console.log(words)
}
reverse()

