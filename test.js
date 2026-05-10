function mergeSorted(){
  let arr1=[1,3,5,7]
  let arr2=[0,2,6,8,9]
  let m=arr1.length
  let n=arr2.length
  let arr3=[m+n]
  let left=0
  let right=0
let index=0
  while(left<n && right<m){
    if(arr1[left]<=arr2[right]){
    arr3[index]=arr1[left]
    left++
    index++
  }
else{
  arr3[index]=arr2[right]
  right++
  index++
  }

}
while(left<n){
  arr3[index++]=arr1[left++]
}
while(right<m){
  arr3[index++]=arr2[right++]
}

for(let i=0;i<m+n;i++){
  if(i<n){
    arr1[i]=arr3[i]
  }else{
    arr2[i-n]=arr3[i]
  }
}
return arr3
}
let res=mergeSorted()
console.log(res)