import React from 'react'
import Container from '../../Container/Container'
import TopSide from './TopSide/TopSide';
import BottomSide from './BottomSide/BottomSide';

const Account = () => {
  return (
    <Container>
      <div className="container">
        <TopSide/>
        <BottomSide/>
      </div>
    </Container>
  )
}

export default Account