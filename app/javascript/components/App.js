import React from "react";
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Greeting from './Greeting';
import { Provider } from 'react-redux';
import store from '../configureStore';

class App extends React.Component {
  render () {
    return (
      <Provider store={store}>
        <BrowserRouter>
          <Routes>
            <Route exact path="/" element={(<h2>Greetings!</h2>)} />
            <Route exact path="greetings" element={<Greeting/>} />
          </Routes>
        </BrowserRouter>
      </Provider>
    );
  }
}

export default App
