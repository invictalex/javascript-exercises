//take each number, and find which one is larger. create a loop between both numbers that deposits i into an array. 
//Find a function for adding array elements.


function sumAll(x, y)
{
    if (x < 0 || y < 0 || typeof x === "object" || typeof y === "object" || typeof x === "string" || typeof y === "string")
    {
        return "ERROR";
    }
    
    var smallest;
    var largest;
    var aggregate = 0;

    if (x <= y) {smallest = x; largest = y;}
    if (x > y) {smallest = y; largest = x;}
    
    for (let i = smallest; i <= largest; i++)
    {
        aggregate += i;
    }

    return aggregate;
}

// Do not edit below this line
module.exports = sumAll;
