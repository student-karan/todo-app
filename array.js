// Ques1
let arr = [1,2,3,4,5,6,2,3];
let numb = prompt("enter the no you want to delete");
for(let i=0;i<=arr.length;i++){
   if(arr[i]==numb){
      arr.splice(i,1);
   }
}
console.log(arr);

// Ques2
let number = "234532564"
let count = 0;
for(let i=0;i<=number.length;i++){
   count++;
}
console.log(count)

// Ques3
let num = prompt(`Enter the no you want the factoorial of`);
let product=1;
for(let i =1;i<=num;i++){
   product *= i;
}
console.log(product);