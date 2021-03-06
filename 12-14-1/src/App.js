import React, {Component, Fragment} from 'react';
import './style.css';

class App extends Component {
    constructor(props){
        super(props);
        this.state = {
            show:true
        }

    }

    render(){
        return (
            <Fragment>
                <div className={this.state.show?"show":"hide"}>hello</div>
                <button onClick={()=>this.handleToggle()}>toggle</button>
            </Fragment>
        )
    }

    handleToggle(){
        this.setState({
            show:!this.state.show
        })
    }
}

export default App;
