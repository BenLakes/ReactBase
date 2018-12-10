import React, {Component, Fragment} from 'react';
import './styles.css';

class TodoList extends Component {
    constructor(props) {
        super(props);
        this.state = {
            inputValue: '',
            list: []
        }
    }

    render() {
        const {inputValue} = this.state;
        return (
            <Fragment>
                <div>
                    {/*for（React htmlFor 替代） 属性规定 label 与哪个表单元素绑定。*/}
                    <label htmlFor="insertArea">输入的内容</label>
                    <input id="insertArea"
                           className="input"
                           value={inputValue}
                           onChange={this.handleInputChange.bind(this)}
                    />
                    <button onClick={this.handleBtnClick.bind(this)}>提交</button>
                </div>
                <ul>
                    {
                        this.state.list.map((item,index) =>{
                            return (
                                <li key={item}
                                    onClick={this.handleItemDelete.bind(this,index)}
                                    dangerouslySetInnerHTML={{__html:item}}
                                ></li>
                            )
                        })
                    }

                </ul>
            </Fragment>
        )
    }

    //输入框输入文字
    handleInputChange(e) {
        this.setState({
            inputValue: e.target.value
        })
    }

    //点击提交按钮
    handleBtnClick() {
      this.setState({
          list:[...this.state.list,this.state.inputValue],
          inputValue:'',
      })
    }

//  删除 li项目
    handleItemDelete(index){
       let tempList = this.state.list;
       tempList.splice(index,1);
       this.setState({
           list:tempList
       })
    }

}

export default TodoList;
