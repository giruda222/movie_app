import React from 'react';
import PropTypes from 'prop-types';

class App extends React.Component {
    state = {
        count: 0
    };

    add = () => {
        this.setState(current => ({ count: current.count + 1 }));
    };

    minus = () => {
        this.setState(current => ({ count: current.count - 1 }));
    };

    render() {
        return <div>
            <h1>num: {this.state.count}</h1>
            <button onClick={this.add}>ADD</button>
            <button onClick={this.minus}>MINUS</button>
        </div>;
    }
}

export default App;
