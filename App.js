import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import PhoneScreen from './screens/PhoneScreen';
import SmsScreen from './screens/SmsScreen';
import { Button } from 'react-native';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
      <Stack.Screen
      name="Phone"
      component={PhoneScreen}
      options={({ navigation }) => ({
        title: 'Ligação',
        headerRight: () => (
          <Button
          onPress={() => navigation.navigate('SMS')}
          title="SMS"
          />
        ),
      })}

      />

      <Stack.Screen
      name="SMS"
      component={SmsScreen}
      options={({ navigation }) => ({
        title: 'Enviar SMS',
        headerRight: () => (
          <Button
          onPress={() => navigation.navigate('Phone')}
          title="Ligar"
          />
        ),
      })}
    />
    </Stack.Navigator>
    </NavigationContainer>
  );
}