import React, {Component} from 'react';
import Avatar from 'material-ui/Avatar';
import {List, ListItem} from 'material-ui/List';
import Subheader from 'material-ui/Subheader';
import Divider from 'material-ui/Divider';
import ActionFavorite from 'material-ui/svg-icons/action/favorite';

class BikeList extends Component {
    render() {
        return (
            <div>
                <Divider />
                <List>
                    <Subheader>Famous Old Monsters</Subheader>
                    <ListItem
                        primaryText="Ducati Monster M750"
                        leftAvatar={<Avatar src="./img/m750.jpg" />}
                        rightIcon={<ActionFavorite />}
                    />
                    <ListItem
                        primaryText="Ducati Monster M900"
                        leftAvatar={<Avatar src="./img/m900.jpg" />}
                        rightIcon={<ActionFavorite />}
                    />
                    <ListItem
                        primaryText="Ducati Monster 1000"
                        leftAvatar={<Avatar src="./img/m1000.jpg" />}
                        rightIcon={<ActionFavorite />}
                    />
                    <ListItem
                        primaryText="Ducati Monster S2R"
                        leftAvatar={<Avatar src="./img/ms2r.jpg" />}
                        rightIcon={<ActionFavorite />}
                    />
                    <ListItem
                        primaryText="Ducati Monster S4RS"
                        leftAvatar={<Avatar src="./img/ms4rs.jpg" />}
                        rightIcon={<ActionFavorite />}
                    />
                </List>
                </div>
        )
    }
}

export default BikeList