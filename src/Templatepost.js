import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import Avatar from '@material-ui/core/Avatar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import { red } from '@material-ui/core/colors';
import FavoriteIcon from '@material-ui/icons/Favorite';
import {Link} from 'react-router-dom'
import './Templatepost.css';


const useStyles = makeStyles((theme) => ({
  root: {
    maxWidth: 345,
  },
  media: {
    height: 0,
    paddingTop: '56.25%', // 16:9
  },
  expand: {
    transform: 'rotate(0deg)',
    marginLeft: 'auto',
    transition: theme.transitions.create('transform', {
      duration: theme.transitions.duration.shortest,
    }),
  },
  expandOpen: {
    transform: 'rotate(180deg)',
  },
  avatar: {
    backgroundColor: red[500],
  },
}));

function Templatepost(props) {
  
  
  const classes = useStyles();
  


  return (
      <div className="card">
          <Card className={classes.root} id="card">
      
      <Link to={`/Userlist/${props.id}`}> 
      <CardHeader
        avatar={
          <Avatar aria-label="recipe" className={classes.avatar}>
            <img src={props.picture} />
          </Avatar>
        }
        title={props.fullName} //masukin yang nama owner
        
      />
      </Link>
      <CardMedia
        className={classes.media}
        image={props.image} // masukin yang image post
        title="img-post"
      />
      <CardContent>
        <Typography variant="body1" color="textPrimary" component="p">
          {props.text}
        </Typography>
        
      </CardContent>
      <CardActions disableSpacing>
        <IconButton aria-label="add to favorites">
          <FavoriteIcon />
        </IconButton>
        <p>{props.likes}</p>
      </CardActions>
    </Card>
      </div>
  );
}

export default Templatepost;