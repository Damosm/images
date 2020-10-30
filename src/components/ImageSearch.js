import React, { Component } from 'react'
import unsplash from '../api/unsplash';
import SearchBar from './SearchBar';
import ImageGridList from './ImageGridList';



export default class ImageSearch extends Component {
  state = { images: [] };

  onSearchSubmit = async term => {
    const response = await unsplash.get('/search/photos', {
      params: { query: term, lang: 'fr', per_page: 50 }
    });

    this.setState({ images: response.data.results });
  };


  render() {
    return (
      <div style={{ backgroundColor: '#856D4D' }}>
        <div className="ui container"   >
          <SearchBar onSubmit={this.onSearchSubmit} />
          <ImageGridList images={this.state.images} />
        </div>
      </div>
    );
  }
}
