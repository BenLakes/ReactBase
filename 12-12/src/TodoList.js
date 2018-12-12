import React,{Component, Fragment} from 'react';
import TodoItem from './TodoItem';
import './style.css';

class TodoList extends Component {

    constructor(props){
        super(props);

        this.state = {
            inputValue:'',
            list:[]
        }
    }

    render(){
        return(
            <Fragment>
                <div>
                    <label htmlFor="insertArea">输入内容</label>
                    <input
                      id="insertArea"
                      className="input"
                      value={this.state.inputValue}
                      onChange={this.handleInputChange.bind(this)}
                    />
                    <button onClick={this.handleBtnClick.bind(this)}>提交</button>
                </div>
                <ul>
                    {
                        this.state.list.map((item,index) => {
                            return (
                                <TodoItem
                                    key={index}
                                    content={item}
                                    index={index}
                                    deleteItem={this.handleItemDelete.bind(this)}
                                />
                            )
                        })
                    }
                </ul>
            </Fragment>
        )
    }

    handleInputChange(e){
    //    e 可以获取整个Input元素
        this.setState({
            inputValue:e.target.value
        })
    }
    handleBtnClick(){
        this.setState({
            list:[...this.state.list, this.state.inputValue],
            inputValue:''
        })
    }

    handleItemDelete(index){
        const list = [...this.state.list];
        list.splice(index,1);
        this.setState({
            list:list
        })
    }
}

export default TodoList;

