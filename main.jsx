import $ from 'jquery'
import './style.css'
import javascriptLogo from './javascript.svg'
import viteLogo from '/vite.svg'
import { setupCounter } from './counter.js'

// const div = React.createElement('div', { className: 'dangerous', style: {color: 'red', border: '1px solid green'} }, [
//   React.createElement('h1', null, [' Hello',
//   React.createElement('span', {style: {color: 'blue'}}, [' World!'])
// ]),

// ])

const Hello = (props) =>{
  console.log(props)
  return(
    <p>Hello World</p>
  )
} 
// const div2 = () => {<P>Hello Altschool</P>}

console.log(<Hello greetings = {'morning!'} />)


ReactDOM.render([Hello({greetings: 'Afternoon'}),], document.getElementById('app'))