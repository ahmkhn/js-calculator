// Let's start by creating basic functions for the operations of a calculator.

function add(a,b)
{
    return(a+b);
}
function subtract(a,b)
{
    return (a-b)
}
function multiply(a,b)
{
    return(a*b);
}
function divide(a,b)
{
    return(a/b);
}
// basic functions done.
function operate(operator,num1,num2)
{
    if(operator=="+")
    {
        return(add(num1,num2));
    } else if(operator=="-")
    {
        return(subtract(num1,num2));
    } else if(operator=="/")
    {
        return(divide(num1,num2));
    }else if(operator=="*")
    {
        return(multiply(num1,num2));
    }
}
// operator function complete.

let currentDisplayValue = document.querySelector("#displayValue").innerHTML // stores display value.
console.log(currentDisplayValue,"before clear");
function clearButton()
{
    document.getElementById("displayValue").innerHTML="0";
    currentDisplayValue=document.querySelector("#displayValue").innerHTML;
}