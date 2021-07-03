//CHAPTER 35 - 38 FUNCTION

// 1. Write a function that displays current date & time in your browser. 
// function dateTime(){
//    var now = new Date();
//     document.write(now);
// }
// dateTime();

// 2. Write a function that takes first & last name and then it greets the user
//  using his full name.   
// function greet(){
//     var firstName = prompt("Enter your First Name");
//     var lastName = prompt("Enter your Last Name");
//     var fullName = firstName+" "+lastName;
//     alert("Hi "+fullName+" How are you?");
// }
// greet();

// 3. Write a function that adds two numbers (input by user) and returns the sum
//  of two numbers. 
// function sum(){
//     var num1 = +prompt("Enter 1st Number");
//     var num2 = +prompt("Enter 2nd Number");
//     var add = num1 + num2;
//     return add;
// }
// var value = sum();
// alert(value);

// 4. Calculator:  Write a function that takes three arguments num1, num2 & operator
//  & compute the desired operation. Return and show the desired result in your
//   browser.   
//     function calculator(no1,no2,opera){
//     if(operator === "+"){
//     var add = num1+num2;
//     return add;
// }
// else if(operator === "-"){
//     var sub = num1-num2;
//     return sub;
// }
// else if(operator === "*"){
//     var mul = num1*num2;
//     return mul;
// }
// else if(operator === "/"){
//     var div = num1/num2;
//     return div;
// }
// }
//     var num1 = +prompt("Enter 1st Number");
//     var num2 = +prompt("Enter 2nd Number");
//     var operator = prompt("Enter Operator");
//     var result = calculator(num1,num2,operator);
// alert(result);

//5. Write a function that squares its argument. 
// function square(number){
// var squa = num * num;
// return squa;
// }
// num = +prompt("Enter Number");
// var result = square(num);
// alert(result);

//6. Write a function that computes factorial of a number. 
// var num = +prompt("Enter your Number");
// var ans = num;
// function factorial(number){
//     if(num === 0 || num === 1){
//     alert("Factorial of "+num+" is 1");
//     }
//     else{
//         for(i = num-1; i >= 1; i--){
//             ans = ans * i;
//             alert("Factorial of "+num+" is "+ans);
//         }
//     }
    
// }
// factorial(num);
 

// 7. Write a function that take start and end number as inputs & display counting
//  in your browser. 
// var start = +prompt("Enter Start Number");
// var end = +prompt("Enter End Number");
// function counting(a,b){
//     for(i = start; i <= end; i++){
//    document.write(i+"<br>");
// }
// }
// counting(start,end);

// 8. Write a nested function that computes hypotenuse of a right angle triangle.
//   Hypotenuse2 = Base2 + Perpendicular2 
// Take base and perpendicular as inputs.
// Outer function : calculateHypotenuse()
//  Inner function: calculateSquare() 
// var bas = +prompt("Enter Base of Triangle");
// var per = +prompt("Enter Perpendicular of Triangle");
// function hypotenuse(base,perpendicular){
//     var hyp = Math.sqrt((bas * bas) + (per * per));
//     alert("Hypotenuse is "+hyp)
// }
// hypotenuse(bas,per);

// 9. Write a function that calculates the area of a rectangle.  
//     A = width * height 
//         Pass width and height in following manner:
//          
// i. Arguments as value    
//function Area(width,height){
//     var A = width * height;
//     alert(A);
// }
// Area(20,30);

//ii. Arguments as variables  
// function Area(width,height){
//         var A = width * height;
//         alert(A);
//     }
//     var a = +prompt("Enter Width");
//     var b = +prompt("Enter Height");
//     Area(a,b);


// 10. Write a JavaScript function that checks whether a passed string is
//  palindrome or not?   A palindrome is word, phrase, or sequence that reads 
//  the same backward as forward, e.g., madam. 
// var word = prompt("Enter any word");
// function palindrome(){
//     for(i = word.length-1; i >= 0; i--){
//         if(word === i){
//                alert("The given word is palindrome");
//            }
//            else{
//             alert("The given word is not palindrome");
//            }
//     }
// }
// palindrome();

// 11. Write a JavaScript function that accepts a string as a parameter and
//  converts the first letter of each word of the string in upper case. 
//   EXAMPLE STRING : 'the quick brown fox' 
//    EXPECTED OUTPUT : 'The Quick Brown Fox'  
// function abc(str) {
//     var sentence = str.toLowerCase().split(' ');
//     for(var i = 0; i<sentence.length; i++){
//         sentence[i]= sentence[i][0].toUpperCase()+sentence[i].slice(1)
//     }
//     document.write(sentence.join(" "));
//     return sentence;
    
// }

// abc("web development");


// 12. Write a JavaScript function that accepts a string as a parameter and
//  find the longest word within the string.  
//  EXAMPLE STRING : 'Web Development Tutorial' 
//   EXPECTED OUTPUT : 'Development' 
// function longestWord(string){
//     var wordsArray = string.toLowerCase().split(" ");
//     var longest = wordsArray[0];
//     for (var i = 1; i < wordsArray.length; i++){
//         if(longest.length < wordsArray[i].length){
//             longest = wordsArray[i];
//         }
//     }
// return longest;
// }
// var string = prompt("Enter any string to find the longest word");
// var longest = longestWord(string);
// document.write("String: "+string+"<br/>Longest word: "+longest);

// 13. Write a JavaScript function that accepts two arguments, a string and a 
// letter and the function will count the number of occurrences of the specified
// letter within the string.  Sample arguments : 'JSResourceS.com', 'o'   
// function letter(str,count){
//     str = str.toLowerCase();
//     var count = (str.match(/o/g)).length;
//     document.write(count);
// }
// letter("JSResourceS.com","o");


// 14. The Geometrizer Create 2 functions that calculate properties of a circle,
//  using the definitions here. Create a function called calcCircumference:
//   • Pass the radius to the function.
//    • Calculate the circumference based on the radius, and output 
//    "The circumference is NN". Create a function called calcArea:
//     • Pass the radius to the function.
//      • Calculate the area based on the radius, and output "The area is NN".  
// Circumference of circle    =     2πr
//  Area of circle       =     πr2 