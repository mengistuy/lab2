
function asyncThing (x) {
    return new Promise((resolve, reject) => {
      setTimeout(() => resolve(x), 0)
    })
  }
const even=async function()
{
    return Promise.all(this.filter(async (x) => {
        const v = await asyncThing(x)
        return v % 2 === 0
      }));
}
const odd=async function()
{
    return Promise.all(this.filter(async x=>await x%2!=0));
}
//Without Async
// async function even()
// {
//     return this.filter(x=>x%2==0);
// }
// const odd=function()
// {
//     return this.filter(x=>x%2);
// }

Array.prototype.even=even
Array.prototype.odd=odd

console.log('Start');
var rtArrayEven=[1,2,3,4,5,6,7,8].even();
var rtArrayOdd=[1,2,3,4,5,6,7,8].odd();
console.log(rtArrayEven);//I added this just to show the output
console.log(rtArrayOdd);//I added this just to show the output
console.log('End');
