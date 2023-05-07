// Search.js

import React, { Component } from 'react';
import SearchItems from './SearchItems';
//import SearchItems from './SearchItems';

//constructor is used here and not in SearchItems because the data will be fetched from HERE

export class Search extends Component {
  constructor() {
    super();
    this.state = {
      weather: [
        {
          temp: 23.05,
          feels_like: 23.71,
          temp_min: 23.05,
          temp_max: 23.05,
          pressure: 1011,
          humidity: 88,
        }
      ]
    };
  }

  async componentDidMount(){
    let url="https://api.openweathermap.org/data/2.5/weather?q=delhi&appid=9ed72f407b1e9028a3de94d3b3a78011&&units=metric"
    let data= await fetch(url)
    let parsedData= await data.json()
    console.log(parsedData)
    this.setState({weather: parsedData.weather})
  }

  render() {
    return (
      
      <div className='container'>
        <div className='weather'>
          <div className='search'>
            <input type='text' placeholder='Enter city name' />
            
            {this.state.weather.map((element) => {
              return (
                
                <SearchItems
                  temp={element.temp}
                  feels_like={element.feels_like}
                  key={element.temp}
                />

              );
            })}
          </div>
        </div>
      </div>
    );
  }
}

export default Search