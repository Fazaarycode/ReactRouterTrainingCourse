import React, { Component, Fragment } from 'react'
import { BrowserRouter, Link, Route } from 'react-router-dom'
import { Prompt } from 'react-router'
export default class extends Component{
	state ={
		isBlocking: 'false',
		val : ''
	}
	handleVal = (e) =>{
		this.setState({
			val : e.target.value,
			isBlocking:true
		})
	}
	render(){
		return <BrowserRouter>
		 <Fragment>
		 	<ul>
		 	<li><Link to ="/">Home</Link></li>
		 	<li><Link to ="/form">Form</Link></li>
		 	<li><Link to ="/two">Two</Link></li>
		 	<li><Link to ="third">Third</Link></li>
		 	</ul>
		 <Route exact path ="/" 
		 render ={()=><h1> Welcome to the home route </h1>}
		 	/>
		 	<Route exact path ="/two" 
		     render ={()=><h1> Welcome to the second route </h1>}
		 	/>
		 	<Route exact path ="/third" 
		 render ={()=><h1> Welcome to the third route </h1>}
		 	/>
		 <Route path = "/form" render = {()=>
		  <form>
		  <input type="text" 
		  value = {this.state.val}
		  onChange={this.handleVal}
		  placeholder="Type something to enable the prompt"/>
		  <Prompt
  			when={ this.state.val !== ''}
  			message={(location) => `Are you sure you want to leave to ${location.pathname}`}
		   />
		  </form>}
		  />
		 </Fragment>
		 </BrowserRouter>
	
}
}