import './App.css';
import { Route, Routes } from 'react-router-dom'
import { useMemo, useState } from 'react';
import { Container, Grid, GridDirection } from '@mui/material';
import Home from './pages/Home';
import Forum from './pages/Forum';
import Nav from './components/Nav'
import { Box } from '@mui/material';
import styled from '@emotion/styled';
import Post_Detail from './pages/Post-Detail'
import NewPost from './pages/NewPost'






const Title = styled.h1`
  margin: 0;
  
`
const DNDLogo = styled.img`
  width: 10vw;
`


const App = () => {



  return (
    
    <div>
    
      <Grid container direction={'column'} spacing={2}>

        <Grid item xs={12}>
        <Container sx={{
          backgroundColor: 'secondary.main',
          width: 'auto',
          textAlign: 'center',
          margin: 0,
        }} disableGutters={true} maxWidth={false} >

          <Grid container direction={'row'} columns={3} spacing={3}>

            <Grid item lg={1}>
              <Container sx={{
                padding: 0
              }}>
                <Nav />
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
          height: 1, 
          maxwidth: 'sm',
          textAlign: 'center',
          margin: 0,
          padding: 5
              
        }}>

          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/forum' element={<Forum />} />
            <Route path='/forum/:id' element={<Post_Detail/>} />
            <Route path='/new-post' element={<NewPost />} />
          </Routes>
            
        </Box>
        </Grid>
      </Grid>
    </div>
      
    
    
  );
}

export default App;
