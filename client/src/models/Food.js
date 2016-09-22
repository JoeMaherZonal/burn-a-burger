
var Food = function(params){
  this.foodName = params.foodName,
  this.brandName = params.brandName,
  this.calories = params.calories,
  this.fat = params.fat,
  this.servingSize = params.servingSize
}

Food.prototype = {

}

module.exports = Food;