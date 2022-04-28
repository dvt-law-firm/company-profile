import { Grid, Toolbar, Typography } from '@mui/material';
import React from 'react';
import logo from 'assets/dvt-logo-transparant.png';
import cover from 'assets/wonderful-indonesia.webp';

function Home() {
  return (
    <Grid
      // className="App"
      // maxWidth="md"
      sx={{
        // backgroundColor: 'green',
        width: '100%',
      }}
      container
    >
      <Grid
        item
        container
        sx={{
          backgroundColor: 'whitesmoke',
          width: '100%',
        }}
      >
        <Grid item xs={12}>
          <Toolbar disableGutters>
            <Grid
              container
              justifyContent={'flex-start'}
              sx={{
                // backgroundColor: 'blue',
                // borderBottom: '1px solid DimGray',
              }}
              height={90}
            >
              <Grid
                item
                xs={4}
                sx={{
                  width: 140,
                  height: 70,
                }}
              >
                <img
                  src={logo}
                  style={{
                    width: 140,
                    height: 70,
                  }}
                />
              </Grid>

              <Grid item container xs={8}>
                <Grid
                  item
                  xs={4}
                  container
                  direction="row"
                  justifyContent="center"
                  alignItems="center"
                >
                  <Grid item>
                    <Typography fontWeight={600}>Home</Typography>
                  </Grid>
                </Grid>
                <Grid
                  item
                  xs={4}
                  container
                  direction="row"
                  justifyContent="center"
                  alignItems="center"
                >
                  <Grid item>
                    <Typography fontWeight={600}>About Us</Typography>
                  </Grid>
                </Grid>
                <Grid
                  item
                  xs={4}
                  container
                  direction="row"
                  justifyContent="center"
                  alignItems="center"
                >
                  <Grid item>
                    <Typography fontWeight={600}>Services</Typography>
                  </Grid>
                </Grid>
              </Grid>
            </Grid>
          </Toolbar>
        </Grid>
      </Grid>
      <Grid
        item
        container
        sx={{
          // backgroundColor: 'green',
          width: '100%',
        }}
      >
        <Grid item container>
          <img
            src={cover}
            style={{
              width: '100%',
              height: '100%',
            }}
          />
        </Grid>
      </Grid>
      <Grid
        item
        container
        sx={{
          // backgroundColor: 'green',
          width: '100%',
        }}
        padding={3}
      >
        <Grid item>
          <Typography fontWeight={600} fontSize={24}>
            About Us
          </Typography>
        </Grid>
        <Grid item padding={3}>
          <Typography fontSize={18} align={'left'}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat tempora fugit alias odit facilis consequuntur necessitatibus aspernatur ab labore, cumque iure! Sequi vero fugiat aut, quia debitis molestias temporibus nulla.
          </Typography>
        </Grid>
      </Grid>
    </Grid>
  );
}

export default Home;
