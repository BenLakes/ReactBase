import React, {Component, Fragment} from 'react';
import {CSSTransition} from 'react-transition-group'
import './style.css';

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            show: true
        }

    }

    render() {
        return (
            <Fragment>
                <CSSTransition
                    in={this.state.show}
                    timeout={1000}
                    classNames='fade'
                    unmountOnExit
                    appear = {true}
                >
                    <div>hello</div>
                </CSSTransition>

                <button onClick={() => this.handleToggle()}>toggle</button>
            </Fragment>
        )
    }

    handleToggle() {
        this.setState({
            show: !this.state.show
        })
    }
}

export default App;
