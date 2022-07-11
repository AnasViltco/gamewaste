import React from 'react';
import Link from 'next/link';

import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea, Grid } from '@mui/material';

import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';

import AddBoxIcon from '@mui/icons-material/AddBox';

import styles from 'styles/Home.module.css';

const GameCard = ({ item }: any) => {
  const platformsArray = (platform: any) => {
    return platform.split(', ');
  };

  const platform = platformsArray(item.platforms);

  return (
    <div className={styles.card}>
      <Card>
        <CardActionArea>
          <Grid sx={{
            position: 'absolute',
            top: 5,
            left: 2,
            width: '100px',
            backgroundColor: '#000',
            padding: '5px',
            borderRadius: '10px',
            textAlign: 'center',
            color: '#f23f31',
            fontWeight: 'bold'
          }}>{item.type}</Grid>

          <CardMedia
            component="img"
            height="140"
            image={item.image}
            alt="green iguana"
          />
          <CardContent>
            <Typography
              gutterBottom
              variant="subtitle1"
              sx={{ fontWeight: 'bold' }}
            >
              {item.title?.length > 20
                ? item.title.substring(0, 20) + ' ...'
                : item.title}
            </Typography>
            <Stack spacing={2} direction="row" justifyContent="space-between">
              <>
                {item.worth === 'N/A' ? (
                  <span style={{ color: '#f23f31' }}>FREE</span>
                ) : (
                  <span>{item.worth}</span>
                )}
              </>
              <span>
                {platform.slice(0, 2).map((p: any) => (
                  <span
                    key={p}
                    style={{
                      backgroundColor: '#303136',
                      padding: '2px 5px',
                      margin: '3px',
                      borderRadius: '5px',
                    }}
                  >
                    {p}
                  </span>
                ))}
              </span>
            </Stack>
            <Typography
              variant="subtitle2"
              color="text.secondary"
              sx={{ mt: '10px' }}
            >
              {item.description?.length > 50
                ? item.description.substring(0, 50) + ' ...'
                : item.description}
            </Typography>

            <Stack spacing={2} direction="row" sx={{ mt: '10px' }}>
              <AddBoxIcon fontSize="large" />
              <Button variant="outlined" color="error" fullWidth>
                <Link href={`/${item.id}`} >
                  View Detail</Link>
              </Button>
            </Stack>
            <Grid sx={{ mt: '10px' }}>
              <span>{item.users}+ Collected this loot!</span>
            </Grid>
          </CardContent>
        </CardActionArea>
      </Card>
    </div>
  );
};

export default GameCard;
