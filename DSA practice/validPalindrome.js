
function validPalindrome(){
    let str="A man, a plan, a canal: dPanama"
    let newStr=""
    for(let i=0;i<str.length;i++){
        if(str[i].toLowerCase()>='a' && str[i].toLowerCase<='z'){
            newStr+=str[i]
        }
    }
    newStr=newStr.toLowerCase()
    let isValid=true;
    let j=newStr.length-1;
    for(let i=0;i<newStr.length;i++){
        if(newStr[i]==newStr[j]){
            j--
        }else{
            isValid=false
        }
    }
    if(isValid==true){
            console.log("valid")

    }else{
            console.log("not valid palindrome")

    }



}
validPalindrome()