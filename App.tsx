import React from 'react';
import { Provider } from 'react-redux';

import MainScreenContainer from './src/common/MainScreen/MainScreenContainer';
import store from "./src/store/configureStore";
import styles from "./src/common/MainScreen/MainScreenStyle";
import {Text, View} from "react-native";

const App = (): JSX.Element => {
  return (
    <Provider store={store}>
      <MainScreenContainer />
    </Provider>
  );
};

export default App;
