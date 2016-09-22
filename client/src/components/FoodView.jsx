var React = require('react')
var Food = require('../models/Food')

var FoodInput = React.createClass({

  getInitialState: function(){
    return {
      foodInput: null,
      optionNodes: null
    }
  },

  handleClick: function(event){
    this.props.changeToExcerciseOutPut()
  },

  populateNodes: function(data){
    var newNodes = []
    for(var i = 0; i < data.hits.length; i++){
      var info = data.hits[i].fields
      newNodes.push(<option key={i} value={info.item_name + "-" + info.brand_name + "-" + info.nf_calories}></option>)
    }
    this.setState({optionNodes: newNodes})
  },

  getFoodData: function(text){
    var url = "https://api.nutritionix.com/v1_1/search/" + text + "?fields=item_name%2Citem_id%2Cbrand_name%2Cnf_calories%2Cnf_total_fat&appId=94d854b9&appKey=3373a6e002c32308833af653b87f540b"
    var request = new XMLHttpRequest()
    request.open("GET", url)
    request.onload = function(){
      if(request.status === 200){
        var data = JSON.parse(request.responseText)
        this.updateResults(data)
        this.populateNodes(data)
        // console.log(data)
      }
    }.bind(this)
    request.send(null)
  },

  updateResults: function(data){
    var results = []
    for(var result of data.hits){
      if(result.fields){
        var newResult = new Food({
          foodName: result.fields.item_name,
          brandName: result.fields.brand_name,
          calories: result.fields.nf_calories,
          fat: result.fields.nf_total_fat,
          servingSize: result.fields.nf_serving_size_unit
        })
        results.push(newResult)
      }
    }
    this.props.updateResults(results)
  },

  handleChange: function(event){
    this.setState({foodInput: event.target.value})
    if(this.state.foodInput != null && this.state.foodInput.length > 3){
      this.getFoodData(event.target.value)
      this.findSelectedFood(event.target.value)
    }
  },

  findSelectedFood: function(values){
    this.props.updateSelectedResult(values)
  },

  render: function(){

    return(
      <div className="row">
        <div className="col-12">

          <div className = "row">
            <div className="col-12">

            <input onChange={this.handleChange} list="foods" name="foods"></input>
            <datalist id="foods">
              {this.state.optionNodes}
            </datalist>
            <button onClick={this.handleClick}>Burn!</button>
    
            </div>
          </div>

        </div>
      </div>
      )}

  })

module.exports = FoodInput;