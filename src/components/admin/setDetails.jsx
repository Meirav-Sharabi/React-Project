import { useState } from "react";
import AppStoreAdmin from "../../mobx/AppStoreAdmin"
import { observer } from "mobx-react";
import TextField from '@mui/material/TextField';
import { Button } from "@mui/material";

const SetDetails= observer(()=>{

    const[name,setName]=useState("");
    const[address, setAddress]=useState("");
    const[phone, setPhone]=useState("");
    const[owner, setOwner]=useState("");
    const[logo, setLogo]=useState("");
    const[description, setDescription]=useState("");

    const handleSubmit = async (e) => {
        AppStoreAdmin.setEnableButton(false)
        e.preventDefault();
        AppStoreAdmin.updateBusiness({ name, address, phone, owner, logo, description})
        AppStoreAdmin.setIsSet(false);
      }

    return(
        <>
        {/* valid */}
            <form onSubmit={handleSubmit}>
               <TextField id="filled-basic" label="Name" variant="filled" onChange={(e)=>setName(e.target.value)} />
               <br/>
               <TextField id="filled-basic" label="Address" variant="filled" onChange={(e)=>setAddress(e.target.value)}/>
               <br/>
               <TextField id="filled-basic" label="Phone" variant="filled" onChange={(e)=>setPhone(e.target.value)}/>
               <br/>
               <TextField id="filled-basic" label="Owner" variant="filled" onChange={(e)=>setOwner(e.target.value)}/>
               <br/>
               <TextField id="filled-basic" label="Logo" variant="filled" onChange={(e)=>setLogo(e.target.value)}/>
               <br/>
               <TextField id="filled-basic" label="Description" variant="filled" onChange={(e)=>setDescription(e.target.value)}/>
               <br/>
               <Button variant="outlined" type="submit">
                Save
               </Button>
            </form>
        </>
    )
})
export default SetDetails