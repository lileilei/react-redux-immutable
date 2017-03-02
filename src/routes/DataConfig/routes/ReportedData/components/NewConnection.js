/**
 * Created by hcz on 2017/2/17.
 * 新增链接
 */
import { Modal, Button,Input,Form ,Select,Row,Col} from 'antd';
import React, {Component} from 'react'
const FormItem = Form.Item
const Option = Select.Option
const data = [{name:'Ftp',id:'1'},{name:'http',id:'2'}]
class NewConnection extends Component {
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
      <Modal title="新增连接" footer={[]} visible={this.props.visible} onCancel={this.props.onCancel} width='640px'>
        <Form inline  onSubmit={e=>this.handleSubmit(e)} className='clearfix newConnection'>
          <Row><Col span={12}>
            <FormItem label='数据库类型'>
              {getFieldDecorator('type')(
                <Select style={{width:'180px',marginBottom:'20px'}}  placeholder='--请选择--' >
                {data.map((item,i)=>{
                  return(
                    <Option key={item.id} value={item.id}>{item.name}</Option>
                  )
                })}
                </Select>
              )}
            </FormItem>
          </Col><Col span={12}>
            <FormItem label='数据库名称'>
              {getFieldDecorator('database',{initialValue:''
              })(
                <Input style={{width:'180px',marginBottom:'20px'}}/>
              )}
            </FormItem>
          </Col></Row>
          <Row><Col span={12}>
            <FormItem label='连接名'>
              {getFieldDecorator('connection',{initialValue:''
              })(
                <Input style={{width:'180px',marginBottom:'20px'}}/>
              )}
            </FormItem>
          </Col><Col span={12}>
            <FormItem label='主机名或IP地址'>
              {getFieldDecorator('ip',{initialValue:''
              })(
                <Input style={{width:'180px',marginBottom:'20px'}}/>
              )}
            </FormItem>
          </Col></Row>
          <Row><Col span={12}>
            <FormItem label='端口'>
              {getFieldDecorator('port',{initialValue:''
              })(
                <Input style={{width:'180px',marginBottom:'20px'}}/>
              )}
            </FormItem>
          </Col></Row>
          <Row><Col span={12}>
            <FormItem label='用户名'>
              {getFieldDecorator('username',{initialValue:''
              })(
                <Input style={{width:'180px',marginBottom:'20px'}}/>
              )}
            </FormItem>

          </Col><Col span={12}>
            < FormItem label='密码'>
              {getFieldDecorator('password',{initialValue:''
              })(
                <Input style={{width:'180px',marginBottom:'20px'}}/>
              )}
            </FormItem>
          </Col></Row>
          <FormItem  style={{width:'100%',textAlign:'center'}}>
            <Button style={{width:'100px',marginRight:'100px'}}>测试连接</Button>
            <Button type='primary'  htmlType="submit" style={{width:'100px'}}>提交</Button>
          </FormItem>
        </Form>
      </Modal>
    )
  }
}
NewConnection = Form.create({})(NewConnection)
export default NewConnection
