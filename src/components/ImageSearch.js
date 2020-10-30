import React, { Component } from 'react'
import unsplash from '../api/unsplash';
import SearchBar from './SearchBar';
import ImageGridList from './ImageGridList';
import img1 from '../images/4.jpg';



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
      <div style={{ backgroundColor: '#856D4D' , backgroundImage: `url(${img1})`}}>
        <div className="ui container"   >
          <SearchBar onSubmit={this.onSearchSubmit} />
          <ImageGridList images={this.state.images} />
        </div>
      </div>
    );
  }
}
