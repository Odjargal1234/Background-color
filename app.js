// massive/array
var too = 5;
// [] -> massive
var toonuud = [5,6,3,100];
console.log(toonuud);
console.log(toonuud[0]);
var test = ["text",20,true,null];
console.log(test);
console.log(test[test.length-1]);
var friuts=["banana","watermelon","apple","grape","orange"];
console.log(friuts[0]);
console.log(friuts[friuts.length - 1 ]);
var numbers=[5,8,3,1,9];
console.log(numbers);
// for(var i=0;i<=numbers.length-1;i++){
//     console.log(numbers[i]);
// }
var toonyyd = [2,3,4,5,6];
console.log(toonyyd[0]*toonyyd[toonyyd.length-1]);
var num=[2,3,4,5,6,7,8,9,10,1];
var urjver =1;
var niilber=0;
console.log(num);
 for(var i=0;i<=num.length-1;i++){
     niilber = niilber + num[i];
     urjver = urjver * num[i];
}
 console.log("niilber:"+num);
 console.log("urjver:"+urjver)
for(var i=0; i<=num.length-1;i++){
    if(num [i]%2==0){
        console.log
    }
}
var colors = ["red","blue","green","brown","purple"];
var body = document.getElementsByTagName('body')[0];
var btn = document.getElementsByTagName('button')[0];
var i=-1;
function changeColor(){
    i++;
    if(i>colors.length-1){
        i=0
    }
    body.style.backgroundColor = colors[i];
}
function backcolor(){
    i--;
    body.style.backgroundColor = colors[i];
}
function auto (){
    i++;
    if(i>colors.length-1){
        i=0
    }
    body.style.backgroundColor = colors[i];
    setTimeout(auto,1000);
}
function stop(){
    clearTimeout(up);
}