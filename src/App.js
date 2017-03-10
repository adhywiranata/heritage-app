import {
  StackNavigator,
} from 'react-navigation';

import { MainScreenNavigator, AuthScreen, CameraScreen } from './screens';

const App = StackNavigator({
  Auth: {screen: AuthScreen},
  Main: {screen: MainScreenNavigator},
  Camera: {screen: CameraScreen},
});

export default App;
