function removeFromArray(arr, ...itemsToRemove)
{
    for (let i = 0; i < itemsToRemove.length; i++)
    {
        var item = itemsToRemove[i];

        itemIndex = arr.indexOf(item);

        if (itemIndex >= 0)
        {
            var removed = arr.splice(itemIndex, 1);
        }

        
    }
    return arr;
}

// Do not edit below this line
module.exports = removeFromArray;
