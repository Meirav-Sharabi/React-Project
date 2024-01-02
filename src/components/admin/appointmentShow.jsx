import * as React from 'react';
import Card from '@mui/joy/Card';
import CardContent from '@mui/joy/CardContent';
import Typography from '@mui/joy/Typography';
import PunchClockSharpIcon from '@mui/icons-material/PunchClockSharp';
import './appointmentShow.css'

export default function AppointmentShow({ props, color }) {
    console.log("AppointMent", props);
    return (
        <div className='appointment'>
        <Card
            variant="outlined"
            orientation="horizontal"
            sx={{
                width: 300,
                color: color,
                backgroundColor: 'white',
                position: 'relative',
                marginBottom: 2,
                border: '1px solid rgba(0, 0, 0, 0.1)',
                borderRadius: '0px',
                fontFamily: 'Arial, sans-serif',
                '&:hover': { boxShadow: 'md', borderColor: 'neutral.outlinedHoverBorder' },
            }}>
            <CardContent>
                <Typography level="body-sm" aria-describedby="card-description" mb={1}>
                    <b>serviceType :</b>{props.serviceType}
                </Typography>
                <Typography level="body-sm" aria-describedby="card-description" mb={1}>
                    <b>dateTime :</b>{props.dateTime}
                </Typography>
                <Typography level="body-sm" aria-describedby="card-description" mb={1}>
                    <b>clientName :</b>{props.clientName}
                </Typography>
                <Typography level="body-sm" aria-describedby="card-description" mb={1}>
                    <b>clientPhone :</b>{props.clientPhone}
                </Typography>
                <Typography level="body-sm" aria-describedby="card-description" mb={1}>
                    <b>clientEmail :</b>{props.clientPhone}
                </Typography>
            </CardContent>
                 <PunchClockSharpIcon/>
        </Card>
</div>
    )
}