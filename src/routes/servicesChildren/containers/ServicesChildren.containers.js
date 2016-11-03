/**
 * Created by lilei on 2016/10/28.
 */
import React, {Component} from 'react'
import {Link} from 'react-router'
import {connect} from 'react-redux'
import {fetchList, clearList} from '../action/ServiceList_action'
import Menu from '../../../components/filterMenu'
import List from '../../../components/serviceList/list'

class ServiceChildrenView extends Component {
  componentWillMount() {
    this.props.clearList()
  }

  componentDidMount() {
    this.props.fetchList()
  }

  render() {
    const {list, fetching} = this.props.servicesChild
    return (
      <div id="ServiceChildrenView">
        <Menu />
        <List title="子服务" servicesList={{list,fetching}}/>
      </div>
    )
  }
}
const mapDispatchtoProps = {
  fetchList,
  clearList
}

const mapStateToProps = (state) => {
  return {
    servicesChild: state.toJS().servicesChild
  }
}
export default connect(mapStateToProps, mapDispatchtoProps)(ServiceChildrenView)
