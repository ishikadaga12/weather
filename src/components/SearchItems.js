import React, { Component } from 'react';

export class SearchItems extends Component {

  render() {

    let {temp, feels_like} = this.props;
    return (
      <div>
        <div className='info'>
          <h5 className='tempTitle'>{temp}</h5>
          <p className='feelsLike'>{feels_like}</p>
        </div>
      </div>
    );
  }
}

export default SearchItems;
