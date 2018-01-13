import React, {Component} from 'react';
import {BrowserRouter, Route} from 'react-router-dom';
import darkBaseTheme from 'material-ui/styles/baseThemes/darkBaseTheme';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import Paper from 'material-ui/Paper';

import BikeList from './BikeList'
import BikeAdd from './BikeAdd'
import Dashboard from './Dashboard'
import Favourites from './Favourites'
import BikeDetails from "./BikeDetails"
import AppBar from './AppBar'
import SideBar from './SideBar'
import BottomNavBar from './BottomNavBar'

import './index.css'


class App extends Component {

    state = {
        isDrawerOpen: false,
        menuElements: [
            ['Home','/'],
            ['Bikes List','/bike-list'],
            ['Add New Bike','/bike-add'],
            ['Fav Bikes','/bike-favourites'],
            ['Bike Details', '/bike-details']
        ]
    }

    drawerToggle = () => {
        this.setState({
            isDrawerOpen: !this.state.isDrawerOpen
        })
    }

    render() {
        return (
            <MuiThemeProvider muiTheme={getMuiTheme(darkBaseTheme)}>
                <BrowserRouter>
                    <Paper zDepth={2}>
                        <AppBar butt={this.drawerToggle}/>
                        <SideBar
                            isOpen={this.state.isDrawerOpen}
                            butt={this.drawerToggle}
                            menuElements={this.state.menuElements}/>

                        <Route path="/" exact={true} component={Dashboard}/>
                        <Route path="/bike-list" component={BikeList}/>
                        <Route path="/bike-favourites" component={Favourites}/>
                        <Route path="/bike-add" component={BikeAdd}/>
                        <Route path="/bike-details" component={BikeDetails}/>
                        <BottomNavBar/>
                    </Paper>
                </BrowserRouter>
            </MuiThemeProvider>

        );
    }
}

export default App;
