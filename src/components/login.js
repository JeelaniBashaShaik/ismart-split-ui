import React from 'react';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';

export default class Login extends React.Component {

    state = {
        email: '',
        password: ''
    }

setEmail = (event) => {
console.log(event.target.value);
}

    render() {
        return (
            <div>
                    <TextField
            id="standard-required"
            label="Email"
            margin="normal"
            onChange={this.setEmail}
            value={this.state.email}
            
        />
                 <Button variant="contained" color="primary">
        Login
      </Button>
            </div>
        )
    }
}