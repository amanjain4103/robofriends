import React from 'react';
import CardList from './CardList'
import {Users} from './Users';
import SearchBox from './SearchBox';
import './App.css';

class App extends React.Component{
    
    constructor(){
        super()
        this.state ={
            robots:Users,
            SearchItem:""
        }
    }
    onSearchChange = (event)=>{
        this.setState({ SearchItem:event.target.value });

    }
    render(){
        const filterRobo = this.state.robots.filter(robo => {
            return robo.name.toLowerCase().trim().includes(this.state.SearchItem.toLowerCase().trim())
        })

        return(
            <div className="container">
                <h1>ROBOFRIENDS</h1>
                <SearchBox SearchChange={this.onSearchChange}/>
                <CardList Users={filterRobo}/>
            </div>
        )
    }
}


export default App;