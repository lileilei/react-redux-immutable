/**
 * Created by czh on 2016/10/28.
 */
import React, {Component} from 'react'
import {connect} from 'react-redux'
import {Modal,Radio,Input} from 'antd';
import file from '../assets/file.png';
import last from '../assets/last.png';
import unforword from '../assets/unforword.png';
import unPrevious from '../assets/unPrevious.png';
import Previous from '../assets/Previous.png';
import '../style.scss'
const RadioButton = Radio.Button;
const RadioGroup = Radio.Group;

export default class patNameLiat extends Component {
  constructor(props) {
    super(props)
  }
  
  onChange(e) {
    console.log(`radio checked:${e.target.value}`);
  }
  
  render() {
    return (
      <div className="patName" style={{display:this.props.visible=='onClick3'?'block':'none'}}>
        <div className="title">
          <img src={last} style={{width:'18px'}}/>
          <img src={unforword} style={{width:'18px'}}/>
          <img src={unPrevious} style={{width:'26px'}}/>
          <Input placeholder="ftp://192.168.99.12.software" style={{width: '260px'}}/>
        </div>
        <div className="list clearfix">
          <div className="list-item">
            <img src={file}/>
            <span>患者姓名</span>
          </div>
          <div className="list-item">
            <img src={file}/>
            <span>患者姓名</span>
          </div>
          <div className="list-item">
            <img src={file}/>
            <span>患者姓名</span>
          </div>
          <div className="list-item">
            <img src={file}/>
            <span>患者姓名</span>
          </div>
          <div className="list-item">
            <img src={file}/>
            <span>患者姓名</span>
          </div>
        </div>
      </div>
    )
  }
}