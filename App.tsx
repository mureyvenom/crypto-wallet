/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * Generated with the TypeScript template
 * https://github.com/react-native-community/react-native-template-typescript
 *
 * @format
 */

import { DefaultTheme, NavigationContainer } from '@react-navigation/native';
import React from 'react';
import StarterStack from './src/stacks/starter.stack';

const App = () => {
  return (
    <NavigationContainer
      theme={{
        ...DefaultTheme,
        colors: {
          ...DefaultTheme.colors,
          background: '#000',
          primary: '#1E1E1E',
        },
      }}>
      <StarterStack />
    </NavigationContainer>
  );
};

export default App;
