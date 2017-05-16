import React from 'react';
import { PropTypes } from 'prop-types';
import { View, Text, Button } from 'react-native';

class MasterPage extends React.Component {
  constructor(props){
    super(props);
    this.state = {

    }
    this.goToDetailPage = this.goToDetailPage.bind(this);
  }
  goToDetailPage(){
    this.props.navigation.dispatch({ type: 'DetailPage' });
  }
  render(){
    return (
      <View>
        <Text>{this.props.currentCount}</Text>
        <Button title="Increment" onPress={() => {this.props.actions.incrementCounter()}} />
        <Button title="Decrement" onPress={() => {this.props.actions.decrementCounter()}} />
        <Button onPress={this.goToDetailPage} title="To DetailPage" />
      </View>
    )
  }
}

MasterPage.propTypes = {
  navigation: PropTypes.object.isRequired,
  currentCount: PropTypes.number.isRequired,
  actions: PropTypes.object.isRequired,
}

export default MasterPage;
