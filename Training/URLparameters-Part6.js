import React, { Component, Fragment } from 'react'
import { BrowserRouter, Link, Route, Switch, Redirect } from 'react-router-dom'

const DynamicDisplayById  = ({match}) => {
	 return <h1>{match.params.id}</h1>
}

export default class extends Component{
		render(){
			//<li><Link to ="/old-match">old-match to redirect</Link></li>
		return <BrowserRouter>
		 <Fragment>
		 <ul>
			 <li><Link to ="/google">google</Link></li>
			 <li><Link to ="/facebook">facebook</Link></li>
			 <li><Link to ="/twitter">twitter</Link></li>
			 <li><Link to ="/myspace">myspace</Link></li>
		 </ul>
		 <Route path = "/:id" component={DynamicDisplayById} />
		 </Fragment>
		 </BrowserRouter>
	
		}
}