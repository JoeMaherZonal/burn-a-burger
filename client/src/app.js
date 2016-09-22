var React = require('react');
var ReactDOM = require('react-dom');
var Main = require('./components/Main')

window.onload = function(){
  var divStyle = {
    color: 'red',
    backgroundImage: 'url(' + "images/burger.jpg" + ')',
    WebkitTransition: 'all', // note the capital 'W' here
    msTransition: 'all' // 'ms' is the only lowercase vendor prefix
  }
  console.log("app started")
  ReactDOM.render(
    <Main style={divStyle} />,
    document.getElementById('main-div')
  );
}