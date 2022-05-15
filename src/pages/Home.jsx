import React from "react";
import styled from "@emotion/styled";
import { useTheme } from "@emotion/react";
import { textAlign } from "@mui/system";
import { Card, CardActionArea, CardHeader } from "@mui/material";
import { useNavigate } from "react-router-dom";
import ForumOutlinedIcon from '@mui/icons-material/ForumOutlined';
import LoginIcon from '@mui/icons-material/Login';
import HowToRegIcon from '@mui/icons-material/HowToReg';
import SmartToyOutlinedIcon from '@mui/icons-material/SmartToyOutlined';


const Header = styled.h1`
    color: ${props => props.theme.palette.text.primary};
    margin: 0;

`

const BodyText = styled.p`
    color: ${props => props.theme.palette.text.primary};
    

`


const Home = () => {
    const navigate = useNavigate()
    const theme = useTheme()


    return (
        <div>
            <Header >Home</Header>
            <Card sx={{margin: '10px'}}>
                <CardActionArea onClick={()=>navigate('/login')}> 
                    <LoginIcon fontSize="large"/>
                    <CardHeader title='Login'></CardHeader>
                    
                </CardActionArea>
            </Card>
            <Card sx={{margin: '10px'}}>
                <CardActionArea onClick={()=>navigate('/register')}> <CardHeader title='Register'></CardHeader> 
                
                </CardActionArea>
            </Card>
            <Card sx={{margin: '10px'}}>
                <CardActionArea onClick={()=>navigate('/forum')}> <CardHeader title='Forums'></CardHeader> 
                
                </CardActionArea>
            </Card>
            <Card sx={{margin: '10px'}}>
                {/* <CardActionArea onClick={()=>navigate('/bot')}>Bot</CardActionArea> */}
            </Card>
        </div>
    )

}

export default Home