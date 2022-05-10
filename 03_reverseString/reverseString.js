function reverseString(string)
{
    var strArr = string.split("");

    var strArrRev = strArr.reverse();

    var reverseStr = strArrRev.join("");

    return reverseStr;
}

// Do not edit below this line
module.exports = reverseString;
