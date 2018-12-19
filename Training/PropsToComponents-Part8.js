import React, { Component, Fragment } from 'react'
import { BrowserRouter, Link, Route, Switch, Redirect } from 'react-router-dom'

const Home = () =>{
  return <h1> Home </h1>
}
const About = () =>{
  return <h1> About </h1>
}
  const routes = [
  {
      path : "/Home",
      component : Home,
      CurrentTIme: new Date(),
      },
      {
      path : "/About",
      component : About,
      CurrentTIme: new Date(),
      },
  ]
export default class extends Component{
    render(){
    
    return <BrowserRouter>
     <Fragment>
     <ul>
       <li><Link to ="/Home">Home</Link></li>
       <li><Link to ="/About">About</Link></li>
     </ul>
    {
      routes.map(({path, component:C, CurrentTIme})=>{
        return <Route 
        path = {path}
        render ={(props)=><C {... props} Time = {CurrentTIme}/>}
        />
      })
    }
     </Fragment>
     </BrowserRouter>
  
    }
}