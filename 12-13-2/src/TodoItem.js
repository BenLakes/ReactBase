import React, {Component} from 'react'

import PropTpes from 'prop-types'

class TodoItem extends Component {
    constructor(props) {
        super(props);
        this.deleteItem1 = this.deleteItem1.bind(this);
    }

    render() {
        const {content, test} = this.props;
        return (
            <div onClick={this.deleteItem1}>
                {test}——{content}
            </div>
        )
    }

    deleteItem1() {
        const {deleteItem, index} = this.props;
        deleteItem(index);
    }
}

//处理接受到的props 的校验
TodoItem.propTypes = {
    test:PropTpes.string.isRequired,
    content:PropTpes.string,
    deleteItem:PropTpes.func,
    index:PropTpes.number
}
TodoItem.defaultProps = {
  test:'hello world'
}

export default TodoItem;
