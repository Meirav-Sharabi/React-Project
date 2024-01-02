import AppStoreAdmin from "../../mobx/AppStoreAdmin"
import { observer } from "mobx-react";
import TextField from '@mui/material/TextField';
import { Button } from "@mui/material";
import { useForm } from 'react-hook-form'
import * as React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import Fab from '@mui/material/Fab';
import AddIcon from '@mui/icons-material/Add';




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
const AddService = observer(() => {

    const { handleSubmit, register, formState: { errors } } = useForm()

    const [open, setOpen] = React.useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

    function SaveChanges(data) {
        AppStoreAdmin.addService(data)
        AppStoreAdmin.setIsNewService(false)
        handleClose();
    }
    return (
        <>
            {AppStoreAdmin.isAdmin && <Button onClick={handleOpen}>
                <Fab color="primary" aria-label="add" sx={{ backgroundColor: 'green', '&:hover': { backgroundColor: 'green' } }}>
                    <AddIcon />
                </Fab></Button>}
            <Modal
                open={open}
                onClose={handleClose}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
            >
                <Box sx={style} style={{ border: 'gray' }}>
                    <Typography id="modal-modal-title" variant="h6" component="h2">
                        Add Servise
                    </Typography>
                    <Typography id="modal-modal-description" sx={{ mt: 2 }}>
                        <form onSubmit={handleSubmit(SaveChanges)} >
                            <br />
                            <TextField id="filled-basic" label="name" variant="filled"
                                {...register("name", { required: true })} />
                            {
                                errors.name && <p> name is required</p>
                            }
                            <br />
                            <TextField id="filled-basic" label="description" variant="filled"
                                {...register("description", { required: true })} />
                            {
                                errors.description && <p> Description is required</p>
                            }
                            <br />
                            <TextField id="filled-basic" label="price" variant="filled"
                                {...register("price", { required: true })} />
                            {
                                errors.price && <p> Price is required</p>
                            }
                            <br />
                            <TextField id="filled-basic" label="duration" variant="filled"
                                {...register("duration", { required: true })} />
                            {
                                errors.duration && <p> Duration is required</p>
                            }
                            <br />
                            <Button
                            
                                variant="outlined"
                                type="submit"
                                sx={{
                                    color: 'white',  
                                    backgroundColor: 'green',  
                                    '&:hover': {
                                        backgroundColor: 'darkgreen',
                                    },
                                }}
                            >
                                save
                            </Button>
                        </form>
                    </Typography>
                </Box>
            </Modal>
        </>
    )
})
export default AddService;