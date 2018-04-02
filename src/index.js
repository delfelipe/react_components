import React from 'react';
import ReactDOM from 'react-dom';

import SearchBar from './components/search_bar';

const API_KEY = 'AIzaSyDdNdJ6yRQ8yrmjWRtf6DSCSUPkXjHfp48';

const App = () => {
    return (
        <div>
            <SearchBar />
        </div>
    );
};

ReactDOM.render(<App />, document.querySelector('.container'));