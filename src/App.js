import './App.css';
import { Route, Routes, useNavigate } from 'react-router-dom'
import { useMemo, useState } from 'react';
import { Container, Grid, GridDirection } from '@mui/material';
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


  return (
    
    <div >
    
      <Grid container direction={'column'} spacing={2}>

        <Grid item xs={12}>
          <Container sx={{
            backgroundColor: 'secondary.main',
            width: '100vw',
            
            textAlign: 'center',
            margin: 0,
          }} disableGutters={true} maxWidth={false} >

            <Grid container direction={'row'} columns={3} spacing={3}>

              <Grid item lg={1}>
                <Container sx={{
                  padding: 0
                }}>
                  <Nav 
                  authenticated={authenticated}
                  user={user}
                  handleLogOut={handleLogOut}/>
                </Container>
              </Grid>

              <Grid item lg={1}>
                <Container >
                  <DNDLogo alt='DND Logo' src="https://tinyurl.com/2uhtp9yc"/>
                </Container>
              </Grid>

              <Grid item lg={1}>
                <Container >
                  <Title>DNDbot</Title>
                </Container>
              </Grid>

            </Grid>
          </Container>
        </Grid>
        <Grid item xs={20}>
        < Box sx={{
          backgroundColor: 'background.default',
          height: 'auto', 
          maxwidth: 'sm',
          textAlign: 'center',
          margin: 0,
          padding: 5,
          height: 'auto'
          
              
        }}disableGutters={true}>

          <Routes>
            <Route path='/' element={<Landing />} />
            <Route path='/home' element={<Home />} />
            <Route path='/forum' element={<Forum />} />
            <Route path='/forum/:id' element={<Post_Detail/>} />
            <Route path='/new-post' element={<NewPost />} />
            <Route path='/register' element={<Register />} />
            <Route path='/login' element={<Login 
            authenticated={authenticated}
            toggleAuthenticated={toggleAuthenticated}
            user={user}
            setUser={setUser}/>} />
          </Routes>
            
        </Box>
        </Grid>
      </Grid>
    </div>
      
    
    
  );
}

export default App;
