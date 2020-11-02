import React, { Component } from 'react';
import Card  from './Card';
import './CardList.css'


export default class FliteredCardList extends Component {
    robots;
    constructor(props) {
        super(props);
    
        this.state = { robots: [] };
      }
    componentDidMount(){
        const movieId=this.props.match.params.yearId
        console.log(movieId);
        let endpointForMovieInfo = `https://api.spacexdata.com/v3/launches?limit=100&launch_year=${movieId}`;
        this.fetchDetailInfo(endpointForMovieInfo)
    }

     fetchDetailInfo = (endpoint) => {

        fetch(endpoint)
            .then(result => result.json())
            .then(result => {
                console.log(result);
               
                this.setState({robots:result})

            })
            .catch(error => console.error('Error:', error)
            )
    }
    render() {
        
        return (
            <div  className="cardList">
      
            {this.state.robots.map((launch, index) => {
              return (
                <Card launch={launch}/>
              );
            })}
          
        </div>
        )
    }
}
