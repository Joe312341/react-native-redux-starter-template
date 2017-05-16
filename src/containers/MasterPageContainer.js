import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
// components
import MasterPage from '../pages/MasterPage';
//actions
import * as actions from '../actions';

class MasterPageContainer extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      // if needed
    }
  }
  render(){
    // our child component does not know about redux, therefore we bind actions and send them as props
    // instead of giving the child access to the dispatch function
    let boundActions = bindActionCreators(actions, this.props.dispatch);

    return (
      <MasterPage
        actions={boundActions}
        navigation={this.props.navigation}
        currentCount={this.props.currentCount}
      />
    )
  }
}

MasterPageContainer.propTypes = {
  currentCount: PropTypes.number.isRequired,
  navigation: PropTypes.object.isRequired,
  dispatch: PropTypes.func.isRequired,
}

const mapStateToProps = (state) => ({
  currentCount: state.counter.currentCount
})

export default connect(mapStateToProps)(MasterPageContainer)
