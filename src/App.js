import React, {Component, Fragment} from 'react';
import './App.css';
import Userlist from './Userlist';
import Post from './Post';
import Tags from './Tags';
import FullProfile from './Fullprofile'
import Nav from './Nav'
import FullTags from './Fulltags'
import {BrowserRouter as Router, Switch, Route, Link} from "react-router-dom";
import Aboutus from './Aboutus';
import {Container, Grid} from '@material-ui/core'


class App extends Component {
    state = {
        showComponent: true
    }

   

    render() {
        return (
           
           
           <div className="coverall"> 
            <Container id="alertPopUp"  maxWidth="sm">
                <Grid container spacing={3}>
                    <Grid item xs={12}>
                    <Router>
                        <Fragment>
                            <div className="header">
                                <Link to="/">
                                <div className="web-name">
                                    <p>C+gram</p>
                                </div>
                                </Link>
                                <div className="navigation">
                                    <Nav></Nav>
                                </div>
                            </div>
                            <Switch>
                            <Route path="/" exact component={Post}/>
                            <Route path="/Post" exact component={Post}/>
                            <Route path="/Userlist" exact component={Userlist}/>
                            <Route path="/Tags" exact component={Tags} />
                            <Route path="/Aboutus" exact component={Aboutus} />
                            <Route path="/Userlist/:id" component={FullProfile} />
                            <Route path="/Tags/:name" component={FullTags} />
                            
                            </Switch>
                        </Fragment>
                    </Router>
                    </Grid>
                </Grid>
            </Container>
            </div>
           
        )
    }
}

export default App;
