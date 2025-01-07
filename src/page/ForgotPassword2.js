import React from 'react';
import {Image, StyleSheet, Text, TouchableOpacity, TouchableOpacityBase, View} from 'react-native';

const ForgotPassword2 = ({navigation}) => {
  return (
    <View>
      <View style={{marginTop:200, marginStart:50,marginEnd:50, alignItems:'center'}}>
      <View>
          <Text style={{color:'black',fontSize:25,marginBottom:5}}>Email has been sent! </Text>
      </View>
      <View style={{marginTop:20}}>
      <Text style={{color:'black',fontSize:12,marginBottom:5}}>Please check your inbox and click in the receiverd link to reset the password</Text>
      </View>

      </View>

      <View style={{justifyContent:'center',marginTop:40,flexDirection:'row'}}>
      <Text>Dont receive the link??</Text>
          <TouchableOpacity style={{marginLeft:3}}>
              <Text onPress={() => navigation.navigate('ForgotPassword1')} style={{color:'green'}}>Resend</Text>
          </TouchableOpacity>
      </View>

    </View>
  );
};

export default ForgotPassword2;