/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
//Ex 1.1
var carName = "Skyline";
var x = 3.0;
var bool = true;
var arr =[1,2,3];
var car = {type:"Nissan", model:"R34", color:"blue"};
console.log(car, arr, bool, x, carName);

//Ex 1.2
var arrayBool = [false, true];
var arrayNum = [3, 4, 5];
var arrayString = ["Car","List","Sky"];
var lambo = {type:"Lamborghini", model:"VT 6.0", color:"blue"};
var bmw = {type:"BMW", model:"520d", color:"blue"};
var arrayObj = [lambo, bmw];
var arrArrays = [arrayBool, arrayNum, arrayString, arrayObj];
console.log(typeof arrArrays, arrayObj, arrayString, arrayNum, arrayBool);

//Ex 1.3
var stud1 = {studentId: "1", studentName: "John", toString: function (){
        
        return this.studentId + " " + this.studentName;
        
}};

var stud2 = {studentId: "2", studentName: "Arne", toString: function (){
        
        return this.studentId + " " + this.studentName;
        
}};

var stud3 = {studentId: "3", studentName: "Bob", toString: function (){
        
        return this.studentId + " " + this.studentName;
        
}};

var arrayStud = [stud1, stud2, stud3];

    for(var i = 0; i < arrayStud.length; i++){
              
        console.log(arrayStud[i].toString());

    }

//Ex1.4
var stud1 = {name: "Bob", age: 20, isFemale: false};
var stud2 = {name: "Arne", age: 40, isFemale: false};
var stud3 = {name: "John", age: 60, isFemale: false};
var stud4 = {name: "Julie", age: 80, isFemale: true};
var stud5 = {name: "Louise", age: 100, isFemale: true};

var list = {arr: [stud1, stud2,stud3, stud4, stud5], getYoung: function () {
        var young = this.arr[0].age;
        var name = this.arr[0].name;
        for (var i = 0; i < this.arr.length; i++) {
            if (this.arr[i].age < young) {
                young = this.arr[i].age;
                name = this.arr[i].name;
            }
        }
    console.log("Youngest person is: " + name + ", " + young + " years old.");
}, getFemale: function(){
    var femaleBool = this.arr[0].isFemale;
    for(var i = 0; i < this.arr.length;i++){
           if(this.arr[i].isFemale){
               femaleBool = this.arr[i].isFemale;
               console.log(this.arr[i].name + " is female: " + femaleBool);
           }
        }
    }
};

list.getYoung();
list.getFemale();

//Ex 1.5
var arrStud = [stud1, stud2, stud3, stud4, stud5];
arrStud.sort();


function sortArr(arr, student){
    for(var i = 0; i < arr.length;i++){
        if(arr[i] === student){
            arr.splice(i, 1);
        }
    }
   
    for(var i = 0; i < arr.length;i++){
        console.log(arr[i]);
    }
};
sortArr(arrStud, stud1);

//Ex 1.6
var stud1 = {name: "Bob", age: 20, isFemale: false};
var stud2 = {name: "Hans", age: 31, isFemale: false};
var stud3 = {name: "John", age: 40, isFemale: false};
var stud4 = {name: "Arne", age: 60, isFemale: false};
var stud5 = {name: "Julie", age: 80, isFemale: true};

var arrStud = [stud1, stud2, stud3, stud4, stud5];

arrStud.forEach(function(student){
    if (student.age > 30){
        console.log(student.name + "'s age is above 30.");
    }
});

//Ex1.7
function max(){
    
    arg = 0;
   
    for(var i = 0; i < arguments.length;i++){
        if (arguments[i] > arg){
            arg = arguments[i];
        }
    }
    console.log(arg + " is the highest number!");
}

max(5, 200, 1525, 9000, 523, 6969);

//Ex1.8
var d = new Date();
var weekday = new Array(7);
weekday[0]=  "Sunday";
weekday[1] = "Monday";
weekday[2] = "Tuesday";
weekday[3] = "Wednesday";
weekday[4] = "Thursday";
weekday[5] = "Weekend!!";
weekday[6] = "Saturday";

console.log("It is.. " +weekday[d.getDay()]);

    
