import React from 'react';
import {connect} from "react-redux";
import {counterIncrement, counterDecrement} from '../actions/counterActions';
import Counter from "../components/Counter";

class CounterContainer extends React.Component {
    handleOnIncrement() {
        this.props.dispatch(counterIncrement());
    }

    handleOnDecrement() {
        this.props.dispatch(counterDecrement());
    }

    render() {
        const {counter} = this.props;
        console.log(counter);
        return (
            <Counter value={counter} onIncrement={() => this.handleOnIncrement()}
                     onDecrement={() => this.handleOnDecrement()}/>
        )
    }
}

const mapStateToProps = ({counter}) => ({
    counter
});

export default connect(mapStateToProps)(CounterContainer);