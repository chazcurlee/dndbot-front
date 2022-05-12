import React from "react";
import styled from "@emotion/styled";
import { useTheme } from "@emotion/react";
import { textAlign } from "@mui/system";


const Header = styled.h1`
    color: ${props => props.theme.palette.text.primary};
    margin: 0;

`

const BodyText = styled.p`
    color: ${props => props.theme.palette.text.primary};
    

`


const Home = () => {
    


    return (
        <div>
            <Header >Home</Header>
            <BodyText>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Libero volutpat sed cras ornare. Non quam lacus suspendisse faucibus. Ipsum dolor sit amet consectetur adipiscing. Sodales ut etiam sit amet nisl purus in mollis nunc. Risus ultricies tristique nulla aliquet enim tortor at auctor urna. Pretium quam vulputate dignissim suspendisse in est ante. Consequat interdum varius sit amet mattis vulputate enim. Nunc pulvinar sapien et ligula ullamcorper malesuada proin libero. Leo urna molestie at elementum eu facilisis sed. Sit amet dictum sit amet justo donec enim. <br /><br />

Pulvinar pellentesque habitant morbi tristique senectus. Suscipit adipiscing bibendum est ultricies integer quis auctor elit sed. Eget lorem dolor sed viverra ipsum nunc aliquet bibendum. Laoreet sit amet cursus sit amet dictum sit. Lorem ipsum dolor sit amet consectetur. Viverra nam libero justo laoreet sit amet cursus sit amet. Nibh praesent tristique magna sit amet purus gravida quis blandit. Sem integer vitae justo eget magna fermentum iaculis eu non. Eget dolor morbi non arcu risus. Sit amet consectetur adipiscing elit. Malesuada pellentesque elit eget gravida cum sociis natoque penatibus. Volutpat lacus laoreet non curabitur. Mi ipsum faucibus vitae aliquet.<br /><br />

A lacus vestibulum sed arcu. Mi proin sed libero enim sed faucibus turpis. At volutpat diam ut venenatis. Blandit volutpat maecenas volutpat blandit aliquam etiam erat velit scelerisque. Bibendum arcu vitae elementum curabitur vitae nunc sed velit. Cras tincidunt lobortis feugiat vivamus at augue eget arcu. Tristique magna sit amet purus gravida quis blandit. Lectus arcu bibendum at varius vel pharetra. Mattis ullamcorper velit sed ullamcorper morbi tincidunt ornare massa. Dolor sit amet consectetur adipiscing elit duis. Quis lectus nulla at volutpat diam ut.<br /><br />

In hendrerit gravida rutrum quisque non tellus orci. Convallis convallis tellus id interdum velit laoreet id donec. Tristique senectus et netus et. Enim sed faucibus turpis in eu mi bibendum neque egestas. Quis imperdiet massa tincidunt nunc pulvinar sapien. Mauris cursus mattis molestie a iaculis at erat pellentesque. Convallis a cras semper auctor. Adipiscing enim eu turpis egestas pretium aenean pharetra magna. Ullamcorper malesuada proin libero nunc consequat. Diam in arcu cursus euismod quis. Dignissim convallis aenean et tortor at risus.<br /><br />

Ut sem viverra aliquet eget. Semper feugiat nibh sed pulvinar proin. Sed vulputate mi sit amet mauris commodo quis. Vitae suscipit tellus mauris a diam maecenas sed. Nunc aliquet bibendum enim facilisis gravida neque convallis a cras. Elit eget gravida cum sociis natoque penatibus et. Purus sit amet volutpat consequat mauris nunc congue nisi vitae. Ut lectus arcu bibendum at varius vel pharetra vel. In hac habitasse platea dictumst quisque sagittis. Egestas diam in arcu cursus euismod quis viverra nibh. Sociis natoque penatibus et magnis. Quam lacus suspendisse faucibus interdum. Scelerisque mauris pellentesque pulvinar pellentesque. Porta non pulvinar neque laoreet suspendisse interdum consectetur libero id. Habitasse platea dictumst vestibulum rhoncus est pellentesque elit ullamcorper. Ultrices mi tempus imperdiet nulla malesuada pellentesque elit eget gravida.<br /><br /></BodyText>
        </div>
    )

}

export default Home