import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import Avatar from '@material-ui/core/Avatar';
import Breadcrumbs from '@material-ui/core/Breadcrumbs';
import Link from '@material-ui/core/Link';
import NavigateNextIcon from '@material-ui/icons/NavigateNext';
import Button from '@material-ui/core/Button';
import SendIcon from '@material-ui/icons/Send';
import Container from '@material-ui/core/Container';


const useStyles = makeStyles((theme) => ({
  container: {
    display: 'grid',
    gridTemplateColumns: 'repeat(12, 1fr)',
    gridGap: theme.spacing(3),
  },
  paper: {
    padding: theme.spacing(1),
    textAlign: 'center',
    color: theme.palette.text.secondary,
    whiteSpace: 'nowrap',
    marginBottom: theme.spacing(1),
  },
  root: {
    display: 'flex',
    '& > *': {
      margin: theme.spacing(1),
    },
  },
  large: {
    width: theme.spacing(12),
    height: theme.spacing(12),
  },
  button: {
    margin: theme.spacing(1),
  }
}));

function handleClick(event) {
  event.preventDefault();
  console.info('You clicked a breadcrumb.');
}

export default function CSSGrid() {
  const classes = useStyles();

  return (
    <div>
      <Breadcrumbs separator={<NavigateNextIcon fontSize="small" />} aria-label="breadcrumb">
        <Link color="inherit" href="/" onClick={handleClick}>Colegio Geek</Link>
        <Link color="inherit" href="/getting-started/installation/" onClick={handleClick}>Inicio</Link>
        <Typography color="textPrimary">Directivos</Typography>
      </Breadcrumbs>

      <Grid container spacing={3}>
        <Grid item xs={12} sm={4}>
          <Paper className={classes.paper}>
            <div className={classes.root}>
              <Avatar alt="Remy Sharp" src="/static/images/avatar/1.jpg" className={classes.large} />
            </div>
            <Container maxWidth="sm">
              <Typography component="div" style={{ backgroundColor: '#cfe8fc' }} >
                Welcome Camilo
              </Typography>
              <Typography component="div" style={{ backgroundColor: '#cfe8fc' }} >
                Cargo: Rector
              </Typography>
              <Typography component="div" style={{ backgroundColor: '#cfe8fc' }} >
                Edad: 50
              </Typography>
            </Container>
            <div>
              <Button
                variant="contained"
                color="primary"
                className={classes.button}
                endIcon={<SendIcon />}
              >
                Cerrar Sesión
              </Button>
            </div>
          </Paper>
        </Grid>
        <Grid item xs={12} sm={8}>
          <Paper className={classes.paper}>xs=8</Paper>
        </Grid>
      </Grid>
    </div>
  );
}
