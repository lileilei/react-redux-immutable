import React,{Component} from 'react'
import {Form,Input,Select,Button,Modal,Icon} from 'antd'
import '../style.scss'
const FormItem = Form.Item
const Option = Select.Option
class FieldEdit extends Component {
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
			var value = this.props.form.getFieldsValue()
			this.props.submit(value)
		})
	}

	render(){
		const {getFieldDecorator} = this.props.form
		const formItemLayout = {labelCol:{span:8},wrapperCol:{span:16}}
		return (
			<Modal visible={this.props.visible} title='字段映射编辑' footer={[]} onCancel={this.handleCancel} width='600px'>
				<div id="fieldEditForm">
					<Form inline onSubmit={this.handleSubmit}>
						<FormItem {...formItemLayout} label='编码：'>
							{getFieldDecorator('code',{initialValue:'ABO'})(
								<Input type='text' disabled/>
							)}
						</FormItem>
						<FormItem {...formItemLayout} label='名称：'>
							{getFieldDecorator('name',{initialValue:'ABO血型'})(
								<Input type='text' disabled/>
							)}
						</FormItem>
						<FormItem {...formItemLayout} label='映射列：'>
							{getFieldDecorator('mapList',{initialValue:'文本'})(
								<Input type='text' />
							)}
						</FormItem>
						<FormItem {...formItemLayout} label='过滤：'>
							{getFieldDecorator('filter',{initialValue:'是'})(
							<Select>
								<Option key={1} value='1'>是</Option>
								<Option key={2} value='2'>否</Option>
							</Select>
						)}
						</FormItem>
						<FormItem {...formItemLayout} label='数据类型：'>
							{getFieldDecorator('dataType',{initialValue:''})(
								<Select>
									<Option key={1} value='1'>文本</Option>
									<Option key={2} value='2'>数据</Option>
								</Select>
							)}
						</FormItem>
						<FormItem wrapperCol={{span: 13,offset: 11}} style={{width:'100%'}}>
							<Button type='primary' htmlType='submit'>提交</Button>
						</FormItem>
					</Form>
				</div>
			</Modal>
		)
	}
}
FieldEdit = Form.create({})(FieldEdit)
export default FieldEdit
