import { Grid, Divider, Typography, Container, Card, CardMedia } from '@mui/material'
import React from 'react'
import Link from 'next/link';

import Dashboard from '../dashboard'
import WarningIcon from '@mui/icons-material/Warning';
import GroupsIcon from '@mui/icons-material/Groups';

import Button from '@mui/material/Button';

import styles from 'styles/Home.module.css';

const SingleDetail = ({ data }: any) => {
    console.log(data)

    if (!data) return (<Grid sx={{ textAlign: 'center' }}>
        <div className={styles.SingleDetailHeading}>
            <Typography
                variant="subtitle2"
                color="text.secondary"
                sx={{ mt: '10px' }}
            >
                OPS! there is no data against that record ...
            </Typography>
        </div>
    </Grid>)

    const platformsArray = (platforms: any) => {
        return platforms.split(', ');
    };

    const platform = platformsArray(data.platforms);


    return (
        <div>
            <Container maxWidth="lg" sx={{ m: '20px 0', padding: '10px' }}>
                <Grid container>
                    <Grid item lg={8} md={12}>
                        <Grid container>
                            <Grid item md={4} sm={6} xs={12}>
                                <CardMedia
                                    component="img"
                                    height="140"
                                    image={data.image}
                                    alt="green iguana"
                                />
                            </Grid>
                            <Grid item md={8} sm={6} sx={{ p: '10px' }}>
                                <Grid>
                                    <Typography variant="h6" color="text.secondary">
                                        {data.title}
                                    </Typography>
                                </Grid>
                                <Grid container sx={{ margin: '5px 0' }}>
                                    <Grid>
                                        <Typography
                                            variant="subtitle2"
                                            color="text.secondary"
                                        >
                                            {data.type}
                                        </Typography>
                                    </Grid>
                                    <Divider
                                        orientation="vertical"
                                        flexItem
                                        sx={{ m: ' 0 10px' }}
                                    />
                                    <Grid>
                                        {platform.slice(0, 2).map((p: any) => (
                                            <span
                                                key={p}
                                                style={{
                                                    backgroundColor: '#7a8288',
                                                    padding: '1px 5px',
                                                    margin: '3px',
                                                    borderRadius: '5px',
                                                    fontWeight: 'bold'
                                                }}
                                            >
                                                {p}
                                            </span>
                                        ))}
                                    </Grid>
                                </Grid>
                                <Grid>
                                    {data.worth === 'N/A' ? (
                                        <Typography variant="body1" style={{ color: '#f23f31', fontWeight: 'bold' }}>
                                            FREE
                                        </Typography>
                                    ) : (
                                        <Typography variant="body1" color="text.secondary">
                                            {data.worth}
                                        </Typography>
                                    )}
                                </Grid>
                            </Grid>
                        </Grid>
                        <Divider sx={{ mt: '10px' }} />
                        <Typography
                            variant="subtitle1"
                            color="text.secondary"
                            sx={{ mt: '10px' }}
                        >

                            {data.description}
                        </Typography>
                        <Grid sx={{ mt: '10px', pb: '20px' }}>
                            <Typography
                                variant="h6"
                                color="text.secondary"
                            >
                                Instructions
                            </Typography>
                            <Typography
                                variant="subtitle1"
                                color="text.secondary"
                            >
                                1. Login into your Alienwarearena account and click the button to unlock your key.
                            </Typography>
                            <Typography
                                variant="subtitle1"
                                color="text.secondary"
                            >
                                2. Follow the giveaway instructions to redeem your key.
                            </Typography>
                        </Grid>
                    </Grid>
                    <Grid item lg={4} md={12} sx={{ textAlign: 'center' }}>
                        <Grid container spacing={1}>
                            <Grid item sm={6}>
                                <Card sx={{ p: '10px' }}><Grid><WarningIcon /></Grid>Limited time</Card>
                            </Grid>
                            <Grid item sm={6}><Card sx={{ p: '10px' }}><Grid><GroupsIcon /></Grid>{data.users}+ Collected</Card></Grid>
                            <Grid item sm={12}>
                                <Card sx={{ p: '20px' }}>
                                    <Container >
                                        {/* sas */}
                                        <Grid sx={{ mt: "10px" }}>
                                            <Button variant="contained" fullWidth color="error">
                                                <Link href={'https://www.sega60th.com/register'}>
                                                    Get GiveAway
                                                </Link>
                                            </Button>
                                        </Grid>
                                        <Grid sx={{ mt: "10px" }}>
                                            <Button variant="outlined" fullWidth color="warning">
                                                Add to collection
                                            </Button>
                                        </Grid>
                                    </Container>
                                </Card>
                            </Grid>
                            <Grid item sm={12}>
                                <Card >
                                    <Grid container sx={{ margin: '20px 0' }}>
                                        <Grid item sm={6}>
                                            <Button color="inherit">
                                                Share with friends
                                            </Button>
                                        </Grid>
                                        <Divider orientation="vertical" flexItem />
                                        <Grid item sm={5}>
                                            <Button color="inherit">
                                                Report Expired
                                            </Button>
                                        </Grid>
                                    </Grid>
                                </Card>
                            </Grid>
                        </Grid>
                    </Grid>
                </Grid>
            </Container>
            <Grid>
                <Divider />
                <div className={styles.SingleDetailHeading}>
                    <Typography
                        variant="subtitle2"
                        color="text.secondary"
                        sx={{ mt: '10px' }}
                    >
                        Giveaways you might like
                    </Typography>
                </div>

                <Dashboard />
            </Grid>
        </div>
    )
}

export default SingleDetail