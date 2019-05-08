import React, { Component } from 'react';
import './App.css';
import axios from 'axios';

import Card from './Card';
import GreyCard from './GreyCard';
import Search from './Search';


class App extends Component{

	constructor(){
		super()
			this.state = {
				posts: '',
				searched: '',
				filtered: ''
				
			}
	}

	componentDidMount(){
		axios('http://jsonplaceholder.typicode.com/posts')
		.then(res => this.setState({
			posts: res.data
		}))
	}

	search(e){

		let value = e.target.value;
		this.setState({
			searched: value
		})
		this.setState({
			filtered: this.state.posts.filter(element  => {
			return element.title === value ;
		})
	})
}

  render(){
	  	return (
	    <div className="App">
		{ /*1----2---AND--3-----*/ }

	    {/*<Card title="NO BG CARD" >
	        	          <h2>No BG CARD</h2>
	        	        </Card>
	        	       <GreyCard />*/}

	    	{ /*--4---AND--5-----*/ }

	        	       {/* this.state.posts && this.state.posts.map((element,index)=> {
	       		return index % 2 === 0 ? 
	       		<Card key={index} title={element.title} > <p>{element.body}</p> </Card> 
	       		:
	       		<GreyCard  key={index} title={element.title} text={element.body}></GreyCard>})*/}


	    	<Search search={this.search.bind(this)} />
	    	{
	    		this.state.searched === "" ? this.state.posts && this.state.posts.map((element,index)=> {
	    			return <Card key={index} title={element.title} > <p>{element.body}</p> </Card>
	    		})
	    		:
	    		this.state.filtered.map((element, index) => {
	    			return <Card key={index} title={element.title}> <p>{element.body}</p> </Card>
	    		})
	    		
	    	}
	    </div>
	  );
  }
}

export default App;


