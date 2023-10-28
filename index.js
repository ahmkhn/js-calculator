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

function addValuesToDisplay(value)
{
    if(currentDisplayValue=="0")
    {
        currentDisplayValue="";
    }
    currentDisplayValue+=value;
    document.getElementById("displayValue").innerHTML=currentDisplayValue;
}
function operatorFromButton(value)
{
    if(currentDisplayValue!="0")
    {
        currentDisplayValue+=value;
    }
}
function calculateValue(value)
{
    if(currentDisplayValue!="0")
    {
        // let's say currentDisplayValue = "4*9"... we need to parse this.
        parsedString = currentDisplayValue.split("");
        console.log(parsedString,"parsed String");
        //console.log(parsedString); i.e ['7','*','5"];
        // length of arr will always be 3.
            let val1 =""
            let val2 = parsedString[1];
            let val3 = "";
            // val1 = 7, val2 = *, val 3 = 5
            let returnValue = operate(val2,val1,val3);
            console.log(returnValue);        // this approach works for 7*5 but not 7*55 as the 2nd '5' is stored in the 4th variable.
            // set val1 to concatenation of values before operator, set val 3 to concatenation of values after operator.
            let x = false; // we are on value 1, operator has NOT been parsed yet.
            for(let i =0;i<parsedString.length-1;i++)
            {
                
                if(parsedString[i]!='-' && parsedString[i]!='*' && parsedString[i]!='/' &&parsedString[i]!='+' && x==false)
                {
                    // it's just a value. concatenate.
                    val1+=parsedString[i];
                } else if(parsedString[i]=='-' || parsedString[i]=='*' || parsedString[i]=='/' ||parsedString[i]=='+' && x==false)
                {
                    // it's an operator
                    val2 = parsedString[i];
                    x=true;
                }else if(x==true)
                {
                    // it's the second value, concatenate.
                    val3+=parsedString[i];
                }
                
            }
            console.log(val1,val2,val3);
    }
}