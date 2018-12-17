import React, { Component, Fragment } from 'react'
import { BrowserRouter, Link, Route, Switch, Redirect } from 'react-router-dom'

const About = () =>{
	return <h1> About </h1>
}
const Dummy = () =>{
	return <h1> Dummy for no-route-for-this-match </h1>
}
const NewMatch = () =>{
	return <h1> Redirected to NewMatch from /old-match!!</h1>
}

export default class extends Component{
		render(){
			//<li><Link to ="/old-match">old-match to redirect</Link></li>
		return <BrowserRouter>
		 <Fragment>
		 <ul>
		 <li><Link to ="/About">About</Link></li>
		 <li><Link to ="/Will-match">Route available</Link></li>
		 <li><Link to ="/old-match">Old match component, to be redirected</Link></li>
		 <li><Link to ="/no-route-for-this-match">No routes available</Link></li>
		 </ul>
		 <Switch>
		 <Route path ="/About" component={About}/>
		 <Route path ="/new-match" component={NewMatch}/>
		 <Route path ="/Will-match" render={()=><div><h1>Matched!</h1></div>}/>
		 <Redirect from ="/old-match" to ="/new-match" />
		 <Route component={Dummy} />
		 </Switch>
		 </Fragment>
		 </BrowserRouter>
	
		}
}