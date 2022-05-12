function ftoc(far)
{
  var cels = (far - 32)*(5/9);

  if (cels % 1 === 0)
  {
    return cels;
  }
  else
  {
    return parseFloat(cels.toFixed(1));
  }
  
}

function ctof(cels)
{
  var far = (cels*9/5) + 32;

  if (far % 1 === 0)
  {
    return far;
  }
  else
  {
    return parseFloat(far.toFixed(1));
  }
  
}

// Do not edit below this line
module.exports = {
  ftoc,
  ctof
};
