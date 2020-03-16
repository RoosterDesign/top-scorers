import React from 'react'
import styled from 'styled-components'

function TableHeader() {

    const TableHead = styled.div`
        display: flex;
    `

    const Cell = styled.div`
        padding: 20px;    
        text-align: center;
        width: 50%:
    `

    return (
        <TableHead style={{ 'display': 'flex' }}>
          <Cell style={{ 'width': '50%' }}><strong>Name</strong></Cell>
          <Cell style={{ 'width': '50%' }}><strong>Score</strong></Cell>
        </TableHead>
    )
}

export default TableHeader
