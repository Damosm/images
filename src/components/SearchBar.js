import React from 'react';

class SearchBar extends React.Component {
  state = { term: '' };

  onClick = event => {
    event.preventDefault();

    this.props.onSubmit(this.state.term);
  };

  onChange = event => {    
    this.setState({ term: event.target.value })
  };

  render() {
    return (      
      <div class="input-group mb-3">
        <input type="text" value={this.state.term} onChange={this.onChange} class="form-control" placeholder="Recherche" aria-label="Recipient's username" aria-describedby="basic-addon2" />
        <div class="input-group-append">
          <button onClick={this.onClick} class="btn btn-outline-secondary" type="button">Valider</button>
        </div>
      </div>
    );
  }
}

export default SearchBar;
