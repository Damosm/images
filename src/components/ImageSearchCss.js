import React, { Component } from 'react'
import unsplash from '../api/unsplash';
import SearchBar from './SearchBar';
import ImageList from './ImageList'



export default class ImageSearchCss extends Component {

  constructor(props){
    super(props);

    this.state = { images: [] };

    this.onSearchSubmit = this.onSearchSubmit.bind(this);
  }
  

  onSearchSubmit = async term => {
    const response = await unsplash.get('/search/photos', {
      params: { query: term, lang: 'fr', per_page: 50 }
    });

    this.setState({ images: response.data.results });
  };


  render() {
    return (
      <div>
        <div className="ui container">
          <SearchBar onSubmit={this.onSearchSubmit} />
          <ImageList images={this.state.images} />
        </div>
      </div>
    );
  }
}
