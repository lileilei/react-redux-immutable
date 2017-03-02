/*Created by zhy on 2017/2/16 0016.*/
import React, {Component} from 'react'
import {Row,Input, Radio, Icon,  Button, Table,Modal,Form,DatePicker} from 'antd';
import '../style.scss'
const RadioGroup = Radio.Group
const FormItem = Form.Item
class NewReportedModal extends Component {
  constructor(props) {
    super(props);
  }
  handleSubmit(e) {
    e.preventDefault();
    this.props.form.validateFields((err, fieldsValue) => {
      if (err) {
        return;
      }
    })
  }
  timeChange(e){
    console.log(e)
  }

  render() {
    const {getFieldDecorator} = this.props.form
    const radioStyle = {
      display: 'block',
      height: '60px',
      lineHeight: '60px'
    };
    return (
        <Modal
          className='modalShow'
          visible={this.props.visible}
               width="500px"
               onCancel={this.props.onCancel}
               footer={[]}
               title={'新建上报任务'}>
              <Form inline  onSubmit={e=>this.handleSubmit(e)}>
                <FormItem label='任务名称'>
                  {getFieldDecorator('name',{initialValue:''
                  })(
                    <Input style={{width:'250px'}}/>
                  )}
                </FormItem>
                <FormItem label='执行间隔（周期）' className='special' >
                  {getFieldDecorator('running',{initialValue:1
                  })(
                    <RadioGroup style={{display:'inline-block'}}>
                      <Radio style={{ display: 'block',height: '60px',lineHeight: '30px'}} value={1}>
                        <span>每月固定日期</span><br/><span>每月 <DatePicker style={{width:'150px'}} showTime onChange={(e)=>this.timeChange(e)}/> 上报</span></Radio>
                      <Radio style={radioStyle} value={2}>每周固定日期</Radio>
                      <Radio style={radioStyle} value={3}>每天固定日期</Radio>
                      <Radio style={radioStyle} value={4}>其他</Radio>
                    </RadioGroup>
                  )}
                </FormItem>
                <FormItem label='开始时间'>
                  {getFieldDecorator('startTime')
                 (
                    <DatePicker style={{width:'250px'}}/>
                  )}
                </FormItem>
                <FormItem label='结束时间'>
                  {getFieldDecorator('endTime')(
                    <DatePicker style={{width:'250px'}}/>
                  )}
                </FormItem>
                <FormItem    style={{width:'100%',textAlign:'center'}}>
                  <Button type='primary'  htmlType="submit" style={{width:'100px',marginTop:'15px'}}>提交</Button>
                </FormItem>
              </Form>
        </Modal>
    )
  }
}
NewReportedModal = Form.create({})(NewReportedModal)
export default NewReportedModal
