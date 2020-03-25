import React, { Component } from 'react';
import CardList from '../Components/CardList.js';
import SearchBox from '../Components/SearchBox';
import Scroll from '../Components/Scroll.js';
import ErrorBountry from '../Components/ErrorBountry.js';
import './App.css';

class App extends Component {
    constructor() {
        super()
        this.state = {
            robots: [],
            searchField: ''
        }
    }

    onSearchChange = (event) => {
        this.setState({ searchField: event.target.value })
        }   
    
    componentDidMount() {
        fetch('https://jsonplaceholder.typicode.com/users')
        .then(response => response.json())
        .then(users => this.setState({robots: users}))
    }
    
    render() {
        const { robots, searchField } = this.state;
        const filteredRobots = robots.filter(robot => {
            return robot.name.toLowerCase().includes(searchField.toLowerCase());
        })
        if (this.state.robots.length === 0 ) {
            return <h1>Loading...</h1>
        } else {
            return (
                <div className='tc'>
                    <h1>RoboFriends</h1>
                    <SearchBox searchChange={ this.onSearchChange }/>
                    <Scroll>
                        <ErrorBountry>
                            <CardList robots={filteredRobots} />
                        </ErrorBountry>
                    </Scroll>
                </div>
            );
        }
    }
 
}


export default App;