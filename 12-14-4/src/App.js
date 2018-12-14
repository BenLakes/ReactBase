import React, {Component, Fragment} from 'react';
import {CSSTransition, TransitionGroup} from 'react-transition-group'
import './style.css';

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            list: []
        }

    }

    render() {
        return (
            <Fragment>
                <TransitionGroup>
                    {
                        this.state.list.map((item, index) => {
                            return (
                                <CSSTransition
                                    timeout={1000}
                                    classNames='fade'
                                    unmountOnExit
                                    appear={true}
                                    key={index}
                                    onEntered={(el) => {
                                        el.style.color = "yellow"
                                    }}
                                >
                                    <div>{item}</div>
                                </CSSTransition>

                            )
                        })
                    }
                </TransitionGroup>
                <button onClick={() => this.handleToggle()}>toggle</button>
            </Fragment>
        )
    }

    handleToggle() {
        this.setState((preState) => {
            return {
                list: [...preState.list, "item"]
            }
        })
    }
}

export default App;
