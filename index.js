const express = require('express');
const { resolve } = require('path');

const app = express();
const port = 3000;

let numbers = [2, 4, 1, 5, 6];

function AddToArr(numbers, add) {
  numbers.push(add);
  return numbers;
}

app.get('/numbers/add', (req, res) => {
  res.json(AddToArr(numbers, 8));
});

let strings=["hi","world","temp","yennam"];
function AddToString(strings,pushString)
{
   strings.push(pushString);
   return strings;
}

let array=[2,4,5,6];
function sumOfArray(array)
{
  let sum=0;
  for(let i=0;i<array.length;i++)
  {
    sum=sum+array[i];
  }
  return sum;
}

app.get("/numbers/sum",(req,res)=>
{
  res.json({sum:sumOfArray(array)});
})

let maxArray=[2,4,7,1,2,12,8];
function findMaxNumber(array)
{
let maxNumber=0;
for(let i=0;i<array.length;i++)
{
  if(maxNumber<array[i])
  {
    maxNumber=array[i];
  }
}
return maxNumber;
}

app.get("/numbers/max",(req,res)=>
{
  res.json({max:findMaxNumber(maxArray)});
})
app.get("/strings/add",(req,res)=>{
  res.json(AddToString(strings,"raju"));
})

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
