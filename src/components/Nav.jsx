import React from 'react';
import clsx from 'clsx';
import  styled  from '@emotion/styled';
import Drawer from '@mui/material/Drawer';
import Button from '@mui/material/Button';
import List from '@mui/material/List';
import Divider from '@mui/material/Divider';
import ListItem from '@mui/material/ListItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import InboxIcon from '@mui/icons-material/MoveToInbox';
import MailIcon from '@mui/icons-material/Mail';
import { Link } from 'react-router-dom';
import { useState } from 'react';
import { Box, Container, useTheme } from '@mui/material';
import  DensityMediumRoundedIcon from '@mui/icons-material/DensityMediumRounded';
import HomeIcon from '@mui/icons-material/Home';
import ForumIcon from '@mui/icons-material/Forum';
import { color } from '@mui/system';




const MenuWrapper = styled.div`
    backgroundColor: ${props => props.theme.palette.background.menu}
`




export default function TemporaryDrawer() {
  const theme = useTheme()
  const [state, setState] = useState(false);

  const toggleDrawer = (open) => (event) => {
    if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
      return;
    }

    setState(open);
  };

  const list = (theme) => (
    <MenuWrapper
      theme={theme}
      role="presentation"
      onClick={toggleDrawer(false)}
      onKeyDown={toggleDrawer(false)}
    >
    <Box sx={{
        backgroundColor: 'background.menu',
        color: 'text.menu',
        height: '100%',
        width: '100%',
        textAlign: 'center'
    }}>
      <List>
        <ListItem >
            <ListItemIcon><HomeIcon/></ListItemIcon>
            <ListItemText ><Link to='/home'>Home</Link></ListItemText>
        </ListItem>
        <ListItem>
            <ListItemIcon><ForumIcon/></ListItemIcon>
            <ListItemText ><Link to='/forum'>Forum</Link></ListItemText>
        </ListItem>
        <ListItem>
            {/* <ListItemIcon><ForumIcon/></ListItemIcon> */}
            <ListItemText ><Link to='/new-post'>New Post</Link></ListItemText>
        </ListItem>
        <ListItem>
            {/* <ListItemIcon><ForumIcon/></ListItemIcon> */}
            <ListItemText ><Link to='/register'>Register</Link></ListItemText>
        </ListItem>
      </List>
      
    </Box>
    </MenuWrapper>
  );

const MenuButton = styled(Button)`
  
  

`
  
  return (
    <div>
      
        
          <MenuButton variant='contained' color='primary' onClick={toggleDrawer(true)} ><DensityMediumRoundedIcon/></MenuButton>
          <Drawer anchor='top' theme={theme} open={state} onClose={toggleDrawer(false)}>
            <div>{list(theme)}</div>
          </Drawer>
        
    </div>
  );
}