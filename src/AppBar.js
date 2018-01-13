import React, {Component} from 'react';
import MuiAppBar from 'material-ui/AppBar'

class AppBar extends Component {
    render() {
        return (
            <MuiAppBar
                title="Always Red Bike"
                onLeftIconButtonClick={this.props.butt}
                style={{backgroundColor:'#D32F2F'}}
            />
        )
    }
}

export default AppBar