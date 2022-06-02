import * as React from 'react';
import ContactDetails from './ContactDetails';
import {Grid, Typography} from '@mui/material';



const ContactPage = () => {
    return (
        <Grid container mb={5} spacing={2} className='hero' sx={{ height: '70vh', width: '100%', marginLeft: 0, marginTop: "10px" }}>
            <Grid item xs={6}>
                <Grid display="flex" justifyContent="center" sx={{height: "100%", alignItems:"center"}}>
                    <Grid item>
                        <Typography variant='h3' align='center' sx={{ color: "#fce138", fontWeight: "bolder"}}>
                            Contact Us!
                        </Typography>
                        {/* This section is the company's 'Contact' statement. */}
                        <Typography align='center' sx={{ color: "#fce138", fontWeight: "bold", marginTop: "70px" }}>
                         Lorem ipsum, dolor sit amet consectetur adipisicing elit. Tenetur aliquid veniam distinctio minus ipsa optio asperiores quia doloribus expedita dolor nesciunt porro, impedit
                         voluptatibus recusandae maiores sunt nemo accusantium consequatur?
                        </Typography>
                    </Grid>
                </Grid>
            </Grid>
            <Grid item xs={6}>
                <Grid display="flex" justifyContent="center" flexDirection="column" sx={{alignItems:"center", height: "100%"}}>
                    <ContactDetails/>
                </Grid>
            </Grid>
        </Grid>
    )
}
export default ContactPage