import AppStoreAdmin from "../../mobx/AppStoreAdmin"
import { observer } from "mobx-react";
import * as React from 'react';
import AspectRatio from '@mui/joy/AspectRatio';
import Card from '@mui/joy/Card';
import CardContent from '@mui/joy/CardContent';
import Typography from '@mui/joy/Typography';
import Fab from '@mui/material/Fab';
import EditIcon from '@mui/icons-material/Edit';
import './showCardDetails.css'

const ShowCardDetails = observer(() => {

    const handleEdit = () => {
        AppStoreAdmin.setIsSet(true)
        AppStoreAdmin.setEnableButton(true)
    }
    return (
        <>

            <div className="business-details">
                <Card
                    variant="outlined"
                    orientation="horizontal"
                    sx={{
                        width: 300,
                        height: 220,
                        backgroundColor: 'white',
                        position: 'relative',
                        marginBottom: 2,
                        border: '0.5px solid rgba(0, 0, 0, 0.1)',
                        borderRadius: '0px',
                        fontFamily: 'Arial, sans-serif',
                        '&:hover': { boxShadow: 'md', borderColor: 'neutral.outlinedHoverBorder' },
                    }}>


                    <CardContent>
                        <Typography level="body-sm" aria-describedby="card-description" mb={1} sx={{ fontSize: '1.2rem' }}>
                            name:{AppStoreAdmin.business.name}
                        </Typography>
                        <Typography level="body-sm" aria-describedby="card-description" mb={1} sx={{ fontSize: '1.2rem' }}>
                            address: {AppStoreAdmin.business.address}
                        </Typography>
                        <Typography level="body-sm" aria-describedby="card-description" mb={1} sx={{ fontSize: '1.2rem' }}>
                            phone: {AppStoreAdmin.business.phone}
                        </Typography>
                        <Typography level="body-sm" aria-describedby="card-description" mb={1} sx={{ fontSize: '1.2rem' }}>
                            owner: {AppStoreAdmin.business.owner}
                        </Typography>
                        <Typography level="body-sm" aria-describedby="card-description" mb={1} sx={{ fontSize: '1.2rem' }}>
                            description: {AppStoreAdmin.business.description}
                        </Typography>
                    </CardContent>
                    <AspectRatio ratio="1" sx={{ width: 90 }}>
                        <img src={AppStoreAdmin.business.logo} />
                    </AspectRatio>
                </Card>                    
                {AppStoreAdmin.isAdmin && <Fab color="secondary" aria-label="edit" onClick={handleEdit}  style={{
                backgroundColor: 'green',
                position: 'absolute',
                bottom: 20, 
                right: 20, 
            }}>
                    <EditIcon />
                </Fab>}
            </div>

        </>
    )
})
export default ShowCardDetails
