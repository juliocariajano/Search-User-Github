//import { Description } from '@mui/icons-material';
import { CardMedia, Grid, Stack } from '@mui/material';
import React from 'react'
import PrincipalInformation from '../../components/PrincipalInformation'
import Description from '../Description'

const UseCard=(props)=>{
const {userState}= props;
const {avatar_url}=userState;
return (
    <Grid 
    container 
    spacing={2}
    sx={{
        marginTop:"15px"
    }}
    >
        <Grid item xs={3}>
            <CardMedia
            component="img"
            alt="GitHub User"
            image={avatar_url}
            sx={{
                borderRadius:"50%",
                marginLeft:"7px"
                
            }}
            />

        </Grid>
        <Grid item xs={9}>
        <Stack
        direction="column"
        spacing={1}
        sx={{ margin: '30px'}}
        >
        <PrincipalInformation userState={userState} />
        <Description userState={userState} />
        
        </Stack>
        
        </Grid>
               
         </Grid >
)


}


export default UseCard;