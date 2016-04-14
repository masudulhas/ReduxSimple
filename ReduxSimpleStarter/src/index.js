import React from 'react';
import ReactDom from 'react-dom'; // namespace or install library
import SearchBar from './components/search_bar'; //file directory or folder

const API_KEY = 'AIzaSyB5mzPvdv4uMvn5-qgfo-JqN8X26ksUS94'

const App = () => {
  return (
    <div>
    <SearchBar />
    </div>);
}
ReactDom.render(<App />, document.querySelector('.container'));
