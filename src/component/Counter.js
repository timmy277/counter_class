import { Button } from '@mui/material';
import React, { Component } from 'react';

class Counter extends Component {
    constructor(props) {
        super(props);
        this.state = {
            counter: 0
        };
    }

    increment = () => {
        this.setState(prevState => ({
            counter: prevState.counter + 1
        }));
    };

    decrement = () => {
        this.setState(prevState => ({
            counter: prevState.counter - 1
        }));
    };

    render() {
        return (
            <div className="flex items-center justify-center mx-auto mt-28">
                <Button onClick={this.decrement} variant="contained" color="primary" sx={{ margin: 1 }}>-</Button>
                <h1 className='text-3xl text-red-500'>{this.state.counter}</h1>
                <Button onClick={this.increment} variant="contained" color="primary" sx={{ margin: 1 }}>+</Button>
            </div>
        );
    }
}

export default Counter;
