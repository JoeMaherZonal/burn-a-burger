var React = require('react')

var UserInput = React.createClass({

  getInitialState: function(){
    return {
      age: null,
      height: null,
      weight: null,
      gender: "male"
    }
  },

  getUserDetails: function(){
    var params = {}
    params.age = this.state.age
    params.weight = this.state.weight 
    params.height = this.state.height 
    params.gender = this.state.gender 
    return params
  },

  handleClick: function(){
    var params = this.getUserDetails()
    this.props.setUserStats(params)
  },

  handleAgeChange: function(event){
    this.setState({age: event.target.value})
  },

  handleWeightChange: function(event){
    this.setState({weight: event.target.value})
  },

  handleHeightChange: function(event){
    this.setState({height: event.target.value})
  },

  handleGenderChange: function(event){
    this.setState({gender: event.target.value})
  },

  render: function(){

    return(
      <div className="row">
        <div className="col-12">
          <div id="user-input-container">

            <div className="row">
              <div className="col-12">

                <div className = "row">
                  <div className="col-12">
                    <input onChange={this.handleAgeChange} className="user-input" type='number' placeholder="Age"></input>
                  </div>
                </div>

                <div className = "row">
                  <div className="col-12">
                    <input onChange={this.handleHeightChange} className="user-input" type='number' placeholder="Height CM"></input>
                  </div>
                </div>

                <div className = "row">
                  <div className="col-12">
                    <input onChange={this.handleWeightChange} className="user-input" type='number' placeholder="Weight KG"></input>
                  </div>
                </div>

                <div className = "row">
                  <div className="col-12">
                    <select onChange={this.handleGenderChange} className="user-input">
                      <option value='male'>Male</option>
                      <option value='female'>Female</option>
                    </select>
                  </div>
                </div>

                <div className = "row">
                  <div className="col-12">
                    <button className="user-input" onClick={this.handleClick}>OK</button>
                  </div>
                </div>

              </div>
            </div>
          </div>

        </div>
      </div>
      )}

  })

module.exports = UserInput;