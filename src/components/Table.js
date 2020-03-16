import React from 'react'
import TableHeader from './TableHeader'
import TableBody from './TableBody'

function Table(props) {
    return (
      <>
        <TableHeader />
        <TableBody topScorers={props.topScorers} />
      </>  
    )
}

export default Table