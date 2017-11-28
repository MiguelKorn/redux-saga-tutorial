import React from 'react';
import {connect} from "react-redux";
import {counterIncrement, counterDecrement, counterIncrementAsync} from '../actions/counterActions';
import Counter from "../components/Counter";

class CounterContainer extends React.Component {
    handleOnIncrement() {
        this.props.dispatch(counterIncrement());
    }

    handleOnDecrement() {
        this.props.dispatch(counterDecrement());
    }

    handleOnIncrementAsync() {
        this.props.dispatch(counterIncrementAsync());
    }

    render() {
        const {counter} = this.props;
        console.log(counter);
        return (
            <Counter value={counter} onIncrement={() => this.handleOnIncrement()}
                     onDecrement={() => this.handleOnDecrement()}
                     onIncrementAsync={() => this.handleOnIncrementAsync()}/>
        )
    }
}

const mapStateToProps = ({counter}) => ({
    counter
});

export default connect(mapStateToProps)(CounterContainer);