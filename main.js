import $ from 'jquery'
import './style.css'
import javascriptLogo from './javascript.svg'
import viteLogo from '/vite.svg'
import { setupCounter } from './counter.js'


$('app').click(function(e){
  // e.preventDefault()
  window.alert('Hello Jquery!')
  console.log('hello')
})
