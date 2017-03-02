/**
 * Created by Administrator on 2017/2/16 0016.
 */
import { Modal, Button,Input,Form,Select } from 'antd';
import React, {Component} from 'react'
const FormItem = Form.Item
const Option = Select.Option
class NewParamsModal extends Component {
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
      <Modal title="新增参数" footer={[]} visible={this.props.visible} onCancel={this.props.onCancel} width='600px'  className='newparams'>
        <Form inline onSubmit={this.handleSubmit}>
          <FormItem  label='名称：'  style={{marginBottom:'20px'}}>
            {getFieldDecorator('code',{initialValue:''})(
              <Input type='text' style={{width:'180px'}}/>
            )}
          </FormItem>
          <FormItem  label='数据类型：'  style={{marginLeft:'20px',marginBottom:'20px'}}>
            {getFieldDecorator('dataType',{initialValue:''})(
              <Select  style={{width:'180px'}}>
                <Option key={1} value='1'>文本</Option>
                <Option key={2} value='2'>数据</Option>
              </Select>
            )}
          </FormItem>
          <FormItem  label='默认值：'  style={{marginBottom:'20px'}}>
            {getFieldDecorator('defaultValue',{initialValue:''})(
              <Input type='text'  style={{width:'180px'}}/>
            )}
          </FormItem>
          <FormItem  label='启用操作：' style={{marginLeft:'20px',marginBottom:'20px'}}>
            {getFieldDecorator('action',{initialValue:''})(
              <Select  style={{width:'180px'}}>
                <Option key={1} value='1'>是</Option>
                <Option key={2} value='2'>否</Option>
              </Select>
            )}
          </FormItem>

          <FormItem style={{width:'100%',textAlign:'center'}}>
            <Button type='primary' htmlType='submit'  style={{width:'100px'}}>提交</Button>
          </FormItem>
        </Form>
      </Modal>
    )
  }
}
NewParamsModal = Form.create({})(NewParamsModal)
export default NewParamsModal
