import React, {Component} from 'react';

//**1st method
// const SearchBar = () => {
//   return <input />;
// };
//**2nd method class
//error handling
// class SearchBar extends Component{
//   render(){
//     return <input onChange={event => console.log(event.target.value)} />;
//   }
// }
//**event handling
//   render(){
//     return <input onChange={this.onInputChange} />;
//   }
//
//   onInputChange(event){
//     console.log(event.target.value);
//   }
// }
//**State
// class SearchBar extends Component{
//   constructor(props){
//     super(props);
//
//     this.state = {term: ''};
//   }
//   render(){
//     return(
//       <div>
//       <input onChange = {event => this.setState({ term: event.target.value })}/>
//       value of the input: {this.state.term}
//       </div>
//     );
//   }
// }
// export default SearchBar;
//Controlled Component
class SearchBar extends Component{
  constructor(props){
    super(props);

    this.state = {term: ''};
  }
  render(){
    return(
      <div className="search-bar">
      <input
      value = {this.state.term}
      onChange = {event => this.setState({ term: event.target.value })}/>

      </div>
    );
  }
}
export default SearchBar;
//finish
