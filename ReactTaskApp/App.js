import React, { createContext } from 'react';
import { DefaultTheme, NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import ScHomeScreen from './src/screens/HomeScreen';
import ScCreateChirpzScreen from './src/screens/CreateChirpzScreen';
import Colors from './src/constants/Colors';
import NavHeader from './src/components/header';
import { Provider } from 'react-redux';
import { store } from './src/app/Store';

const App =()=>{

    const Stack = createStackNavigator();
    const navTheme = DefaultTheme;
    navTheme.colors.background = Colors.BACKGROUND;

    return(

      <Provider store={store}> 

        <NavigationContainer theme={navTheme} >
          <Stack.Navigator initialRouteName="ScHomeScreen" >
          
            <Stack.Screen name="ScHomeScreen" 
              options={{headerShown: true,
                title : 'Chirpz',
                headerStyle: {
                  backgroundColor: Colors.BACKGROUND,
                },
                headerTintColor: '#fff',
                headerTitleAlign : 'center',
                headerTitleStyle: {
                  fontWeight: 'bold'
                  },
                headerLeft: ()=>(
                  <NavHeader/>
                 )
                }}>
                {props => <ScHomeScreen {...props}/>}
            </Stack.Screen>

            <Stack.Screen name="ScCreateChirpzScreen" 
              options={{headerShown : false}}
              
              >
                {props => <ScCreateChirpzScreen {...props}/>}

            </Stack.Screen>
          </Stack.Navigator>
        </NavigationContainer>

        </Provider>
    )
}

export default App;