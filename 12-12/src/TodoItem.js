import React, {Component} from 'react'

class TodoItem extends Component {
    constructor(props) {
        super(props);

    }

    render(){
        return(
          <div onClick={this.handleClick.bind(this)}>
              {this.props.content}
          </div>
        );
    }
    handleClick(){
    // 触发父组件的方法，删除内容
        this.props.deleteItem(this.props.index);
    }
}

export default TodoItem;
