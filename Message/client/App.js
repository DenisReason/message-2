import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { useEffect, useState } from 'react';
import { Button, StyleSheet, Text, TextInput, View } from 'react-native';
import { handleLogin } from './Control/login.js';




const Login = () => {
  const [username, setusername] = useState("")
  const [password, setpassword] = useState("")


  return (
    <View style={styles.container}>
      <TextInput placeholder='Username' style={styles.input} onChangeText={setusername}></TextInput>
      <TextInput placeholder='Password' style={styles.input} onChangeText={setpassword}></TextInput>
      <Button title='Login' onPress={async()=>{await handleLogin({username:username,password:password})}}></Button>
    </View>
  )
}

const Stack = createNativeStackNavigator()
export default function App() {

  return (
    <NavigationContainer>
       <Stack.Navigator>
        <Stack.Screen name='Login' component={Login}/>

       </Stack.Navigator>

    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  input:{
    width:300,
    borderWidth:1,
    borderColor:"black",
    margin:5,
    padding:5
  }
});
