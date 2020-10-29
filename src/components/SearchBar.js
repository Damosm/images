import React from 'react';

class SearchBar extends React.Component {
  state = { term: '' };

  onFormSubmit = event => {
    event.preventDefault();
    
    this.props.onSubmit(this.state.term);
  };

  render() {
    return (
      <div className="ui segment" style={{ backgroundColor: '#A6A8A7' }} >
        <form onSubmit={this.onFormSubmit} className="ui form">
          <div className="field">
            <label style={{ color: 'white' }}>Recherche</label>
            <input
              type="text"
              value={this.state.term}
              onChange={e => this.setState({ term: e.target.value })}
            />            
          </div>
        </form>
      </div>
    );
  }
}

export default SearchBar;
