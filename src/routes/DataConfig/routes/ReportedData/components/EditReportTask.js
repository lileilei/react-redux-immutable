/**
 * Created by Administrator on 2017/2/16 0016.
 */
import { Modal, Button,Input,Form } from 'antd';
import React, {Component} from 'react'
const FormItem = Form.Item
class EditReportTask extends Component {
  constructor(props) {
    super(props)
  }
  handleSubmit(e) {
    e.preventDefault();
    this.props.form.validateFields((err, fieldsValue) => {
      if (err) {
        return;
      }
    })
  }
  render() {
    const {getFieldDecorator} = this.props.form
    return (
      <Modal title="编辑上报任务" footer={[]} visible={this.props.visible} onCancel={this.props.onCancel}>
        <Form inline  onSubmit={e=>this.handleSubmit(e)}>
          <FormItem label='名称'>
            {getFieldDecorator('name',{initialValue:''
            })(
              <Input style={{width:'250px',marginBottom:'20px'}}/>
            )}
          </FormItem>
          <FormItem label='描述' className='special' >
            {getFieldDecorator('running')(
              <Input style={{width:'250px',marginBottom:'20px'}}/>
            )}
          </FormItem>
          <FormItem label='开始时间'>
            {getFieldDecorator('startTime')
            (
              <Input style={{width:'250px',marginBottom:'20px'}}/>
            )}
          </FormItem>
          <FormItem label='结束时间'>
            {getFieldDecorator('endTime')(
              <Input style={{width:'250px',marginBottom:'20px'}}/>
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
EditReportTask = Form.create({})(EditReportTask)
export default EditReportTask
