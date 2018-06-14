//1.

//GIVEN:
// console.log(hello);
// var hello = 'world';
//hosting:
var hello;
console.log(hello);
hello = 'world';

//2.
//Given:
// var needle = 'haystack';
// test();
// function test(){
// 	var needle = 'magnet';
// 	console.log(needle);
// }

//hoisting:
var needle;
function test(){
	var needle;
  needle = 'magnet';
	console.log(needle);
}
needle = 'haystack';
test();

//3. Given:
// var brendan = 'super cool';
// function print(){
// 	brendan = 'only okay';
// 	console.log(brendan);
// }
// console.log(brendan);

//Hoisting:
var brendan;
function print(){
	brendan = 'only okay';
	console.log(brendan);
}
brendan = 'super cool';
console.log(brendan);

//4.Given:
// var food = 'chicken';
// console.log(food);
// eat();
// function eat(){
// 	food = 'half-chicken';
// 	console.log(food);
// 	var food = 'gone';
// }

//Hoisting
var food;
function eat(){
	food = 'half-chicken';
	console.log(food);
	var food ;
  food = 'gone';
}
food = 'chicken'
console.log(food);
eat();

//5.Given:
// mean();
// console.log(food);
// var mean = function() {
// 	food = "chicken";
// 	console.log(food);
// 	var food = "fish";
// 	console.log(food);
// }
// console.log(food);

//hoisting:
// mean();
// var mean;
// mean = function() {
// 	food = "chicken";
// 	console.log(food);
// 	var food ;
//   food = "fish";
// 	console.log(food);
// }
// mean();
// console.log(food);


//6. given:
console.log(genre);
var genre = "disco";
rewind();
function rewind() {
	genre = "rock";
	console.log(genre);
	var genre = "r&b";
	console.log(genre);
}
console.log(genre);

//hoisting:
// var genre;
// console.log(genre);
// function rewind() {
// 	genre = "rock";
// 	console.log(genre);
// 	var genre ;
//   genre = "r&b";
// 	console.log(genre);
// }
// genre= "disco";
// rewind();
// console.log(genre);

//7. given:
dojo = "san jose";
console.log(dojo);
learn();
function learn() {
	dojo = "seattle";
	console.log(dojo);
	var dojo = "burbank";
	console.log(dojo);
}
console.log(dojo);

//hoisting:
// function learn() {
// 	dojo = "seattle";
// 	console.log(dojo);
// 	var dojo = "burbank";
// 	console.log(dojo);
// }
// dojo = "san jose";
// console.log(dojo);
// learn();
//
// console.log(dojo);

//8.Given:
console.log(makeDojo("Chicago", 65));
console.log(makeDojo("Berkeley", 0));
function makeDojo(name, students){
        const dojo = {};
        dojo.name = name;
        dojo.students = students;
        if(dojo.students > 50){
            dojo.hiring = true;
        }
        else if(dojo.students <= 0){
            dojo = "closed for now";
        }
        return dojo;
}

// function makeDojo(name, students){
//         const dojo = {};
//         dojo.name = name;
//         dojo.students = students;
//         if(dojo.students > 50){
//             dojo.hiring = true;
//         }
//         else if(dojo.students <= 0){
//             dojo = "closed for now";
//         }
//         return dojo;
// }
// console.log(makeDojo("Chicago", 65));
// console.log(makeDojo("Berkeley", 0));
