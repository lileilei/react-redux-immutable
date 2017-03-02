/**
 * Created by Administrator on 2017/2/20 0020.
 */
import { Modal, Button,Input,Form ,Select,Row,Col} from 'antd';
import React, {Component} from 'react'
import '../style.scss'
const FormItem = Form.Item
const Option = Select.Option
const data = [{name:'Ftp',id:'1'},{name:'http',id:'2'}]
class NewFieldModal extends Component {
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
      <Modal title="新增字段" footer={[]} visible={this.props.visible} onCancel={this.props.onCancel} width='640px'>
        <Form inline  onSubmit={e=>this.handleSubmit(e)} className='clearfix newField'>
          <Row><Col span={12}>
            <FormItem label='编码'>
              {getFieldDecorator('code')(
                <Input style={{width:'180px',marginBottom:'20px'}}/>
              )}
            </FormItem>
          </Col><Col span={12}>
            <FormItem label='名称'>
              {getFieldDecorator('name',{initialValue:''
              })(
                <Input style={{width:'180px',marginBottom:'20px'}}/>
              )}
            </FormItem>
          </Col></Row>
          <Row><Col span={12}>
            <FormItem label='字段内容类型'>
              {getFieldDecorator('fieldType',{initialValue:''
              })(
                <Input style={{width:'180px',marginBottom:'20px'}}/>
              )}
            </FormItem>
          </Col><Col span={12}>
            <FormItem label='显示格式'>
              {getFieldDecorator('format')(
                <Select style={{width:'180px',marginBottom:'20px'}}  placeholder='--请选择--' >
                  {data.map((item,i)=>{
                    return(
                      <Option key={item.id} value={item.id}>{item.name}</Option>
                    )
                  })}
                </Select>
              )}
            </FormItem>
          </Col></Row>
          <FormItem label='描述'>
            {getFieldDecorator('mark',{initialValue:''
            })(
              <Input style={{width:'560px',marginBottom:'20px',marginLeft:'25px'}}  type='textarea' rows={4} placeholder="请输入0-1000位字符"/>
            )}
          </FormItem>
          <FormItem  style={{width:'100%',textAlign:'center'}}>
            <Button type='primary'  htmlType="submit" style={{width:'100px'}}>提交</Button>
          </FormItem>
        </Form>
      </Modal>
    )
  }
}
NewFieldModal = Form.create({})(NewFieldModal)
export default NewFieldModal
