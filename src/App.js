import React, { useState } from 'react'
import styled from 'styled-components'
//import Modal from 'modal-styled-react'
import Modal from './component/index'
import { GlobalStyle } from './globalStyles'

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
`
const Button = styled.button`
  min-width: 100px;
  padding: 16px 32px;
  border-radius: 4px;
  border: none;
  background: #141414;
  color: #fff;
  font-size: 24px;
  cursor: pointer;
`

function App() {

  const [viewModal, setViewModal] = useState(false)

  const handleClickButton = () => { 
    setViewModal(prev => !prev)      
  }

  return (
    <>
      <Container>
        <Button onClick={handleClickButton}>Click Me !</Button>
        <Modal 
          viewModal={viewModal}
          setViewModal={setViewModal}
          dialogTitle = "{This is the place for title}"
          dialogDescription = "{This is the place for description}"
          returnTo = "/"
        />
        <GlobalStyle/>
      </Container>
    </>
  )
}

export default App
