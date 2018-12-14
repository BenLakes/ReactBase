import React, {Component} from 'react'

import PropTypes from 'prop-types'

class TodoItem extends Component {
    constructor(props) {
        super(props);
        this.deleteItem1 = this.deleteItem1.bind(this);
    }

    render() {
        const {content, test} = this.props;
        return (
           // JSX -> createElement -> 虚拟DOM (JS对象) -> 真实DOM
           // 原本 return <div><span>item</span></div>
           React.createElement("div",{},React.createElement('span',{},'item'))
        )
    }

    deleteItem1() {
        const {deleteItem, index} = this.props;
        deleteItem(index);
    }
}

//处理接受到的props 的校验
TodoItem.propTypes = {
    test:PropTypes.string.isRequired,
    content:PropTypes.arrayOf(PropTypes.number,PropTypes.string),
    deleteItem:PropTypes.func,
    index:PropTypes.number
}
TodoItem.defaultProps = {
  test:'hello world'
}

export default TodoItem;
