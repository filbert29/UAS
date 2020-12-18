import React from 'react';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import {Link} from 'react-router-dom';
import './Templatetags.css'


export default function MediaCard(props) {

  return (
   <div className="cover"> 
    
      <Link to={`/Tags/${props.tagsname}`}>
      <CardActionArea>
        <CardContent>
          <Typography className="tag" gutterBottom variant="h5" component="h2">
            {props.tags}
          </Typography>
          
        </CardContent>
      </CardActionArea>
      <CardActions>
        {/* <Button size="small" color="primary">
          Get Post by Tags
        </Button> */}
      </CardActions>
      </Link>
    
    </div>
  );
}
