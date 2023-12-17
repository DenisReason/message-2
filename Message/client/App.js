import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import axios from 'axios';
import { StatusBar } from 'expo-status-bar';
import { useEffect, useState } from 'react';
import { Button, StyleSheet, Text, TextInput, View } from 'react-native';


const url = 'https://message-denis-b604c8e87239.herokuapp.com/login'
const url2 = "http://localhost:3000/login"
const handleLogin = async (url,data) => {
  await axios.post(url,data)
    .then(Response => {
      console.log(Response.data);
    }).catch(err => {
      console.log(err);
    })
}
const Login = () => {
  const [username, setusername] = useState("")
  const [password, setpassword] = useState("")

  useEffect(() => {

  })

  return (
    <View style={styles.container}>
      <TextInput placeholder='Username' style={styles.input} onChangeText={setusername}></TextInput>
      <TextInput placeholder='Password' style={styles.input} onChangeText={setpassword}></TextInput>
      <Button title='Login' onPress={()=>{handleLogin(url2,{username:username})}}></Button>
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
