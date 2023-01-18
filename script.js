/* Bohdan*/
/*1. Create a function that takes an integer as an argument and returns "Even" for even numbers or "Odd" for odd numbers.

function evenOrOdd(number) {
    return number % 2 ? "Odd" : "Even"
}
evenOrOdd(5)
console.log(evenOrOdd(5))*/

/*2.Your task is to make two functions ( max and min, or maximum and minimum, etc., depending on the language ) that receive a list of integers as input, and return the largest and lowest number in that list, respectively.
const min = (list) => Math.min (...list)
    
const max = (list) => Math.max (...list)

console.log(min([12 , 20 ,50 , -50 , 25 ,111]))
console.log(max([12 , 20 ,50 , -50 , 25 ,111]))*/

3.Given a month as an integer from 1 to 12, return to which quarter of the year it belongs as an integer number.
const quarterOf = (month) => {
    if (month <= 3) {return 1;}
    else if (6 >= month &&  month > 3) {return 2;}
    else if (9 >= month && month > 6) {return 3;}
    else if (12 >= month && month >9) {return 4;}
    }
