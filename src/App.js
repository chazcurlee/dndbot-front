import './App.css';
import { Route, Routes, useNavigate } from 'react-router-dom'
import { useEffect, useMemo, useState } from 'react';
import { Container, Grid, GridDirection, ListItemSecondaryAction } from '@mui/material';
import Home from './pages/Home';
import Forum from './pages/Forum';
import Nav from './components/Nav'
import { Box } from '@mui/material';
import styled from '@emotion/styled';
import Post_Detail from './pages/Post-Detail'
import NewPost from './pages/NewPost'
import Login from './pages/Login'
import { CheckSession } from './services/Auth';
import Landing from './pages/Landing';
import Register from './pages/Register';






const Title = styled.h1`
  margin: 0;
  
`
const DNDLogo = styled.img`
  width: 10vw;
`


const App = () => {
  const [authenticated, toggleAuthenticated] = useState(false)
  const [user, setUser] = useState('')

  const navigate = useNavigate()


  const checkToken = async () => {
    const userChk = await CheckSession()
    setUser(userChk)
    toggleAuthenticated(true)
  }

  const handleLogOut = () => {
    //Reset all auth related state and clear localStorage
    
    setUser(null)
    toggleAuthenticated(false);
    localStorage.clear();
    navigate('/home')
  }

  useEffect(() => {
    const token = localStorage.getItem('token')

    if(token) {
      checkToken()
    }

  }, [])


  return (
    
    <div className='App'>
    
      <Box display="grid" gridTemplateRows='repeat(2, auto)'>

        <Box sx={{
          backgroundColor: 'secondary.main'
        }} gridRow='span 1' display="grid" gridTemplateColumns='3, 1fr'>
          {/* <Container  sx={{
            backgroundColor: 'secondary.main',
            width: '100vw',
            
            textAlign: 'center',
            margin: 0,
          }} disableGutters={true} maxWidth={false} > */}

            {/* <Box > */}

              <Box sx={{
                gridColumnStart: '1'
              }} gridColumn='span 1'>
                <Container sx={{
                  padding: 0
                }}>
                  <Nav 
                  authenticated={authenticated}
                  user={user}
                  handleLogOut={handleLogOut}/>
                </Container>
              </Box>

              <Box sx={{
                gridColumnStart: '2'
              }} gridColumn='span 1'>
                <Container >
                  <DNDLogo alt='DND Logo' src="https://tinyurl.com/2uhtp9yc"/>
                </Container>
              </Box>

              <Box sx={{
                gridColumnStart: '3'
              }} gridColumn='span 1'>
                <Container >
                  <Title>DNDbot</Title>
                </Container>
              </Box>

            {/* </Box> */}
          {/* </Container> */}
        </Box>
        <Box gridRow='span 1' display="grid" gridTemplateColumns='3, auto'>
          < Box sx={{
            backgroundColor: 'background.default',
            height: 'auto', 
            maxwidth: 'sm',
            textAlign: 'center',
            margin: 0,
            padding: 5,
            height: 'auto',
            gridColumnStart: '2',
            height: 'auto'
            
                
          }}disableGutters={true} >

            <Routes>
              <Route path='/' element={<Landing />} />
              <Route path='/home' element={<Home />} />
              <Route path='/forum' element={<Forum />} />
              <Route path='/forum/:id' element={<Post_Detail/>} />
              <Route path='/new-post' element={<NewPost user={user}/>} />
              <Route path='/register' element={<Register />} />
              <Route path='/login' element={<Login 
              authenticated={authenticated}
              toggleAuthenticated={toggleAuthenticated}
              user={user}
              setUser={setUser}/>} />
            </Routes>
              
          </Box>
          <Box sx={{
            gridColumnStart: '3'
          }}></Box>
        </Box>
      </Box>
    </div>
      
    
    
  );
}

export default App;
