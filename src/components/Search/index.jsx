import React from 'react'
import { IconButton, Stack, TextField } from '@mui/material'
import ManageSearchIcon from '@mui/icons-material/ManageSearch';
import { useState } from 'react';

const Search = (props ) => {
const { setInputUser}= props;

const [valueInput, setValueInput]= useState('')

const onSearchValueChange=(e)=>{
    const inputValue= e.target.value
    setValueInput(inputValue)
}
console.log("valueInput", valueInput)
const handleSubmit=()=>{
setInputUser(valueInput)

 }
 
    return(
    <Stack 
    direction= "row"
    sx={{
        marginTop:"30px",
        width:"80%"
    }}
    
    >
    <TextField id="outlined-basic" 
    label="GitHub User" 
    variant="outlined"
    placeholder='Buscar Usuario GitHub'
    variant="outlined"
    size="small"
    value={valueInput}
    onChange={onSearchValueChange}
    sx={{
        width:"90%",

    }}
    
    >

    </TextField>
    <IconButton 
    onClick={handleSubmit}
    size='small'
    sx={{
        left:"-45px",
        
    }}
    >
    <ManageSearchIcon/>
    </IconButton>
 </Stack>

 )
}

export default Search;