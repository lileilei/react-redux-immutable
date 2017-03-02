/**
 * Created by Administrator on 2016/12/14.
 */
import React,{Component} from 'react'
import {connect} from 'react-redux'
import {Form, Button, Input, Radio, Modal,Select,Icon,Table,AutoComplete } from 'antd';

import '../style.scss';
// import '../../../../../../node_modules/react-highlight/node_modules/highlight.js/styles';
import 'react-highlight/node_modules/highlight.js/styles/github.css'
var Highlight = require('react-highlight');
// import Highlight from 'react-highlight'


class LogKeyModal extends Component {
  constructor(props) {
    super(props);
    this.state={
      current:1,
    };
    this.doFunBind()
  }
  doFunBind(){
  this.hideModal = this.hideModal.bind(this)
  this.onChange = this.onChange.bind(this)
  }
 hideModal(){
   this.props.hideModal(false)
 }
 onChange(page){
   this.setState({current:page})
 }
  render() {
    const pagination = {current:this.state.current,
      pageSize: 4,
      // showQuickJumper: true,
      onChange: this.onChange,
      // pageSizeOptions:[5,10,15,20],
      // showSizeChanger:true,
    };
    return (
      <div>
        <Modal visible={this.props.visible}
               width="860px"
               onCancel={this.hideModal}
               footer={[]}
               wrapClassName='logModal'
               title={'Xml信息'}

              >
          <div  style={{overflow:'auto', height:'400px'}}>
            <Highlight >
             <div style={{width:'100px',height:'100px',backgroundColor:'green'}}></div>
              <div style={{width:'100px',height:'100px',backgroundColor:'red'}}></div>
              <div style={{width:'100px',height:'100px',backgroundColor:'cyan'}}></div>
              <div style={{width:'100px',height:'100px',backgroundColor:'green'}}></div>
              <div style={{width:'100px',height:'100px',backgroundColor:'red'}}></div>
              <div style={{width:'100px',height:'100px',backgroundColor:'cyan'}}></div>
              <div style={{width:'100px',height:'100px',backgroundColor:'green'}}></div>
              <div style={{width:'100px',height:'100px',backgroundColor:'red'}}></div>
              <div style={{width:'100px',height:'100px',backgroundColor:'cyan'}}></div>
            </Highlight>

          </div>
        </Modal>
      </div>
    )
  }
}
export default LogKeyModal




