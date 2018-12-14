import React, {Component, Fragment} from 'react';
import TodoItem from './TodoItem';

class TodoList extends Component {

    constructor(props) {
        super(props);
        this.state = {
            inputValue: '',
            list: []
        }

        this.handleInputChange = this.handleInputChange.bind(this);
        this.handleBtnClick = this.handleBtnClick.bind(this);
        this.getTodoItem = this.getTodoItem.bind(this);
        this.handleItemDelete = this.handleItemDelete.bind(this);
    }

    render() {
        return (
            <Fragment>
                <div>
                    <label htmlFor="insertArea">输入内容</label>
                    <input
                        id="insertArea"
                        className="input"
                        value={this.state.inputValue}
                        onChange={this.handleInputChange}
                    />
                    <button onClick={this.handleBtnClick}>提交</button>
                </div>
                <ul>

                   {     this.getTodoItem()}

                </ul>
            </Fragment>
        )
    }

    getTodoItem() {
       let abc =  this.state.list.map((item,index)=>(
                <TodoItem
                  key={index}
                  content={item}
                  index={index}
                  deleteItem={this.handleItemDelete}
                />
            )
       )
        return abc;
    }

    handleInputChange(e) {
        const value = e.target.value;
        this.setState({
            inputValue: value
        });
    }

    handleBtnClick() {

        this.setState({
            list: [...this.state.list, this.state.inputValue],
            inputValue: ''
        })
    }

    handleItemDelete(index){
        let tempList = [...this.state.list];
        tempList.splice(index,1);
        this.setState({
            list:tempList
        })
    }
}

export default TodoList;
