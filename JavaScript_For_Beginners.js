/*This is a Javascript Beginner Guide with all the necessary content trimming off the advanced features and functionalities!
This is precisely for beginners who want to get started with Javascript and go all the way in Web Dev!
All the best! Hope this helps!
Just get brief intro on HTML tags and start with this!
This is long but it's fun to learn the very basics of Javascript!
This content is totally based on CodeCamp Crash course on Javascript!*/


console.log("Hello World!"); //Comments - these are called inline comments which are ignored by editor


// There are 7 datatypes that are provided by javascript and those are as follows
null - //nothing
undefined - //that hasn't been defined or a variable that is not set to be anything
number - //a number generally
string - //which stores a text or a name 
object - //which can store a lot of different key value pairs
boolean - //true or false 
symbol - //immutable primitive value i.e unique


	//Declaring a variable - A variable is something which allows a computer to store and manipulate data. 
	//It is like a box which can hold some info or some stuff
	//One way to declare a variable is by using a 'var' keyword as below

	var myName = "Alex";

	//later we can change it to anything I mean any datatype! Let's see about that below here

	myName = 8;

	// also there is a way using 'let' keyword shown  below

	let ourName = "John";

	// also there is a way using 'const' keyword shown below

	const pi = 3.14;

	// the main difference among these three is that 
	// var keyword makes the variable to be used throughtout the whole program
	//let keyword isn't that kind! we can use the variable only within the scope where we declare that
	//const keyword is something which doesn't allow the variable to change it's value in the entire program. As the keyword suggests const, the value has to be constant in the entire program
	// ; - semicolon suggests the end of the statement. it's optional tho

	var a =7;
	console.log(a);
	//this shows 7 on the console(output)
	//the above 2 statements are about declaring a variable and storing a value in it and then displaying it on the console
	//console.log() - allows you to see things on console

	var b;
	console.log(b);//this displays 'null' on the console
	//since no value is assigned to the variable b

	//JavaScript is case sensitive
	//Generally use CamelCase i.e every first letter of a word is capital just like MyNameIs. That's it!

	var a;// this can be called as declaration
	var a = 3;// this can be called as assignment


	//Additon
	var a =10;
	console.log(a+10);
	//the above displays 20
	//Similarly subn,multn,divn and inc and dec
	//Increment can be done as follows
	a++;//a=a+1;
	//similarly decrement
	a--;//a=a-1;

	//we can also create decimal numbers in js
	var decimalNumber = 0.137;

	//arithmetic operations of decimals is same as that of normal numbers

	//Remainder operator
	var a = 8;
	var b = 3;
	var remainder = a%b;//we get 2 i.e remainder

	//Instead of doing this normal a=a+7
	//we can also write like as below
	a += 7;


	//When assigning strings if we get to put double quotes inside a string, 
	//we need to use an escape character before each of that double quotes
	//Example:
	 var myString = "Im a "double quoted" string inside a double quoted string";

	 //if you observer the string carefully, the myString variable won't be considering the text 
	 //after the second double quote, you can see the colour change. So, to solve this we use an escape character 
	 //i.e backslash before every special character.
	 //we'll see it below

	 var myString = "Im a \"double quoted\" string inside a double quoted string";
	 //You can observe that the entire text colour is uniform and this means 
	 //that the compiler accepts the entire text as we provided

	 //Instead of this use single quotes at the beginning and at the end of the string

	 var myString = 'Im a "double quoted" string inside a double quoted string';

	 //Escaping the special characters using a backslash and also creating special functions using backslash is as follows

	 // Code ----- Output
	 // \'   ----- single quote
	 // \"   ----- double quote
	 // \\   ----- backslash
	 // \n   ----- new line
	 // \r   ----- carriage return
	 // \t   ----- tab
	 // \b   ----- backspace
	 // \f   ----- form feed


	//concatenation of strings can be done using + operator
	var s1 = "Alex is a ";
	var s2 = "good boy!";
	var s3 = s1 + s2;
	console.log(s3);

	console.log(s1.length);//gives you the length of a string
	// .length is used for a string's length here in js
	var num=0;
	num = s1.length;
	//Here num gives you the length of the string

	// if we want a specific letter of a string
	// we can use bracket notation and get the desired character
	//example below

	var s4  = s1[0];
	//s4 now has character r 
	//0 based indexing is which is followed by computers unlike humans 

	//Strings are immutable - means that they can't be altered once created 
	//i.e we can't change individual characters seperately but the whole string has to be.
	
	//Arrays allow us to store several pieces of data in one place
	//There is no specification of a single data type array
	//Let's look at the example below

	var myArray = ["Him", 23 , 8.09 , "Yep"];

	//Nested Arrays : When one of the elements  of an array is an array, 
	//then it is called Nested Array or multi-dimensional Array. Example Below

	var arr = ["below",23,["again",43],[82,90]];

	//unlike strings we can modify array elements by accessing and assigning them independently
	//for nested arrays we use two brackets to use elements of the arrays of the array 
	//i.e they are multidimensional arrays right!

	//we can append elements on to the array using 'push' function
	//example below  
	 var arr = [1,5,9,"dojo"];
	 arr.push(["tamba","done",729]);
	 //the elements get added at the end of the array


	 //Removing the last element from the array is by using pop function and this function returns the removed element

	 var removed_value = arr.pop();
	 // now this variable removed_value has the value of 729 as considered from above 

	 //removing 1st element can be done by a function shift()
	 //example below

	 var shifted_value = arr.shift();
	 //now this shifted_value  has the value of 1 as considered from above

	 //To add an element at the beginning, we use a function called as unshift()
	 //this is similar to push which adds elements at last and on the opposite note this unshift function adds at the front

	 arr.unshift("POPOPOPOPO");
	 //now array arr becomes this way arr = ["POPOPOPOPO",5,9,"dojo","tamba","done"];



	//FUNCTIONS!!!
	//the main theme of functions is to write reusable code
	//Let's look at the example
	
	function myOwnFunc(){           //here we declared and defined 
		console.log("Hello!");		//the function to print Hello!
	}								//whenever it is called

	myOwnFunc(); //Here we called the function, so when we call this function 
	//Hello is printed on the console so instead of writing ]Hello every single time, 
	//we can use this function anytime and anywhere

	//Passing values to Functions with Arguments
	//parameters are variables that act as placeholders for the values 
	//that are to be inputs to a func when it is called. Lets have a look at the below example

	function addFunc(a,b)
	{
		console.log(a+b);
		console.log(a-b);
	}

	addFunc(10,5);
	//after this function is called the results for 10+5 and 10-5 will be printed on  console 

	//Scope of the variables refers to the visibility of the variables
	//When a vaiable is declared inside a function, it is accessed only in the scope of that function but not outside it
	//When a variable is declared outside a function, it is said to be a Global variable, 
	//any function can access this variable as well as at anywhere else in the code or program

	//When we declare a variable without a var keyword like

	myVar = 10;

	//then it becomes a global variable even if you declare inside a function, Okay Let's see

	function myFunc()
	{
		myVar = 178;
		//some other code
	}

	//Now that myVar  variable can be used even outside that function since it is not declared with a var keyword 
	//and so it is a global variable

	//Local variables are those which are declared inside a function or as parameters of a function 
	//i.e their scope is limited to that func only

	//It is possible to have both local and global variables the same name, when we do this , 
	//the local variable takes the precedence over the global variable
	
	//Lets see an example

	var outerWear = "T-shirt";

	function myOutfit()
	{
		var outerWear = "sweater";
		return outerWear;
	}

	console.log(myOutfit()); // This gives output as sweater 
	comsole.log(outerWear);  // This gives output as T-shirt

	//To convert an array into a string we use the following function
	JSON.stringify(testArr);

	//IF Conditionals

	if(isittrue){
		console.log("YES! TRUE");
	}
	console.log("NO! FALSE");

	//Equality operator is one which returns boolean value
	
	if(a==3)
	{
		console.log("a is eq to 3");
	}
	else
	{
		console.log("a is not eq to 3");
	}

	//double equal to is for comparison and single equal to is for assignment operation

	//we also have triple equal to operator whiich is otherwise called as strict equality operator

	//the basic difference between double and triple is that the double equality operator attempts to convert 
	//both values that are being compared whereas the triple equality operator won't
	//Let's see example

	if(3=='3')
		//this is compared as true by == 
	//where as
	if(3==='3')
		//this is given to be false by === 
	//No type conversion in this case

	//inequality operator
	if(a!=9) //this also does the type conversion
	
	//Similarly there is a strict inequality operator
	if(a!==8) // this wont do type conversion

	//similarly we also have greater than and lesser than
	//and also greater than or equal to and lesser than or equal to

	//Now instead of using nested ifs i.e if inside if which is to staisfy two conditions we can use as shown

	if(a>=23 && a<=100)// this is used and called as logical and operator

		if(a>20 || a<100)//this is logical or operator


	//ELSE Statements

	if(condition)
	{
		//stuff
	}		
	else if(condition)
	{
		//stuff
	}
	else
	{
		//stuff
	}


	//So instead of writing a lot of else if statements
	//we can write a switch statement and can make different cases just like the above
	//we use switch and case statements this way

	switch(value)
	{
		case 1:
		//do this 
		break;
		case 2:
		//do this
		break;
		case 3:
		//do this
		break;
		default:
		//do this
		break;
	}
	 //here default is like an else statement when none of the above cases are satisfied 
	 //for the value condition this default statement is executed

	//in the case of same output for multiple inputs we can use this case statements like this(below)

	switch(value)
	{
		case 1:
		case 2:
		case 3:
		//do this
		break;
		case 4:
		case 5:
		case 6:
		//do this 
		break;
	}
     

    //While returning boolean values
    //let's take an example

    function isLess(a,b)
    {
    	if(a<b)
    	{
    		return true;
    	}
    	else
    	{
    		return false;
    	}
    }

    //instead of writing a lot of stuff this way, we can modify this in the below way

    function isLess(a,b)
    {
    	return a<b;
    }

    //OBJECTS

    //similar to arrays except that instead of using indexes to access data, you use properties
    //Example : 
    var ourDog = {
    	"name" : "Camper",
    	"legs" : 4,
    	"tails" : 1,
    	"friends" : ["everything!"]
    };

    //In the above example, those which are left of the colon 
    //are called as properties and those are on the right are the values of the properties. 
    //The properties can have anything as their values i.e they can be a string or a number or an array

    //Now we will be discussing the access of object properties
    //there are 2 types mainly 
    //one is dot notation and the other is bracket notation
    //DOT NOTATION

    var nameOfOurDog = ourDog.name;
    var numberOfLegs = ourDog.legs;

    //Now the variables above declared possess the value of "Camper" and 4 respectively

    //BRACKET NOTATION

    //this notation can be used when there is a space between the words in the properties of objects
    //Let's see below example

    var testObj = {
    	"an entree" : "hamburger",
    	"my side"	: "veg",
    	"the drink" : "water"
    };

    var entreeValue = testObj["an entree"];
    var drinkValue = testObj["the drink"];

    //Remember the properties in the object are seperated by commas

    //Accessing object properties with variables
    //Example : 
    var testObj = {
    	12 : "Naman",
    	16 : "Manav",
    	20 : "Raman"
    };

    var playerNumber = 16;
    var player = testObj[playerNumber];
    //now this player variable holds "Manav"

    //Update object property

    ourDog.name = "Happy Camper";
    // In this way, we can change value of the property of the object ourDog


    //Adding new Property to an object

    outDog.bark = "Bow-wow";
    //Declaring this outside the object adds a new property with it's value

    //Deleting a property from an object 

    delete ourDog.bark;

    //Objects can be thought as a key value storage like a dictionary
    //Instd of switch cases , we can even use this.

    //We can even check an object for a specified property by using the below function

    ourDog.hasOwnProperty("name")
    //the above returns 1 if the specified property( in this case it is name) is present or not


    //We can have an array of objects like

    var myMusic = [
    {
    	"artist" : "taylor",
    	"album" : "reputation",
    	"some_other_key" : "some other value"
    },
    {
    	"artist" : "lakeside",
    	"album" : "elm"
    }
    ];

    //accessing these can be done by

    myMusic[0].artist; 
    //or 
    myMusic[1].album;

    //Nested Objects and their accessing

    var myStorage = {
    	"car" : {
    		"inside" : {
    			"glove box" : "maps",
    			"extra stuff" : "noth"
    		},
    		"outside" : {
    			"trunk" : "jack"
    		}
    		}
    	};

    	//Accessing these object properties 

    	var gloveBoxContents = myStorage.car.inside["glove box"];

    	//Now gloveBoxContents has "maps" in it


 	//While Loop
 	//loops allow you to run the same code multiple times
 	var i=0;
 	while(i<10)
 	{
 		//stuff
 		i++;
 	}

 	//For Loop
 	for(var i=0;i<10;i++)
 	{
 		console.log(i);
 	}

 	//Do while Loop

 	do{
 		//stuff
 	}while(condition)

 	//Here in do while loop, it doesnt check the condition for the first time.. 
 	//it checks condition from the second iteration only


 	//Generating a random decimal

 	Math.random(); //this gives a rsandom decimal

 	//to convert a string to an integer 

 	String s = "89";
 	parseInt(s);//This gives you a integer form of 89
 	//i.e this function converts 89 string to a 89 number


 	//Conditional Ternary Operator
 	//Syntax
 	//Condition ? statement if true : statement if false
 	//this can be used instead of if else statements
 	//Example:
 	return a===b ? true : false;
 	//the above statement returns true or false based on their values


 	//Coming back to datatypes and their differences
 	//'let' doesn't let you declare the variable twice
 	//i.e let catName = "pussy"   
 	// let catName = "Tom"       
 	//the above can't be done when we use let converse of var  
 	//But 
 	// let catName = "io"
 	//let catName = "pO"
 	//the abocve can be done tho

 	// "use Strict" can be used to identify mistakes 

 	//We know that const pi = 3.14, this pi value can't be changed 
 	//since it is declared along with const keyword whereas in arrays if we declare an array like const arr = [2,5,7]          we can change the values of each element of array by accessing independently


 	//To prevent object mutation, we can use 
 	Object.freeze(property_name);
 	//this makes the property to be fixed and can't be changed
 	//Declaring with keyword const alone won't save your variable property or it's value - p.s

 	//Anonymous function - which doesn't have a name to be specific
 	//Let me explain

 	var magic = function(){
 		return new Date();
 	};

 	//Even there is no name before the function to denote the datatype
 	//Whenever you have an anonymous function, you can convert it into arrow function
 	//as shown below!!!

 	var magic = ()=>{
 		return new Date();
 	};

 	//we can shorten this even more

 	var magic = () => new Date();

 	//Arrow function with parameters

 	var myConcat = (arr1,arr2) => arr1.concat(arr2);
 	console.log(myConcat([1,2],[3,4,5]));
 	//This prints you a combined array of 1,2,3,4,5
 	//Whenever one function takes another function as an argument, then arrow function can be used

 	//SPREAD OPERATOR TO EVALUATE ARRAYS IN PLACE

 	const arr1=['Jan','Feb','March'];
 	let arr2;
 	(function(){
 		arr2=arr1;
 		arr1[0]='potato';
 	})();
 	console.log(arr2);

 	//We get the output as 'potato','Feb','March'
 	//What if we want a fixed copy of initial values
 	//We use spread operator which is generally denoted as '...'(3 dots only)

 	const arr1=['Jan','Feb','March'];
 	let arr2;
 	(function(){
 		arr2=[...arr1];
 		arr1[0]='potato';
 	})();
 	console.log(arr2);

 	//Now the output is 'Jan','Feb','March'
 	//Contrast is that we are assigning the contents of arr1 to arr2 variable in this case
 	//whereas in the former case we can say that we have just assigned the address 
 	//(Consider this as an Analogy!! A dry one though:,)


 	//Using Destructuring Assignment to assign variables from objects

 	var obj_list = {x : 3.6, y : 4.5, z : 8.9};

 	var a =obj_list.x;
 	var b =obj_list.y;
 	var c =obj_list.z;
 	//The above one is old way of assigning

 	const {x:a,y:b,z:c} = ob_list;
 	//This is a lot quicker and new way of assigning being called as Destructuring Assignment 

 	//Destructuring with arrays is more helpful in getting assigned the required array elements to the variables

 	const[a,b, ,c, ,d]=[1,2,3,4,5,6];
 	console.log(a,b,c,d);
 	//This gives the output as 1,2,4,6
 	//We just need to press a tab and then a comma for the unrequires values

 	//Another example!!

 	const source = [1,2,3,4,5,6,7,8,9,10];
 	function removeFirstTwo(list)
 	{
 		const[ , ,...arr] = list; //this means that the first two commas indicate 
 		//that considering the first two values in the array as nothing and 
 		//then returning the next 8 elements to arr variable
 		return arr;
 	}

 	const arr = removeFirstTwo(source);
 	console.log(arr);//this gives you the array without the first two elements 
 	//which is due to the rest operator and destructuring assignment above 
 	console.log(source);//This gives the whole array


 	//Creating Strings using Template literals
	//template literal are a special type of strings that make creating complex strings easier
	//these are inside the back-ticks - notation goes this way `this statement is between two back-ticks`
	//Many uses : we can put the variables inside the string
	//no need to escape the " this symbols"
	var name = "Dong";
	var age = 56;
	const template_variable = `Hello, I'm ${name}, I'm ${age} years old!`;
	console.log(template_variable);
	//This prints the whole string along with the name and age with their corresponding values in it

	//Importing and exporting from and to the files
	
	//File1.js         												File2.js

	export const new_var = str => str.toUpperCase()                import {new_var} from "./File1"
																   const cap = new_var("hello");
	/*The above function is an arrow function and it is used*/		console.log(cap);
	/*by the file2.js to convert the "hello"  to "HELLO"*/			/*this is importing the new_var from file1 and this is 																	  how it works*/

	
	//export the functions and variables so that they could be imported by other function
	//this is just reusability of the code
	//We can use a * to import everything from a file just like in sql if we want to select everything we use a star (*)

	 export default const new_var = str => str.toUpperCase() 
	 //if it is a default export no need to put a curly braces in the side of import file



//If you think this can be improved, (ofc yes this can be improved a lot ,but me being a rookie, I could do as much as possible)
//So, Do open a PR with any updates and submit any issues
//I'll try to continue to improve this.