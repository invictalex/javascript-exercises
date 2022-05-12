//can be divided by 4, can be divided by 400, cannot be divided by 100
//can it be divided by 400 y (LY) or NO --> can it be divided by 100 y (nLY) --> NO --> can it be divided by 4 y(LY) NO (nLY)


function leapYears(year)
{
    if (year < 0 || year === "object" ||year === "string")
    {
        return "ERROR";
    }

    if (year % 400 === 0)
    {
        return true;
    } 
    else if (year % 100 === 0)
    {
        return false;
    } 
    else if (year % 4 === 0)
    {
        return true;
    }
    else 
    {
        return false;
    }
}

// Do not edit below this line
module.exports = leapYears;
