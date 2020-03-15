import React from 'react';
import './App.css';

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

  const scorers = topScorers.map(scorer => {
    return (
      <div style={{ 'display': 'flex', 'justify-content': 'space-between' }}>
        <div style={{ 'width': '50%' }}>{scorer.name}</div>
        <div style={{ 'width': '50%' }}>{scorer.score}</div>
        <br/><br/>
      </div>      
    )
  })

  return (
    <div style={{ 'max-width': '600px', 'margin': '0 auto' }}>
      <h1>Top Scorers</h1>
      <hr />

      <div style={{ 'display': 'flex' }}>
        <div style={{ 'width': '50%' }}><strong>Name</strong></div>
        <div style={{ 'width': '50%' }}><strong>Score</strong></div>
      </div>

      <br/>

      {scorers}

    </div>
  );
}

export default App;
