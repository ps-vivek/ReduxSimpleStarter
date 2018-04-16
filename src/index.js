import React from 'react';
import ReactDOM from 'react-dom';
import SearchBar from './components/search_bar'
const API_KEY = 'AIzaSyDOgp0o0Amp6nCAuvFsTQF0SZwnqdskpUA';
//Create a new component. This component should produce some HTML
const App = () => {
  return <div><SearchBar /></div>;
}
//Take generated HTML and put it on the page(DOM)
ReactDOM.render(<App/>,document.querySelector('.container'));
