/**
 * Created by yll on 2016/11/16.
 */
import React, {Component, PropTypes} from 'react'
import {connect} from 'react-redux'
import {Modal, Form, Input, Button, Icon, Select, DatePicker,} from 'antd';
import '../style.scss';
const {RangePicker} = DatePicker
const FormItem = Form.Item;
const Option = Select.Option;


class FormArea extends Component {
  constructor(props) {
    super(props)
    this.handleSubmit = this.handleSubmit.bind(this)
    this.reset = this.reset.bind(this)
  }

  handleSubmit(e) {
    e.preventDefault();
    this.props.form.validateFields((err, fieldsValue) => {
      if (err) {
        return;
      }
      this.props.onChange(1)

    });
  }

  reset() {
    this.props.form.resetFields()
    this.props.onChange(1)

  }

  render() {
    const {getFieldDecorator} = this.props.form;
    const formItemLayout = {
      labelCol: {span: 6,},
      wrapperCol: {span: 18,}
    }
    return (
      <Form inline onSubmit={this.handleSubmit}>

        <FormItem
          {...formItemLayout}
          label="批次号"
        >
          {getFieldDecorator('batchNumber', {initialValue: ''})(
            <Input style={{ width: '180px', marginRight: 8 }}/>
          )}
        </FormItem>
        <FormItem {...formItemLayout}
          label="上报时间："
        >
          {getFieldDecorator('reportingTime', {})(
            <RangePicker showTime={{hideDisabledOptions:true,format:'HH:mm'}}
                         format="YYYY-MM-DD HH:mm"

            />)
          }
        </FormItem>
        <FormItem labelCol={{span:10,}} style={{marginLeft:'20px'}}>
          <Button type="primary" htmlType="submit" style={{margin:'0 10px'}}>查询</Button>
          <Button onClick={this.reset}>重置</Button>
        </FormItem>
      </Form>
    )
  }
}
FormArea = Form.create({})(FormArea)
export default FormArea



