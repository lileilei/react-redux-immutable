/**
 * Created by hcz on 2017/2/17.
 * 新增参数
 */
import React,{Component} from 'react'
import {Form,Input,Select,Button,Modal,Icon} from 'antd'
import '../style.scss'
const FormItem = Form.Item
const Option = Select.Option
class NewArgument extends Component {
  constructor(props) {
    super(props)
    this.handleCancel = this.handleCancel.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
  }
  handleCancel(){
    this.props.onCancel()
  }
  handleSubmit(e){
    e.preventDefault();
    this.props.form.validateFields((err,fieldsValue) => {
      if(err){
        return
      }
      var value = this.props.form.getFieldsValue()
      this.props.submit(value)
    })
  }

  render(){
    const {getFieldDecorator} = this.props.form
    return (
      <Modal visible={this.props.visible} title='新增参数' footer={[]} onCancel={this.handleCancel} width='600px' className='newparams'>
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
NewArgument = Form.create({})(NewArgument)
export default NewArgument

