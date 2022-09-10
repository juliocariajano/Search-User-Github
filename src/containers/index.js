//import { Description } from '@mui/icons-material';
import { CardMedia, Grid } from '@mui/material';
import React from 'react'
import PrincipalInformation from '../components/PrincipalInformation'
import Description from './../containers/Description'

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
                borderRadius:"50%"
            }}
            />

        </Grid>
        <Grid item xs={9}>
        <PrincipalInformation userState={userState} />
        </Grid>
        <Description userState={userState} />
               
         </Grid >
)


}


export default UseCard;