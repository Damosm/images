import React from 'react';

export default class SearchBar extends React.Component {

  constructor(props){
    super(props);

    this.state = { term: '' };

    this.onchange = this.onChange.bind(this);
  }
  

  onClick = event => {
    event.preventDefault();

    this.props.onSubmit(this.state.term);
  };

  onChange = event => {    
    this.setState({ term: event.target.value })
  };

  render() {
    return (      
      <div >
        <form className="input-group input-group-lg" onSubmit={this.onClick}>
        <input type="text" value={this.state.term}  onChange={this.onChange} class="form-control" placeholder="Recherche" aria-label="Recipient's username" aria-describedby="basic-addon2" />
          <div className="input-group-append">
          <button onClick={this.onClick}  class="btn btn-outline-secondary" style={{backgroundColor:"#A7A37E" ,color:"white"}} type="button">Valider</button>
        </div>
        </form>
      </div>
    );
  }
}

