import * as React from 'react';
import { StatusBar } from 'react-native';

//Main navigation stack
import RootStack from './navigation/RootStack';

const App = () => {
  //Handle loading logic.
  return (
    <React.Fragment>
      <StatusBar></StatusBar>

      <RootStack/>
    </React.Fragment>
  );
}

export default App;