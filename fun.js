x = [3,5,"Dojo", "rocks", "Michael", "Sensei"]

for (index in x){
    console.log(x[index]);
}
x.push(100)
console.log(x)
x.push(["hello", "world", "JavaScript is Fun"])
console.log(x)

var sum = 0;
for (var i = 1; i <= 500; i++){
    sum += i;
}
console.log(sum)

var arr = [1, 5, 90, 25, -3, 0];
var min = arr[0];
for (var i = 1; i < arr.length; i++){
    if (min > arr[i]){
        min = arr[i];
    }
}
console.log(min)
var sum = 0;
for (index in arr){
    sum += arr[index];
}
console.log(sum/arr.length)

var newNinja = {
    name: 'Jessica',
    profession: 'coder',
    favorite_language: 'JavaScript', //like that's even a question!
    dojo: 'Dallas'
}
for (key in newNinja){
    console.log(key, newNinja[key]);
}