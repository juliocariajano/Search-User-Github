import React, {Fragment} from "react";
import {Stack, Typography} from "@mui/material";
import PaperInformation from "../../components/PaperInformation";
import LocationInformation from "../../components/LocationInformation"

const Description = (props)=>{
    const {userState} = props;
    const {bio} = userState
    
    console.log(userState)
    return (
        <Fragment>
            <Stack sx={{justifyContent:'center'}}>
                {bio!=null?
                <Typography variant="body1">{bio}</Typography>
                :<Typography variant="body1">
                Perfil inicial, ingrese un perfil a buscar de Github para poder conocer sus opciones
            </Typography>

                }
                
            </Stack>
            <PaperInformation userState={userState}/>
            <LocationInformation userState={userState}/>
        </Fragment>
    )
}

export default Description;