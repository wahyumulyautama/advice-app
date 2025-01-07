import React from 'react';
import {Image, StyleSheet, Text, TouchableOpacity, TouchableOpacityBase, View} from 'react-native';

const ForgotPassword1 = ({navigation}) => {
  return (
    <View>
      <View style={{marginTop:40, marginStart:50,marginEnd:50}}>
      <View>
          <Text style={{color:'black',fontSize:25,marginBottom:5}}>Forgot Your Password?</Text>
      </View>
      <View>
      <Text style={{color:'black',fontSize:12,marginBottom:5}}>Enter your registered email below to receive password reset instruction.</Text>
      </View>

      <View style={{marginTop:30}}>
          <Text style={{color:'grey',fontSize:15,marginBottom:20}}>Email </Text>
      </View>

      </View>

      <View style={{marginTop:50,alignItems:'center'}}>
      <TouchableOpacity onPress={() => navigation.navigate('ForgotPassword2')} style={{backgroundColor:'green',borderRadius:10,paddingVertical:10,paddingHorizontal:100}}>
              <Text style={{color:'white'}}>Send</Text>
          </TouchableOpacity>
      </View>

    </View>
  );
};

export default ForgotPassword1;