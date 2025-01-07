import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Splash from './src/page/Splash';
import SignUp from './src/page/SignUp';
import Login from './src/page/Login';
import ForgotPassword1 from './src/page/ForgotPassword1';
import ForgotPassword2 from './src/page/ForgotPassword2';
import ForgotPassword3 from './src/page/ForgotPassword3';
import Home from './src/page/Home';
import Home2 from './src/page/Home2';
import Profile from './src/page/Profile';
import Notifications from './src/page/Notifications';
import Program from './src/page/Program'
import SetProgram from './src/page/SetProgram'
import SetBegadang from './src/page/SetBegadang'
import SetKecanduan from './src/page/SetKecanduan'
import SetTelat from './src/page/SetTelat'
import HomeIcon from './src/assets/icon/homeicon.svg'
import HomeIconAct from './src/assets/icon/homeiconact.svg'
import ProgramIcon from './src/assets/icon/programicon.svg'
import ProgramIconAct from './src/assets/icon/programiconact.svg'
import UpdateProfile from './src/page/UpdateProfile';
import Notifications2 from './src/page/Notifications2';

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

function BottomNav() {
  return (
    <Tab.Navigator screenOptions={{ tabBarStyle: { backgroundColor: 'white' }, headerShown: false }}>
      <Tab.Screen name='Home' component={Home}
        options={{
          tabBarIcon: tabState => {
            return tabState.focused ?
              <HomeIconAct
                width={32}
                height={32}
              />
              : <HomeIcon
                width={32}
                height={32}
              />
          },
          tabBarShowLabel: false
        }}
      />

      <Tab.Screen name='Program' component={Program}
        options={{
          tabBarIcon: tabState => {
            return tabState.focused ?
              <ProgramIconAct
                width={32}
                height={32}
              />
              : <ProgramIcon
                width={32}
                height={32}
              />
          },
          tabBarShowLabel: false
        }}
      />

    </Tab.Navigator>
  );
}


const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Splash">
        <Stack.Screen
          name="Splash"
          component={Splash}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="SignUp"
          component={SignUp}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Login"
          component={Login}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="ForgotPassword1"
          component={ForgotPassword1}
          options={{ headerShown: true }}
        />
        <Stack.Screen
          name="ForgotPassword2"
          component={ForgotPassword2}
          options={{ headerShown: true }}
        />
        <Stack.Screen
          name="ForgotPassword3"
          component={ForgotPassword3}
          options={{ headerShown: false }}
        />

        <Stack.Screen
          name="Profile"
          component={Profile}
          options={{ headerShown: true }}
        />
        <Stack.Screen
          name="Notifications"
          component={Notifications}
          options={{ headerShown: true }}
        />

        <Stack.Screen
          name="SetProgram"
          component={SetProgram}
          options={{ headerShown: true }}
        />
        <Stack.Screen
          name='SetBegadang'
          component={SetBegadang}
          options={{ headerShown: true }}
        />
        <Stack.Screen
          name='SetKecanduan'
          component={SetKecanduan}
          options={{ headerShown: true }}
        />
        <Stack.Screen
          name='SetTelat'
          component={SetTelat}
          options={{ headerShown: true }}
        />
        <Stack.Screen
          name='BottomNav'
          component={BottomNav}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name='UpdateProfile'
          component={UpdateProfile}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name='Home2'
          component={Home2}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name='Notifications2'
          component={Notifications2}
          options={{ headerShown: true }}
        />

      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;