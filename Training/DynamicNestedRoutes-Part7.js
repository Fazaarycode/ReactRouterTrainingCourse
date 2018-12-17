import React, { Component, Fragment } from 'react'
import { BrowserRouter, Link, Route, Switch, Redirect } from 'react-router-dom'

const Home = () =>{
	return <h1> Home </h1>
}
const URLTopics = ({match}) =>{
  console.log(' I am from URLTopics ', match);
  const subTopic = 
  topics.find(({id})=> id === match.params.topicId)
       .resources.find(({id})=> id === match.params.subId)
  console.log('Found ', subTopic);
  
  return <div>
  <h1>{subTopic.name}</h1>
  <p>{subTopic.description}</p>
  <a href= {`${subTopic.url}`} target="_blank"> More info. </a>
  </div>
}
const SubTopic = ({match}) =>{
  //console.log(match);
  const topic = topics.find(({id})=> id === match.params.topicId)
  //console.log('I am topic from SubTopic ' , topic);

  return <div>
  <h1> {topic.name} </h1>
  <p>  {topic.description} </p>

  {
    topic.resources.map( ({url, id}) =>{
      return <li key ={id}>
      <Link to ={`${match.url}/${id}`}>{url}</Link>
      </li>
    })
  }
  <hr />
  <Route path = {`${match.path}/:subId`} component = {URLTopics} />
  </div>
  }

   



const Topics = ({match}) =>console.log(match) ||(
	 <div>
	<Fragment>
	<h1> Topics </h1>
	{topics.map(({name, id}) =>{
		return <ul style={{paddingLeft:5}}>
		<li key={id}><Link to ={`${match.url}/${id}`}>{name}</Link></li>
		</ul>
	})}
	<hr/ >
  <Route path = {`${match.path}/:topicId`} component = {SubTopic} />
	</Fragment>
	</div>

)
const topics = [
  {
    name: 'React Router',
    id: 'react-router',
    description: 'Declarative, component based routing for React',
    resources: [
      {
        name: 'URL Parameters',
        id: 'url-parameters',
        description: "URL parameters are parameters whose values are set dynamically in a page's URL. This allows a route to render the same component while passing that component the dynamic portion of the URL so it can change based off of it.",
        url: 'https://tylermcginnis.com/react-router-url-parameters/'
      },
      {
        name: 'Programatically navigate',
        id: 'programmatically-navigate',
        description: "When building an app with React Router, eventually you'll run into the question of navigating programmatically. The goal of this post is to break down the correct approaches to programmatically navigating with React Router.",
        url: 'https://tylermcginnis.com/react-router-programmatically-navigate/'
      }
    ]
  },
  {
    name: 'React.js',
    id: 'reactjs',
    description: 'A JavaScript library for building user interfaces',
    resources: [
      {
        name: 'React Lifecycle Events',
        id: 'react-lifecycle',
        description: "React Lifecycle events allow you to tie into specific phases of a component's life cycle",
        url: 'https://tylermcginnis.com/an-introduction-to-life-cycle-events-in-react-js/'
      },
      {
        name: 'React AHA Moments',
        id: 'react-aha',
        description: "A collection of 'Aha' moments while learning React.",
        url: 'https://tylermcginnis.com/react-aha-moments/'
      }
    ]
  },
  {
    name: 'Functional Programming',
    id: 'functional-programming',
    description: 'In computer science, functional programming is a programming paradigm—a style of building the structure and elements of computer programs—that treats computation as the evaluation of mathematical functions and avoids changing-state and mutable data.',
    resources: [
      {
        name: 'Imperative vs Declarative programming',
        id: 'imperative-declarative',
        description: 'A guide to understanding the difference between Imperative and Declarative programming.',
        url: 'https://tylermcginnis.com/imperative-vs-declarative-programming/'
      },
      {
        name: 'Building User Interfaces with Pure Functions and Function Composition',
        id: 'fn-composition',
        description: 'A guide to building UI with pure functions and function composition in React',
        url: 'https://tylermcginnis.com/building-user-interfaces-with-pure-functions-and-function-composition-in-react-js/'
      }
    ]
  }
]
export default class extends Component{
		render(){
		
		return <BrowserRouter>
		 <Fragment>
		 <ul>
			 <li><Link to ="/Home">Home</Link></li>
			 <li><Link to ="/Topics">Topics</Link></li>
		</ul>
		<hr />
		<Route path ="/Home" component={Home} />
		<Route path ="/Topics" component={Topics} />

		 </Fragment>
		 </BrowserRouter>
	
		}
}