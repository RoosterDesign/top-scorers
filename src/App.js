import React from 'react';
import Table from './components/Table'
import styled from 'styled-components'

function App() {

  const topScorers = [
    {
      name: 'Neil',
      score: 5
    }, {
      name: 'John',
      score: 3
    }, {
      name: 'Bob',
      score: 2
    }
  ]

  const PageWrap = styled.div`
    margin: 0 auto;  
    max-width: 600px;
  `

  return (
    <PageWrap>
      <h1>Top Scorers</h1>
      <hr />
      <Table topScorers={topScorers} />
    </PageWrap>
  );
}

export default App;
