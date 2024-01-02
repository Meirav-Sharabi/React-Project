import * as React from 'react';
import Card from '@mui/joy/Card';
import CardContent from '@mui/joy/CardContent';
import Typography from '@mui/joy/Typography';
import './serviceShow.css'
import IconButton from '@mui/material/IconButton';
import FavoriteIcon from '@mui/icons-material/Favorite';
import ShareIcon from '@mui/icons-material/Share';
import CardActions from '@mui/material/CardActions';
import ThumbUpOffAltIcon from '@mui/icons-material/ThumbUpOffAlt';

export default function ServiceShow({ props }) {
    console.log("propsp", props);
    return (
        <div className='service'>
            <Card
                variant="outlined"
                orientation="horizontal"
                sx={{
                    width: 300,
                    color: 'green',
                    backgroundColor: 'white',
                    position: 'relative',
                    marginBottom: 2,
                    border: '1px solid rgba(0, 0, 0, 0.1)',
                    borderRadius: '0px',
                    marginTop: '50px',
                    fontFamily: 'Arial, sans-serif',
                    '&:hover': { boxShadow: 'md', borderColor: 'neutral.outlinedHoverBorder' },
                }}>
                <CardContent>
                    <div id="service">
                        <Typography level="body-sm" aria-describedby="card-description" mb={1} id="s">
                            <b>Name :</b> {props.name}
                        </Typography>
                        <Typography level="body-sm" aria-describedby="card-description" mb={1} id="s">
                            <b>Description :</b> {props.description}
                        </Typography>
                        <Typography level="body-sm" aria-describedby="card-description" mb={1}id="s">
                            <b>Price :</b> {props.price}
                        </Typography>
                        <Typography level="body-sm" aria-describedby="card-description" mb={1}id="s">
                            <b>Duration :</b>  {props.duration}
                        </Typography>


                    </div>
                    <CardActions disableSpacing style={{ justifyContent: 'center', flexDirection: 'row' }}>
                        <IconButton aria-label="add to favorites">
                            <FavoriteIcon />
                        </IconButton>
                        <IconButton aria-label="share">
                            <ShareIcon />
                        </IconButton>
                    </CardActions>

                </CardContent>
                <ThumbUpOffAltIcon />
            </Card>
        </div>
    )
}