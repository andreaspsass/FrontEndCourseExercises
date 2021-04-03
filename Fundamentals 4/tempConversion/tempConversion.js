const ftoc = function(fTemp) {
  let fToCel =(fTemp - 32) * 5 / 9;
  let roundedResult = Math.round(fToCel * 10) / 10;
  
  return roundedResult;
}

const ctof = function(cTemp) {
  let cToFahr = (cTemp * 9 / 5) + 32;
  let roundedResult = Math.round(cToFahr * 10) / 10;
  
  return roundedResult;
}

module.exports = {
  ftoc,
  ctof
}
