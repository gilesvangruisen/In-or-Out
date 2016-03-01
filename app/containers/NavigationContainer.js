'use strict';
import React  from 'react-native'
import EventCreationContainer from './EventCreationContainer'

let {
  Navigator
} = React;


class NavigationContainer extends React.Component {

  renderScene(route, nav) {
    switch(route.id) {
      case 'eventCreationContainer':
        return (<EventCreationContainer />)
        break
    }
  }

  render() {
    return (
      <Navigator initialRoute={{id: 'eventCreationContainer'}}
                 renderScene={this.renderScene.bind(this)} />
    )
  }

}




module.exports = NavigationContainer
