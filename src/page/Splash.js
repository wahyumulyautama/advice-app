import React from 'react';
import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native';

const Splash = ({ navigation }) => {
  return (
    <View style={{ backgroundColor: '#fff', flex: 1 }} >
      <View style={{ alignItems: 'center', marginTop: 80 }}>
        <Text style={{ fontSize: 25, fontWeight: 'bold', color: '#000' }}>Welcome To ADVICE!</Text>
        <Text style={{ fontSize: 17, fontWeight: 'normal', color: '#000' }}>Go sign up and start your journey</Text>
      </View>

      <View style={{ marginTop: 350, alignItems: 'center', borderWidth: 1, borderColor: "#000", borderRadius: 10, paddingVertical: 10, marginHorizontal: 50 }}>
        <TouchableOpacity onPress={() => navigation.navigate('SignUp')} style={{ backgroundColor: 'white' }}>
          <Text style={{ color: '#000' }}>Sign Up With Email</Text>
        </TouchableOpacity>
      </View>

      <View style={{ justifyContent: 'center', marginTop: 10, flexDirection: 'row' }}>
        <Text style={{ color: '#000' }}>Already Have An Account?</Text>
        <TouchableOpacity style={{ marginLeft: 3 }}>
          <Text onPress={() => navigation.navigate('Login')} style={{ color: 'green' }}>Login</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Splash;