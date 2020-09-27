import { Container } from '@material-ui/core';
import React from 'react';
import { hot } from 'react-hot-loader';
import Counter from './Counter';
import Header from './Header';

const App = () => {
  return (
    <div>
      <Header />
      <Container>
        <Counter />
      </Container>
    </div>
  );
};

export default hot(module)(App);
