import { useState } from "react";
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import AppStoreLogin from "../../mobx/AppStoreLogin";
import Alert from '@mui/material/Alert';
import AlertTitle from '@mui/material/AlertTitle';
import AppStoreAdmin from "../../mobx/AppStoreAdmin";

export default function Login() {

  const [name,setName]=useState('');
  const [password,setPassword]=useState('');
  const [isError,setIsError]=useState(false);

  const handleLogin =async()=>
  {
    const response = await fetch("http://localhost:8787/login", {
      method: "POST",
      body:JSON.stringify({
        name,password
      }),
      headers:{
        "Content-Type": "application/json",
      },
    });
    console.log("data: ",response.data)
    if(response.status===200){
      AppStoreLogin.setIsLogin(true);
      AppStoreAdmin.setIsAdmin(true);
    }
    else{
       setIsError(true);
    }
  }
return(
    <>
    <div>
    <TextField
          required
          id="outlined-required"
          label="name"
          onChange={(e)=>setName(e.target.value)}
        />
    <TextField
          id="outlined-password-input"
          label="Password"
          type="password"
          autoComplete="current-password"
          onChange={(e)=>setPassword(e.target.value)}
        />

        <br/>
    <Button variant="outlined" onClick={handleLogin}>Login</Button>

    </div>
    {isError&&      
        <Alert severity="error">
        <AlertTitle>Error</AlertTitle>
        The name or password is not valid — <strong>check it out!</strong>
        </Alert>}
    </>
)

}