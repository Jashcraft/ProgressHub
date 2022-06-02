import { Grid, Typography } from '@mui/material';
import * as React from 'react';



const ContactDetails = () => {
    return (
        <Grid display="flex" flexDirection="column" sx={{alignItems: "center", justifyContent: "center", color: "#fce138", fontWeight: "bold", }}>
            <Typography variant='h3' sx={{fontWeight:"bolder"}}>Connect With Us!</Typography>
            <Typography variant='h5'>Email 📧 ProgHub@progresshub.com</Typography>
            <Typography variant='h5'>Address 📍 1337 street</Typography>
            <Typography variant='h5'>Twitter 🐤 @ProgHub</Typography>
            <Typography variant='h5'>Phone 📞 1-800-777-7777</Typography>
        </Grid>
    )
}
export default ContactDetails