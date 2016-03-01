'use strict';
import React, {
  AppRegistry
} from 'react-native';

import NavigationContainer from './app/containers/NavigationContainer'

class InOrOut extends Component {
  render() {
    return <NavigationContainer />
  }
}

AppRegistry.registerComponent('inorout', () => InOrOut);
