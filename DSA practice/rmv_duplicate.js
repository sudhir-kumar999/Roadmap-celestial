function rmvDuplicate(){
        let newArr=[]
    let arr=[0,0,1,1,1,2,2,3,3,4,4]
    for(let i=0;i<arr.length;i++){
    let j=i+1
    if(arr[i]!==arr[j]){
        newArr.push(arr[i])
        j++
    }
    }
    console.log(newArr)
}
rmvDuplicate()