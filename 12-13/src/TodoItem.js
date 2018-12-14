import React, {Component} from 'react'

class TodoItem extends Component {
    constructor(props) {
        super(props);
        this.deleteItem1 = this.deleteItem1.bind(this);
    }

    render() {
        const {content} = this.props;
        return (
            <div onClick={this.deleteItem1}>
                {content}
            </div>
        )
    }

    deleteItem1() {
        const {deleteItem, index} = this.props;
        deleteItem(index);
    }
}

export default TodoItem;
