import {
  StackNavigator,
} from 'react-navigation';

import { MainScreenNavigator, AuthScreen } from './screens';

const App = StackNavigator({
  Auth: {screen: AuthScreen},
  Main: {screen: MainScreenNavigator},
});

export default App;
