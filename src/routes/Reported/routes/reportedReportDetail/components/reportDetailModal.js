/**
 * Created by Administrator on 2016/12/14.
 */
import React, {Component} from 'react'
import {connect} from 'react-redux'
import {Form, Button, Input, Radio, Modal, Select, Icon, Table, AutoComplete} from 'antd';
const Option = Select.Option;
// const Option = AutoComplete.Option;
const Search = Input.Search
import '../style.scss';
// var option = []
class DetailTableModal extends Component {
  constructor(props) {
    super(props);
    this.state = {
      pluginVisible: false,
      current: 1,
      value: '',
      trueValue: '',
      option: [],
    };
    this.doFunBind()
  }

  doFunBind() {
    this.hideModal = this.hideModal.bind(this)
    this.setCurrentPage = this.setCurrentPage.bind(this)
    this.onChangeValue = this.onChangeValue.bind(this)
    this.onChange = this.onChange.bind(this)
    this.onSearch = this.onSearch.bind(this)
  }

//隐藏对话框,并将搜索框中的值清空
  hideModal() {
    this.props.hideModal(false)
    this.setState({value: ''})
    this.setState({option: []})
  }

  //换页
  setCurrentPage(page) {
    this.setState({current: page})
  }

  //搜索框中的值发生改变
  onChangeValue(value) {
    console.log(1111111)
    const {name, isFilter, usingField} = this.props

    const option = []
    if (value) {
      for (let i = 0; i < name.length; i++) {
        if (isFilter[name[i]]) {
          option.push(
            <Option key={i.toString()} value={name[i] + '*' + value}>
              在 <span style={{color:'blue'}}>{usingField[name[i]]}</span> 中查找
              {value}
            </Option>)
        }
      }
    }

    this.setState({value: value})
    this.setState({option: option})
  }

//表格换页
  onChange(page) {
    var value = this.state.trueValue
    this.props.getBatchList('modal', page, value)
  }

  //点击搜索框 '搜素'按钮
  onSearch(value) {
    var that = this
    this.setState({trueValue: value})
    var arr = {}
    var allData = value.split('')
    var num = allData.indexOf('*')
    var data1 = allData.splice(0, num).join('')
    var data2 = allData.splice(0, 1)
    var data3 = allData.join('')
    arr['filterMap[' + data1 + ']'] = data3
    this.setState({value: data3})
    this.props.getBatchList('modal', 1, arr)
  }


  render() {
    const {data, usingField, name, isFilter} = this.props

    {/*onSearch={value => this.onSearch(value)}*/
    }

    var columns = []
    for (var i = 0; i < name.length; i++) {
      var obj = {}
      obj.title = usingField[name[i]]
      obj.dataIndex = name[i]
      obj.key = name[i]
      columns.push(obj)
    }


    const pagination = {
      current: this.state.current,
      pageSize: this.props.pageSize,
      total: this.props.total,
      // showQuickJumper: true,
      onChange: this.onChange,
      // pageSizeOptions:[5,10,15,20],
      // showSizeChanger:true,
    };

    /*******************************************************************************************/
    // <Select     combobox
    //             style={{width:'200px',float:'right',marginBottom:'20px'}}
    //             onSearch={this.onChangeValue}
    //             value={this.state.value}
    //             allowClear
    //             onSelect={this.onSearch}
    // >
    //   {this.state.option}
    // </Select>
    /*******************************************************************************************/


    return (
      <div>
        <Modal visible={this.props.visible}
               width="860px"
               onCancel={this.hideModal}
               footer={[]}
               title={` ${this.props.taskId} 上报数据表`}
               wrapClassName="modalA"
        >
          <div style={{overflow:'hidden'}}>

            <Select combobox
                    ref="selectForm"
                    style={{width:'200px',float:'right',marginBottom:'20px'}}
                    onSearch={this.onChangeValue}
                    value={this.state.value}
                    allowClear
                    onSelect={this.onSearch}
            >
              {this.state.option}
            </Select>
          </div>

          <Table columns={columns} rowKey='rdId' dataSource={data} pagination={pagination}/>

        </Modal>
      </div>
    )
  }
}
export default DetailTableModal


