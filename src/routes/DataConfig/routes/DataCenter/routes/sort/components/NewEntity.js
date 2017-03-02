/**
 * Created by Administrator on 2017/2/20 0020.
 */
//新增实体

import { Modal, Button,Input,Form ,Row,Col,Select} from 'antd'
import React, {Component} from 'react'
const FormItem = Form.Item
const Option = Select.Option
class NewEntityModal extends Component {
  constructor(props) {
    super(props)
    this.handleSubmit = this.handleSubmit.bind(this)
  }
  handleSubmit(e) {
    e.preventDefault();
    this.props.form.validateFields((err, fieldsValue) => {
      if (err) {
        return;
      }
      const saveContent = {}
      Object.assign(saveContent,{
        objectName:fieldsValue.objectName,
        objectDesc:fieldsValue.objectDesc,
        objectType:Number(fieldsValue.objectType)
      })
      this.props.onSubmit(saveContent)
      this.onClose()
      this.props.form.resetFields()
    })
  }
  onClose(){
    this.props.onCancel()
    this.props.form.resetFields()
  }
  render() {
    const {getFieldDecorator} = this.props.form
    return (
      <Modal title="新增实体" footer={[]} visible={this.props.visible} onCancel={()=>this.onClose()} width='500px'>
        <Form inline  onSubmit={this.handleSubmit}>
            <FormItem label='实体名称'  style={{width:'45%',marginLeft:'10px'}}>
              {getFieldDecorator('objectName')(
                <Input style={{width:'150px',marginBottom:'20px'}}/>
              )}
            </FormItem>
          <FormItem label='实体类型'  style={{width:'45%',marginLeft:'10px'}}>
              {getFieldDecorator('objectType')(
                <Select style={{width:'150px',marginBottom:'20px'}}>
                  <Option key={1} value="1">数据实体</Option>
                  <Option key={2} value="2">文档实体</Option>
                </Select>
              )}
            </FormItem>
            <FormItem label='分类描述' style={{width:'100%',marginLeft:'10px'}}>
              {getFieldDecorator('objectDesc',{initialValue:''
              })(
                <Input type='textarea' rows={4} style={{width:'450px'}} placeholder='请输入0-1000位字符'/>
              )}
            </FormItem>
          <FormItem  style={{width:'100%',textAlign:'center',marginTop:'20px'}}>
            <Button type='primary'  htmlType="submit" style={{width:'100px'}}>提交</Button>
          </FormItem>
        </Form>
      </Modal>
    )
  }
}
NewEntityModal = Form.create({})(NewEntityModal)
export default NewEntityModal
