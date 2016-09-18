var React = require('react');
var ReactDOM = require('react-dom');
var AppBox = require('./components/app_box')

window.onload = function(){
  console.log("app started")
  ReactDOM.render(
    <AppBox />,
    document.getElementById('main-div')
  );
}