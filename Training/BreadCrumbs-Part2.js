import React, { Component, Fragment } from 'react'
import { BrowserRouter, Link, Route } from 'react-router-dom'

const routes=[
	{
		path:'/',
		exact:true,
		main : () =><h1>Main Flash </h1>,
		sidebar: ()=><h1>Side Flash </h1>,
	},
	{
		path:'/second',
		main : () =><h1>Main Superman </h1>,
		sidebar: ()=><h1>Side Superman </h1>,
		},
	{
		path:'/third',
		main : () =><h1>Main Batman and Robin with Spiderman collab </h1>,
		sidebar : () =><h1> Confusing collab </h1>
		},
	]

export default class extends Component{
	render(){
		return <BrowserRouter>
		 <Fragment>
		 	<div style={{display:'flex', padding:0, marginLeft:'5px',width:'20%',marginTop:10,display:'block',background:'tomato'}}>
				<ul style={{listStyleType:'none', padding:0}}>
					<li><Link to ="/">Home</Link></li>
					<li><Link to ="/second">second</Link></li>
					<li><Link to ="/third">third</Link></li>
				</ul>
				{
					routes.map(route => <div key = {route.path}>
					 <Route path = {route.path}
					 exact= {route.exact}
					 component = {route.sidebar}
					 />
					 </div>)
				}
			</div>
			<div style= {{flex: 1, padding:10,background:'DodgerBlue'}}>
			{
					routes.map(route => <div key = {route.path}>
					 <Route path = {route.path}
					 exact= {route.exact}
					 component = {route.main}
					 />
					 </div>)
				}
			</div>
		 </Fragment>
		 </BrowserRouter>
	
}
}