/**
 * Created by czh on 2016/10/28.
 */
import React, {Component} from 'react'
import {connect} from 'react-redux'
import {Modal,Radio,Tabs,Table} from 'antd';
import '../style.scss'
const RadioButton = Radio.Button;
const RadioGroup = Radio.Group;
const TabPane = Tabs.TabPane;

export default class detailModal extends Component {
  constructor(props) {
    super(props)
  }
  
  onChange(e) {
    console.log(`radio checked:${e.target.value}`);
  }
  
  render() {
    
    const columns = [{
      title: 'Name',
      dataIndex: 'name',
      key: 'name',
      width: '40%',
    }, {
      title: 'Age',
      dataIndex: 'age',
      key: 'age',
      width: '30%',
    }, {
      title: 'Address',
      dataIndex: 'address',
      key: 'address',
    }];
    
    const data = [{
      key: 1,
      name: 'John Brown sr.',
      age: 60,
      address: 'New York No. 1 Lake Park',
      children: [{
        key: 13,
        name: 'Jim Green sr.',
        age: 72,
        address: 'London No. 1 Lake Park',
        children: [{
          key: 131,
          name: 'Jim Green',
          age: 42,
          address: 'London No. 2 Lake Park',
          children: [{
            key: 1311,
            name: 'Jim Green jr.',
            age: 25,
            address: 'London No. 3 Lake Park',
            children: [{
              key: 1311111,
              name: 'Jim211221',
              age: 26,
              address: 'Lo1212ndon No. 3 2112121',
              children: [{
                key: 1111,
                name: 'qqqqqqqqq',
                age: 11111111,
                address: 'qqqqqqqqq',
              }],
            }],
          }],
        }],
      }],
    }];
    
    return (
      <Modal title="查看详情" footer="" width={600} visible={this.props.visible}
          onOk={this.handleOk} onCancel={this.props.canleModal} width={650}
        >
        <div id="modalBox">
          <Tabs onChange={this.callback} type="card" animated={false}>
            <TabPane tab="数据源" key="1" style={{padding:10}}>
              <Table columns={columns} dataSource={data} size="middle"/>
            </TabPane>
            <TabPane tab="原文" key="2" style={{padding:10}}>
              222222222
            </TabPane>
          </Tabs>
        </div>
      </Modal>
    )
  }
}