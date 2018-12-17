import React, { Component, Fragment } from 'react'
import { BrowserRouter, Link, Route } from 'react-router-dom'

const About = () =>{
	return <h2> About </h2>
}
const Rendering = ({...props}) => console.log(props) ||
	 <h2> My location is .. {props.match.url}   </h2>

const Topics = ({match}) =>{
	return <div>
	 <Fragment>
	 <h2> Topics </h2>
	 <ul>
	 <li><Link to = {`${match.url}/rendering`}>Rendering</Link></li>
	 <li><Link to = {`${match.url}/components`}>Component</Link></li>
	 <li><Link to = {`${match.url}/Props-V-State`}>Props-V-State</Link></li>
	 </ul>
	 <Route exact path ='/topics/:topicId' component={Rendering}/>
	 <Route exact path = {`${match.url}`} render= {()=> <h1> Please select a topic!</h1>} />
	 </Fragment>
	 </div>
}
export default class extends Component{
	render(){
		return <BrowserRouter>
		 <Fragment>
		 	<ul>
		 	<li><Link to ="/">Home</Link></li>
		 	<li><Link to ="/About">About</Link></li>
		 	<li><Link to ="/Topics">Topics</Link></li>
		 </ul>
		 <hr />
		 <Route exact path = "/" render = {() =><h1> Hey </h1>} />
		 <Route path = "/About" component = {About} />
		 <Route path = "/Topics" component = {Topics} />
		 </Fragment>
		 </BrowserRouter>
	}
}