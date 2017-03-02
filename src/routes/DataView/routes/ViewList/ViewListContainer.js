/**
 * Created by lilei on 2016/10/28.
 */
import React, {Component} from 'react'
import {connect} from 'react-redux'
import {Tabs,Input,Table,Icon} from 'antd';
import './style.scss'
import DetailModal from './components/detailModal'
import PatNameLiat from './components/patNameLiat'
const TabPane = Tabs.TabPane;
const Search = Input.Search;


class ViewList extends Component {
  constructor(props) {
    super(props)
    this.state = {
      minHeight: 0,
      visible: false,
      tabKey: 1,
      treeType: 'onClick1'
    }
    this.resize = this.resize.bind(this)
    this.callback = this.callback.bind(this)
    this.canleModal = this.canleModal.bind(this)
  }
  
  showModal() {
    this.setState({visible: true})
  }
  
  canleModal() {
    this.setState({visible: false})
  }
  
  resize() {
    this.setState({
      minHeight: document.body.offsetHeight - 66
    })
  }

  componentDidMount() {
    this.resize()
    Ewell.resizeFunc.push(this.resize)
  }
  
  callback(key) {
    this.setState({tabKey: key})
  }
  
  render() {
    
    const dataSource = [{
      key: '1',
      name: '胡彦斌',
      age: 32,
      address: '西湖区湖底公园1号'
    }, {
      key: '2',
      name: '胡彦祖',
      age: 42,
      address: '西湖区湖底公园1号'
    }, {
      key: '3',
      name: '胡彦祖',
      age: 42,
      address: '西湖区湖底公园1号'
    }, {
      key: '4',
      name: '胡彦祖',
      age: 42,
      address: '西湖区湖底公园1号'
    }, {
      key: '5',
      name: '胡彦祖',
      age: 42,
      address: '西湖区湖底公园1号'
    }, {
      key: '6',
      name: '胡彦祖',
      age: 42,
      address: '西湖区湖底公园1号'
    }];
    
    const columns = [{
      title: '姓名',
      dataIndex: 'name',
      key: 'name',
    }, {
      title: '年龄',
      dataIndex: 'age',
      key: 'age',
    }, {
      title: '住址',
      dataIndex: 'address',
      key: 'address',
    }];
    
    const columns1 = [{
      title: '编码',
      dataIndex: 'name',
      key: 'name',
    }, {
      title: '名称',
      dataIndex: 'age',
      key: 'age',
    }, {
      title: '数据类型',
      dataIndex: 'address',
      key: 'address',
    }, {
      title: '操作',
      render: (text, record, index)=> {
        return (
          <Icon type="file-text" title="查看详情" onClick={()=>this.showModal()} style={{fontSize: 16}}/>
        )
      }
    }];
    
    return (
      <div id="ViewList">
        <div className="tabTitle">
          <Tabs onChange={this.callback} type="card" animated={false}>
            <TabPane tab="数据列表" key="1" style={{padding:10}}>
              <Table 
                style={{display:(this.props.location.query.type == 'onClick1'||this.props.location.query.type == 'onClick2'||this.props.location.query.type == undefined)?'block':'none'}} 
                dataSource={dataSource} 
                columns={(this.props.location.query.type == 'onClick1'||this.props.location.query.type == undefined)?columns:columns1} 
                size="middle"/>
              <PatNameLiat 
                visible={this.props.location.query.type}/>
            </TabPane>
            <TabPane tab="实体模型" key="2" 
              disabled={this.props.location.query.type == 'onClick3'?true:false}
              style={{padding:10}}>
              <Table dataSource={dataSource} columns={columns} size="middle"/>
            </TabPane>
          </Tabs>
          <div className="modalBox">
            <DetailModal 
              visible={this.state.visible}
              canleModal={this.canleModal}/>
          </div>
          <Search className="searchInput" style={{display: (this.state.tabKey==2||this.props.location.query.type == 'onClick3')?'none':'block'}} placeholder="Search"/>
        </div>
      </div>
    )
  }
}
export default connect()(ViewList)
