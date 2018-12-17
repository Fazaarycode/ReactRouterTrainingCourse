import React, { Component, Fragment } from 'react'
import { BrowserRouter, Link, Route, Switch } from 'react-router-dom'

const About = () =>{
	return <h1> About </h1>
}
const Contacts = () =>{
	return <h1> Contacts </h1>
}
// const User = ({...props}) => console.log(...props) ||
// <h1>Welcome Mr/Mrs {...props.match.url}</h1>

const User = ({match}) =>{
	return <h3>Welcome {match.params.user} </h3>
}

export default class extends Component{
		render(){
		return <BrowserRouter>
		 <Fragment>
		 <ul>
		 <li><Link to ="/About">About</Link></li>
		 <li><Link to ="/Contacts">Contacts</Link></li>
		 <li><Link to ="/lion">lion</Link></li>
		 <li><Link to ="/tiger">tiger</Link></li>
		 </ul>
		 <Switch>
		 <Route path ="/About" component={About}/>
		 <Route path ="/Contacts" component={Contacts}/>
		 <Route path ="/:user" component ={User} />
		 </Switch>
		 </Fragment>
		 </BrowserRouter>
	
		}
}