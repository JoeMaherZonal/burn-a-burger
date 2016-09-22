var React = require('react')
var UserInput = require('./UserInput')
var FoodView = require('./FoodView')
var ExcerciseView = require('./ExcerciseView')
var Exercise = require('../models/Exercise')

var Main = React.createClass({

  getInitialState: function(){
    return {
      userStats: {},
      view: <UserInput setUserStats={this.setUserStats}/>,
      results: [],
      selectedResult: null,
      excercises: []
    }
  },

  updateSelectedResult: function(values){
    var splitValues = values.split("-")
    if(!splitValues[2]){return}
    console.log(splitValues + ":" + this.state.results[0].foodName + ":" + this.state.results[0].brandName + ":" + this.state.results[0].calories)
    for(var result of this.state.results){
      if(result.foodName === splitValues[0] && result.brandName === splitValues[1]){
        this.setState({selectedResult: result})
      }
    }
  },

  componentDidMount(){
    this.loadExercises()
  },

  loadExercises: function(){
    var url = "http://localhost:5000/data"
    var request = new XMLHttpRequest()
    request.open("GET", url)
    request.onload = function(){
      if(request.status === 200){
        var data = JSON.parse(request.responseText)
        this.updateExercises(data)
      }
    }.bind(this)
    request.send(null)
  },

  updateExercises: function(data){
    var excercises = []
    for(var exercise of data){
      var newExercise = new Exercise(exercise)
      excercises.push(newExercise)
    }
    this.setState({excercises: excercises})
  },

  updateResults: function(results){
    this.setState({results: results})
  },

  setUserStats: function(params){
    this.setState({userStats: params})
    this.changeToFoodInput()
  },

  changeToFoodInput: function(){
    this.setState({view: <FoodView updateResults={this.updateResults} updateSelectedResult={this.updateSelectedResult} results={this.state.results} changeToExcerciseOutPut={this.changeToExcerciseOutPut} />})
  },

  changeToExcerciseOutPut: function(){
    this.setState({view: <ExcerciseView />})
  },

  render: function(){
    var divStyle = {
      backgroundImage: 'url(' + "images/burger.jpg" + ')',
    }

    return(
      <div style={divStyle} className="row" id="main-container">
        <div className="col-12">
          {this.state.view}
        </div>
      </div>
      )}

  })

module.exports = Main;