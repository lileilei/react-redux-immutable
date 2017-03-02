/**
 * Created by Administrator on 2017/2/16 0016.
 */
import { Modal, Button,Input,Form } from 'antd';
import React, {Component} from 'react'
const FormItem = Form.Item
class EditModal extends Component {
  constructor(props) {
    super(props)
  }
  handleSubmit(e) {
    e.preventDefault();
    this.props.form.validateFields((err, fieldsValue) => {
      if (err) {
        return;
      }
      this.props.onSave(fieldsValue)
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
      <Modal title="编辑" footer={[]} visible={this.props.visible} onCancel={()=>this.onClose()}>
        <Form inline  onSubmit={e=>this.handleSubmit(e)}>
          <FormItem label='名称：' style={{width:'100%',textAlign:'center',marginBottom:'20px'}}>
            {getFieldDecorator('catgName',{initialValue:this.props.entityDetail.catgName,rules:[{type:'string',required:true,message:'不能为空'}]})(
              <Input type='text' style={{width:'300px'}}/>
            )}
          </FormItem>
          <FormItem label='描述：'  style={{width:'100%',textAlign:'center',marginBottom:'20px'}}>
            {getFieldDecorator('catgDesc',{initialValue:this.props.entityDetail.catgDesc,rules:[{type:'string',required:true,message:'不能为空'}]})(
              <Input type='textarea'  rows={4}  style={{width:'300px'}}/>
            )}
          </FormItem>
          <FormItem style={{width:'100%',textAlign:'center'}}>
            <Button type='primary' htmlType='submit' style={{width:'100px'}} >提交</Button>
          </FormItem>
      </Form>
       </Modal>
    )
  }
}
EditModal = Form.create({})(EditModal)
export default EditModal
