import React, {Component, Fragment} from 'react';
import TodoItem from './TodoItem';
import Test from './Test'

class TodoList extends Component {

    constructor(props) {
        super(props);
        //ref 指向 DOM 元素
        this.state = {
            inputValue: '',
            list: []
        }

        this.handleInputChange = this.handleInputChange.bind(this);
        this.handleBtnClick = this.handleBtnClick.bind(this);
        this.getTodoItem = this.getTodoItem.bind(this);
        this.handleItemDelete = this.handleItemDelete.bind(this);
    }

    // Mount (ComponentWillMount -> render -> ComponentDidMount)
    //在组件即将被挂在到页面的时候 自动执行  hook 生命周期函数
    componentWillMount() {
        console.log("componentWillMount");
    }

    componentDidMount() {
        console.log("componentDidMount");
    }

    // updating() (shouldComponentUpdate -> componentWillUpdate -> render -> componentDidUpdate)
    //组件被更新之前,他会自动被执行
    shouldComponentUpdate() {
        console.log("shouldComponentUpdate");
        return true
    }

    //组件在钩子shouldComponentUpdate被允许更新之后，会自动执行
    componentWillUpdate() {
        console.log('componentWillUpdate');
    }
    //组件更新完成之后,他会被执行
    componentDidUpdate() {
       console.log('componentDidUpdate');
    }

    //unMount()


    render() {
        console.log("Parent render");
        return (
            <Fragment>
                <div>
                    <label htmlFor="insertArea">输入内容</label>
                    <input
                        id="insertArea"
                        className="input"
                        value={this.state.inputValue}
                        onChange={this.handleInputChange}
                        ref={(input) => {
                            this.input = input
                        }}
                    />
                    <button onClick={this.handleBtnClick}>提交</button>
                </div>
                <ul ref={(ul) => {
                    this.ul = ul
                }}>
                    {this.getTodoItem()}
                </ul>
            </Fragment>
        )
    }

    getTodoItem() {
        let abc = this.state.list.map((item, index) => (
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
        // const value = e.target.value;
        const value = this.input.value;
        this.setState({
            inputValue: value
        });
    }

    handleBtnClick() {
        //setState 跟新是异步的,所以会延时执行
        // this.setState({
        //     list: [...this.state.list, this.state.inputValue],
        //     inputValue: ''
        // })
        this.setState((prevState) => ({
            list: [...prevState.list, prevState.inputValue],
            inputValue: ''
        }), () => {
            console.log(this.ul.querySelectorAll('div').length);
        })

        console.log("这种处理方式会有不同步的问题出现", this.ul.querySelectorAll('div').length)
    }

    handleItemDelete(index) {
        // let tempList = [...this.state.list];
        // tempList.splice(index,1);
        // this.setState({
        //     list:tempList
        // })
        this.setState((prevState) => {
            const list = [...prevState.list];
            list.splice(index, 1);
            return {list}
        })


    }
}

export default TodoList;
