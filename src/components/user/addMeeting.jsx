import { observer } from "mobx-react";
import TextField from '@mui/material/TextField';
import { Button } from "@mui/material";
import AppStoreAdmin from "../../mobx/AppStoreAdmin";
import * as React from 'react';
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import { useState, useEffect } from "react";
import MyDatePicker from './MyDatePicker';
import SendIcon from '@mui/icons-material/Send';
import Typography from '@mui/material/Typography';
import Fab from '@mui/material/Fab';
import AddIcon from '@mui/icons-material/Add';
import Modal from '@mui/material/Modal';

const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    p: 4,
};
const AddMeeting = observer(() => {
    const [open, setOpen] = React.useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);
    const [service, setService] = useState({
        serviceType: "",
        dateTime: "",
        clientName: "",
        clientPhone: "",
        clientEmail: "",
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setService({
            ...service,
            [name]: value,
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        await AppStoreAdmin.addMeeting(service)
        handleClose();
    }

    return (
        <>
            <Button onClick={handleOpen}>
                <Fab color="primary" aria-label="add" sx={{ backgroundColor: 'green', '&:hover': { backgroundColor: 'green' } }}>
                    <AddIcon />
                </Fab></Button>
            <Modal
                open={open}
                onClose={handleClose}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
            >
                <Box sx={style} style={{ border: 'gray' }}>
                    <Typography id="modal-modal-title" variant="h6" component="h2">
                        make an appointment
                    </Typography>
                    <Typography id="modal-modal-description" sx={{ mt: 2 }}>
                        <form onSubmit={handleSubmit}>
                            <Box sx={{ minWidth: 120 }}>
                                <FormControl fullWidth>
                                    <InputLabel id="demo-simple-select-label">select service</InputLabel>
                                    <Select
                                        labelId="demo-simple-select-label"
                                        id="demo-simple-select"
                                        name="serviceType"
                                        value={service.serviceType}
                                        onChange={handleChange}
                                    >
                                        {console.log("list service:", AppStoreAdmin.listServices)}
                                        {AppStoreAdmin.listServices.map((s, index) =>
                                            <MenuItem value={s.name} key={index}>{s.name}</MenuItem>)

                                        }
                                    </Select>
                                </FormControl>
                            </Box>
                            <MyDatePicker
                                name="dateTime"
                                onChange={(data) => {
                                    setService((prevService) => ({
                                        ...prevService,
                                        dateTime: data,
                                    }));
                                }} />
                            <TextField fullWidth name="clientName" label="Client name" value={service.clientName} onChange={handleChange} />
                            <TextField fullWidth name="clientPhone" label="Client phone" onChange={handleChange} />
                            <TextField fullWidth type='email' name="clientEmail" label="Client email"  onChange={handleChange} value={service.clientEmail} />
                            <Button fullWidth type="submit" variant="contained" endIcon={<SendIcon />} > Send </Button>

                        </form>

                    </Typography>
                </Box>
            </Modal>

        </>
    )
})
export default AddMeeting;