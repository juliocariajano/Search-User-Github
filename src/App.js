//import logo from './logo.svg';
import './App.css';
import React, { useEffect } from 'react'
//import CssBaseline from '@mui/material/CssBaseline';
//import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Search from './components/Search';
import UseCard from './containers';
import {useState} from 'react'
import {gitHubUsers} from "./services/users"

const App =()=> {
  const [inputUser, setInputUser]= useState('octocat');
  const [userState, setUserState]= useState('inputUser');
  const [notFound, setNotFound]= useState(false)

const gettingUser= async (user)=>{
const userResponse = await gitHubUsers(user)


if(userResponse.message=== 'octocat'){
  localStorage.setItem('octocat', userResponse)
}

if(userResponse.message === 'Not Found'){
  const {octocat} = localStorage;
  setInputUser(octocat);
  setNotFound(true);
}else{
  setUserState(userResponse)
}
}
console.log("setUserState",setUserState)
console.log("useStater",userState)
useEffect(()=>{
  gettingUser(inputUser)
  },[inputUser])


  return (
    <React.Fragment>
      {/* <CssBaseline /> */}
      <Container sx={{
        background: 'whitesmoke',
        width:'80vw',
        height: '500px',
        borderRadius:"16px",
        marginTop:"30px",
        display:"flex",
        flexDirection:"column",
        alignItems:"center"   
      }}>
        {/* <Box sx={{ bgcolor: '#cfe8fc', height: '100vh' }} >*/}

          {/* </Box> */}
        <Search 
        inputUser={inputUser} 
        setInputUser={setInputUser}/>
        <UseCard userState={userState} />        
      </Container>
    </React.Fragment>
  );
}

export default App;

