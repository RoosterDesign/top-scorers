import React from 'react'
import styled from 'styled-components'

function TableRow(props) {

    const Row = styled.div`
        display: flex;
        justify-content: space-between;

        &:nth-child(even) {
            background: #eee;
        }
    `

    const Cell = styled.div`
        padding: 20px;
        text-align: center;
        width: 50%;
    `

    const rows = props.topScorers.map( (scorer, i) => {
        return (
            <Row key={i}>
                <Cell>{scorer.name}</Cell>
                <Cell>{scorer.score}</Cell>
            </Row>     
        )
      })    

    return (
        <>
            {rows}
        </>
    )
}

export default TableRow