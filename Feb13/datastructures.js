//Js is a dynamic language-meaning that vairbales are NOT associated with a particular value type
let foo = 42; //number
foo = "bar"; //string
foo = true; //boolean

//it is also a WEAKLY type language, meaning that it allows implicit type conversin when needed instead of throwing errors, type erros

const boo = 42;

const result = boo + "1"

console.log(result); //gives the result 421 instead of throwing an error

/*
*Type	    typeof return value	        Object wrapper
Null	    "object"	                N/A
Undefined	"undefined"         	    N/A
Boolean	    "boolean"	                Boolean
Number	    "number"	                Number
BigInt	    "bigint"	                BigInt
String	    "string"	                String
Symbol	    "symbol"	                Symbol
*
*/


//did leetcode problem #13 "roman to integer"
/*
didnt understand this one intuitively.needed a refresher on how a function worked and how a for loop was written

ened up with a solutino where for each time subtractionw as needed there would be a switch case. so sx in total
    -iv 4
    -ix 9
    -xl 40
    -xc 90
    -cd 400
    -cm 900

if what was behind the current leter was either of these cases than we would add what was needed instead of adding the whole integer
    -MCMXCIV
    so since "c" came before "m" in the third letter of this string then in the second m we end up adding 800 instead of the nomral 1000 since cm=900 but we already added 100
    in place of "C" and just needed to add enough to make this problem whole

                    var romanToInt = function(s) {

                    let sum = 0;

                    for(let i=0; i < s.length; i++){
                        let prev = s[i-1];
                        switch(s[i]){
                            case "I": sum += 1;
                                break;
                            case "V":
                                sum = prev === "I" ? sum + 3 : sum + 5;
                                break;

                            case "X":
                                sum = prev === "I" ? sum + 8 : sum + 10;
                                break;

                            case "L":
                                sum = prev === "X" ? sum + 30 : sum + 50;
                                break;

                            case "C":
                                sum = prev === "X" ? sum + 80 : sum + 100;
                                break;

                            case "D":
                                sum = prev === "C" ? sum + 300 : sum + 500;
                                break;
                            case "M":
                                sum = prev === "C" ? sum + 800 : sum + 1000;
                                break; 
                        }
                    }
                return sum;
                };

*/

//I need to look into time complexity and understand what the meaning of allof these mean and their signigcance in code

