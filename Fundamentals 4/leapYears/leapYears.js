const leapYears = function(years) {
if(years % 100 != 0 && years % 4 === 0 || years % 400 === 0 ){
return true
  } else {
      return false
  }
}


module.exports = leapYears
