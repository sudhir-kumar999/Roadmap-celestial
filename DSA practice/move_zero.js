function move(){
    let arr=[0,1,0,3,12]
    let count=0;
    let n=arr.length
    let newArr=[n]
    let j=0;
    // let n=arr.length
    for(let i=0;i<arr.length;i++){
        if(arr[i]!==0){
            newArr[j]=arr[i]
            j++
        }else{
        count++
        }
    }
    for(let i=newArr.length;i<=arr.length;i++){
        newArr[i]=0
    }

    console.log(newArr)
    console.log(count)
}
move()