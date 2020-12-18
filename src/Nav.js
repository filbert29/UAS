import React from 'react'
import { makeStyles } from '@material-ui/core/styles';
import SvgIcon from '@material-ui/core/SvgIcon';
import ExploreIcon from '@material-ui/icons/Explore';
import WhatshotIcon from '@material-ui/icons/Whatshot';
import InfoIcon from '@material-ui/icons/Info';
import {Link} from 'react-router-dom'
import './App.css'


const useStyles = makeStyles((theme) => ({
    root: {
      '& > svg': {
        margin: theme.spacing(2),
      },
    },
  }));

  function HomeIcon(props) {
    return (
      <SvgIcon {...props}>
        <path d="M10 20v-6h4v6h5v-8h3L12 3 2 12h3v8z" />
      </SvgIcon>
    );
  }
  

function Nav() {
    const classes = useStyles();

    return (
        <nav>
            <ul className={classes.root}>
                <div className="navigation">
                  <Link to='/Post'>
                  <HomeIcon className="homeicon" fontSize="large" ></HomeIcon>
                  </Link>

                  <Link to='/Userlist'>
                  <ExploreIcon className="exploreicon" fontSize="large" ></ExploreIcon>
                  </Link>

                  <Link to='/Tags'>
                  <WhatshotIcon className="whatshoticon" fontSize="large" ></WhatshotIcon>
                  </Link>

                 

                  <Link to='/Aboutus'>
                  <InfoIcon className="infoicon" fontSize="large" ></InfoIcon>
                  </Link>
                </div>
            </ul>
        </nav>
    )
}

export default Nav
