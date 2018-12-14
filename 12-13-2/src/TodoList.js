import React, {Component, Fragment} from 'react';
import TodoItem from './TodoItem';
import Test from './Test'

class TodoList extends Component {

    constructor(props) {
        super(props);
        //当组件的state 或者 props 发生改变的时候,render 函数就会重新执行, 子组件的render 函数也会重新执行
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
                <Test content="内容"/>
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
                  test="测试props 的传值校验"
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
        // let tempList = [...this.state.list];
        // tempList.splice(index,1);
        // this.setState({
        //     list:tempList
        // })
        this.setState((prevState) => {
            const list = [...prevState.list];
            list.splice(index,1);
            return {list}
        })



    }
}

export default TodoList;
