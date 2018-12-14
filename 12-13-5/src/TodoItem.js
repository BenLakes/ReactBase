import React, {Component} from 'react'

import PropTypes from 'prop-types'

class TodoItem extends Component {
    constructor(props) {
        super(props);
        this.deleteItem1 = this.deleteItem1.bind(this);
    }


    componentWillMount(){
      console.log('TodoItem---componentWillMount');
    }
    componentDidMount(){
        console.log('TodoItem---componentDidMount');
    }
    shouldComponentUpdate(){
        console.log('TodoItem---shouldComponentUpdate');
        return true;
    }
    componentWillUpdate(){
        console.log('TodoItem---componentWillUpdate');
    }
    componentDidUpdate(){
        console.log('TodoItem---componentDidUpdate');
    }

    //一个组件要从父组件接受参数,
    //第一次创建该组件该函数不会执行
    //如果这个组件之前已经存在于父组件中,后续props又有更新，才会执行
    componentWillReceiveProps(){
        console.log('TodoItem---componentWillReceiveProps');
    }
    componentWillUnmount(){
        console.log('TodoItem---componentWillUnmount');

    }


    render() {
        console.log('TodoItem----render');
        const {content, test} = this.props;
        return (
            // JSX -> createElement -> 虚拟DOM (JS对象) -> 真实DOM
            // 原本 return <div><span>item</span></div>
            // React.createElement("div",{},React.createElement('span',{},'item'))
            <div onClick={this.deleteItem1}>{content}</div>
        )
    }

    deleteItem1() {
        const {deleteItem, index} = this.props;
        deleteItem(index);
    }
}

//处理接受到的props 的校验
TodoItem.propTypes = {
    test: PropTypes.string.isRequired,
    content: PropTypes.string,
    deleteItem: PropTypes.func,
    index: PropTypes.number
}
TodoItem.defaultProps = {
    test: 'hello world'
}

export default TodoItem;
