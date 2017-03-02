/**
 * Created by hcz on 2017/2/17.
 */
import React, {Component} from 'react'
import {Input,Radio} from 'antd'
import '../style.scss'
const RadioGroup = Radio.Group;
/***
 * 文档类型for查询配置
 */
class DocEntityForSelect extends Component {
  constructor(props) {
    super(props)
    this.state = {
      value:''
    }
  }
  /*
  * 选择
  */
  onChangeSql(e){
    this.setState({
      value: e.target.value
    })
  }
  render() {
    const radioStyle = {
      display: 'block',
      height: '30px',
      lineHeight: '30px'
    }
    return(
        <div className='check'>
          <div className="clip">
            <RadioGroup style={{display:'inline-block',width:'100px'}} value={this.state.value}  onChange={(e)=>this.onChangeSql(e)}>
              <Radio style={radioStyle} value={1}>FTP
              </Radio>
            </RadioGroup>
            <Input placeholder='请输入详细路径'  style={{display:'inline-block',width:'200px'}}/>
          </div>
        </div>
      )
  }
}
export default DocEntityForSelect
