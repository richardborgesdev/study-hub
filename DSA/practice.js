// practice January 28, 2026
const randomArrayFiller = (arrayLength, maxNumber) => Array.from({length: arrayLength}, ()=> Math.floor(Math.random() * maxNumber));
const arr1 = randomArrayFiller(5, 100);

console.log(`1.slice ${arr1}: ${arr1.slice(1, 2)} | ${arr1}`);
console.log(`2.splice ${arr1}: ${arr1.splice(2, 1, 0)} | ${arr1}`);
console.log(`3.map ${arr1}: ${arr1.map(e => e + 1)} | ${arr1}`);
console.log(`4.filter ${arr1}: ${arr1.filter(e => e % 2 === 1)}`);
console.log(`5.reduce ${arr1}: ${arr1.reduce((acc, e) => acc + e, 0)}`);
console.log(`6.forEach ${arr1}: ${arr1.forEach(e => console.warn(e))}`);
console.log(`7.sort ${arr1}: ${arr1.sort()} | ${arr1}`);
console.log(`8.Math.random with max and min: ${((min = 5, max = 10) => Math.floor(Math.random() * (max - min + 1) + min))()}`);
