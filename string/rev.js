function revWord(){
    let str="my name is sudhir kumar"
    let word=""
    let res=""
    for(let i=str.length-1;i>=0;i--){
        if(str[i]==" "){
            res+=word+" "
            word=" "
        }else{
            word=str[i]+word
        }
    }
    res+=word
    console.log(res)
}
revWord()