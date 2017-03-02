/**
 * Created by yll on 2016/11/16.
 */
import React, {Component, PropTypes} from 'react'
import {connect} from 'react-redux'
import {Modal,Form,Input,Button,Icon,Select,DatePicker,message} from 'antd';
import '../style.scss';
const {RangePicker} = DatePicker
const FormItem = Form.Item;
const Option = Select.Option;


class FormArea extends Component {
  constructor(props) {
    super(props)
    this.handleSubmit =  this.handleSubmit.bind(this)
    this.reset =  this.reset.bind(this)
    this.getChangeOption =  this.getChangeOption.bind(this)
  }

  handleSubmit(e) {
    e.preventDefault();
    this.props.form.validateFields((err, fieldsValue) => {
      if (err) {
        return;
      }
      if(fieldsValue.taskId == '请选择' && fieldsValue.batchNumber == ''){
        message.info('请选择一项上报任务或输入一个批次号')
      }else{
        this.props.onChange(1)
      }
    });
  }
  reset() {
    this.getChangeOption('quanbu')
    this.props.resetTable()

  }

  //配置第二个下拉列表的默认选项
  getChangeOption(value) {

    this.props.form.resetFields()
    const option = [];
    option.push(<Option key='请选择' value='请选择' > 请选择...</Option>)
    for(let i = 0 ; i < this.props.data2[value].length ; i++){
      option.push(<Option key={i.toString()} value={this.props.data2[value + 's'][i].toString()} > {this.props.data2[value][i]}</Option> )
    }
    this.props.changeState(option)
  }

  render() {
    const {getFieldDecorator} = this.props.form;
    const {data1,} = this.props


    //整合第一个下拉列表的选项
    const option = []
    const task = []
    option.push(<Option key='全部' value='quanbu' > 全部 </Option>)
    for(let i = 0 ; i < data1.length ; i++){
      option.push(<Option key={i.toString()} value={data1[i]} > {data1[i]}</Option> )
    }


    const formItemLayout = {
      labelCol: {span: 6},
      wrapperCol: {span: 18}
    }
    return (
      <Form inline onSubmit={this.handleSubmit}>

        <FormItem
          {...formItemLayout}
          label="任务分类"
        >
          {getFieldDecorator('catg', {initialValue: 'quanbu'})(
            <Select style={{width:'180px', marginRight: 8}}
                    onSelect={value => this.getChangeOption(value)}
            >
              {option}
            </Select>
          )}
        </FormItem>
        <FormItem
          {...formItemLayout}
          label="上报任务"
        >
          {getFieldDecorator('taskId', {initialValue: '请选择'})(
            <Select style={{width:'180px', marginRight: 8}} >
              {this.props.changeOption}
            </Select>
          )}
        </FormItem>



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
          {getFieldDecorator('reportingTime', {

          })(
            <RangePicker showTime={{hideDisabledOptions:true,format:'HH:mm'}}
                         format="YYYY-MM-DD HH:mm"
            />)
          }
        </FormItem>
        <FormItem labelCol={{span:10,}} style={{marginLeft:'20px'}}>
          <Button type="primary" htmlType="submit" style={{margin:'0 10px'}}>查询</Button>
          <Button  onClick={this.reset}>重置</Button>
        </FormItem>
      </Form>
    )
  }
}
FormArea = Form.create({})(FormArea)
export default FormArea



