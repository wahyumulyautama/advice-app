import React, { useState } from 'react';
import { Image, StyleSheet, Text, TouchableOpacity, TouchableOpacityBase, View } from 'react-native';
import { TextInput } from 'react-native-paper';

const Login = ({ navigation }) => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  return (
    <View>
      <View style={{ marginTop: 40, marginStart: 50, marginEnd: 50 }}>
        <View>
          <Text style={{ color: 'black', fontSize: 35, marginBottom: 5 }}>Welcome</Text>
          <Text style={{ color: 'black', fontSize: 35 }}>Back !</Text>
        </View>

        <View style={{ marginTop: 30 }}>
          <TextInput
            label="Email"
            value={email}
            onChangeText={text => setEmail(text)}
            style={{ backgroundColor: 'transparent' }}
            activeUnderlineColor='#4AAC8D'
          />

          <TextInput
            label="Password"
            value={password}
            onChangeText={text => setPassword(text)}
            style={{ backgroundColor: 'transparent' }}
            activeUnderlineColor='#4AAC8D'
          />
        </View>

      </View>

      <View style={{ marginTop: 50, alignItems: 'center' }}>
        <TouchableOpacity onPress={() => navigation.navigate('BottomNav')} style={{ backgroundColor: '#4AAC8D', borderRadius: 10, paddingVertical: 10, paddingHorizontal: 100 }}>
          <Text style={{ color: 'white' }}>Login</Text>
        </TouchableOpacity>
      </View>

      <View style={{ justifyContent: 'center', marginTop: 20, flexDirection: 'row' }}>
        <Text style={{ color: '#000' }}>Do not have an account?</Text>
        <TouchableOpacity style={{ marginLeft: 3 }}>
          <Text onPress={() => navigation.navigate('SignUp')} style={{ color: '#4AAC8D' }}>Sign Up</Text>
        </TouchableOpacity>
      </View>

    </View>
  );
};

export default Login;