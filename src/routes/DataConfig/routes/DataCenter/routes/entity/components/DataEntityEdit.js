/**
 * Created by Administrator on 2017/2/20 0020.
 */
import React,{Component} from 'react'
import {Form,Input,Select,Button,Modal,Icon} from 'antd'
import '../style.scss'
const FormItem = Form.Item
const Option = Select.Option
class EntityEditModal extends Component {
  constructor(props) {
    super(props)
    this.state = {}
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
      const saveContent = {}
      Object.assign(saveContent,{
        objectId:this.props.entityInfo.objectId,
        objectName:fieldsValue.objectName,
        objectDesc:fieldsValue.objectDesc,
        objectType:Number(fieldsValue.objectType)
      })
      this.props.onSubmit(saveContent)
      this.handleCancel()
      this.props.form.resetFields()
    })
  }
  render(){
    const {getFieldDecorator} = this.props.form
    return (
      <Modal visible={this.props.visible} title='编辑数据实体' footer={[]} onCancel={this.handleCancel} width='500px'>
        <div id="fieldEditForm">
          <Form inline onSubmit={this.handleSubmit}>
              <FormItem label='实体名称'  style={{width:'45%',marginLeft:'10px'}}>
                {getFieldDecorator('objectName',{initialValue:this.props.entityInfo.objectName})(
                  <Input style={{width:'150px',marginBottom:'20px'}}/>
                )}
              </FormItem>
              <FormItem label='实体类型'  style={{width:'45%',marginLeft:'10px'}}>
                {getFieldDecorator('objectType',{initialValue:String(this.props.entityInfo.objectType)})(
                  <Select style={{width:'150px',marginBottom:'20px'}}>
                    <Option key={1} value='1'>数据实体</Option>
                    <Option key={2} value='2'>文档实体</Option>
                  </Select>
                )}
              </FormItem>
              <FormItem label='分类描述' style={{width:'100%',marginLeft:'10px'}}>
                {getFieldDecorator('objectDesc',{initialValue:this.props.entityInfo.objectDesc})(
                  <Input type='textarea' rows={4} style={{width:'450px'}} placeholder='请输入0-1000位字符'/>
                )}
              </FormItem>
              <FormItem  style={{width:'100%',textAlign:'center',marginTop:'20px'}}>
                <Button type='primary'  htmlType="submit" style={{width:'100px'}}>提交</Button>
              </FormItem>
          </Form>
        </div>
      </Modal>
    )
  }
}
EntityEditModal = Form.create({})(EntityEditModal)
export default EntityEditModal
