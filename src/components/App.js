import React, { Component } from 'react'
import unsplash from '../api/unsplash';
import SearchBar from './SearchBar';
import ImageGridList from './ImageGridList';


export default class App extends Component {
  state = { images: [] };

  onSearchSubmit = async term => {
    const response = await unsplash.get('/search/photos', {
      params: { query: term, lang: 'fr', per_page: 50 }
    });

    this.setState({ images: response.data.results });    
  };

  
  render() {
    return (      
      <div className="ui container" style={{ marginTop: '10px' }}  >
        <SearchBar onSubmit={this.onSearchSubmit}/>        
        <ImageGridList images={this.state.images} />        
      </div>   
    );
  }
}
