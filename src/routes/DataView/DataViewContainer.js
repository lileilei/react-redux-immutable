/**
 * Created by lilei on 2016/10/28.
 */
import React, {Component} from 'react'
import {connect} from 'react-redux'
import {Link, browserHistory} from 'react-router'
import {Tree, Input} from 'antd';
import './style.scss'
const TreeNode = Tree.TreeNode;
const Search = Input.Search;

const treeList = [
  {
    name: "全部",
    id: "All",
    children: [
      {
        id: "children1",
        name: '一级子项1',
        children: [
          {
            id: "children1-1",
            name: '二级子项1',
            type: 'onClick1'
          },
          {
            id: "children1-2",
            name: '二级子项2',
            type: 'onClick2'
          }
        ]
      },
      {
        id: "children2",
        name: '一级子项2',
        children: [
          {
            id: "children2-1",
            name: '二级子项3',
            type: 'onClick3'
          },
          {
            id: "children2-2",
            name: '二级子项4',
            type: 'onClick1'
          }
        ]
      }
    ]
  }
]


const dataList = [];
const generateList = (data) => {
  for (let i = 0; i < data.length; i++) {
    const node = data[i];
    const id = node.id;
    dataList.push({id, title: node.name});
    if (node.children) {
      generateList(node.children, node.id);
    }
  }
};
generateList(treeList);

const getParentKey = (id, tree) => {
  let parentKey;
  for (let i = 0; i < tree.length; i++) {
    const node = tree[i];
    if (node.children) {
      if (node.children.some(item => item.id === id)) {
        parentKey = node.id;
      } else if (getParentKey(id, node.children)) {
        parentKey = getParentKey(id, node.children);
      }
    }
  }
  return parentKey;
};


class view extends Component {
  constructor(props) {
    super(props)
    this.state = {
      minHeight: 'auto',
      expandedKeys: [],
      searchValue: '',
      autoExpandParent: true,
      treeType: 'onClick1'
    }
    this.resize = this.resize.bind(this)
    this.selectNode = this.selectNode.bind(this)
  }

  onChange = (e) => {
    const value = e.target.value;
    const expandedKeys = dataList.map((item) => {
      if (item.id.indexOf(value) > -1) {
        return getParentKey(item.id, treeList);
      }
      return null;
    }).filter((item, i, self) => item && self.indexOf(item) === i);
    this.setState({
      expandedKeys,
      searchValue: value,
      autoExpandParent: true,
    });
  }

  onExpand = (expandedKeys) => {
    this.setState({
      expandedKeys,
      autoExpandParent: false,
    });
  }

  selectNode(selectedKeys, e) {
    this.setState({treeType: e.node.props.type}, function () {
      var parameter = this.state.treeType
      if (this.state.treeType == undefined) {
        return;
      }
      browserHistory.push('/dcms/home/view/ViewList?type=' + parameter)
    })
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

  render() {
    const {searchValue, expandedKeys, autoExpandParent} = this.state;
    const loop = data => data.map((item) => {
      const index = item.name.search(searchValue);
      const beforeStr = item.name.substr(0, index);
      const afterStr = item.name.substr(index + searchValue.length);
      const title = index > -1 ? (
        <span>
          {beforeStr}
          <span style={{ color: '#f50' }}>{searchValue}</span>
          {afterStr}
        </span>
      ) : <span>{item.name}</span>;
      if (item.children) {
        return (
          <TreeNode key={item.id} title={title} type={item.type}>
            {loop(item.children)}
          </TreeNode>
        );
      }
      return <TreeNode key={item.id} title={title} type={item.type}/>;
    });

    return (
      <div id="DataView">
        <div className="left">
          <Search style={{ width: 200, marginTop: 20}} placeholder="Search" onChange={this.onChange}/>
          <Tree
            onExpand={this.onExpand}
            expandedKeys={expandedKeys}
            onSelect={(selectedKeys, e)=>this.selectNode(selectedKeys, e)}
            autoExpandParent={autoExpandParent}
          >
            {loop(treeList)}
          </Tree>
        </div>
        <div className="right" style={{minHeight:this.state.minHeight}}>
          {this.props.children}
        </div>
      </div>
    )
  }
}
const mapDispatchtoProps = {}
const mapStateToProps = (state) => {
  return {
    view: state.get('view').toJS()
  }
}
export default connect(mapStateToProps, mapDispatchtoProps)(view)
