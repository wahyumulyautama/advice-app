import React, { useState } from 'react';
import { Image, StyleSheet, Text, TouchableOpacity, TouchableOpacityBase, View } from 'react-native';
import { TextInput, Checkbox } from 'react-native-paper';

const ForgotPassword3 = ({ navigation }) => {
  const [newpass, setNewpass] = useState('')
  const [confirm, setConfirm] = useState('')
  return (
    <View style={{ backgroundColor: '#fff', flex: 1 }}>
      <View style={{ marginTop: 40, marginStart: 50, marginEnd: 50 }}>
        <View>
          <Text style={{ color: 'black', fontSize: 35, marginBottom: 5 }}>Reset</Text>
          <Text style={{ color: 'black', fontSize: 35 }}>Password</Text>
        </View>
        <View style={{ marginTop: 30 }}>
          <TextInput
            label="Enter you new password"
            value={newpass}
            onChangeText={text => setNewpass(text)}
            style={{ backgroundColor: 'transparent' }}
            activeUnderlineColor='#4AAC8D'
          />

          <TextInput
            label="Confirm you new password"
            value={confirm}
            onChangeText={text => setConfirm(text)}
            style={{ backgroundColor: 'transparent' }}
            activeUnderlineColor='#4AAC8D'
          />
        </View>
      </View>

      <View style={{ marginTop: 50, alignItems: 'center' }}>
        <TouchableOpacity onPress={() => navigation.navigate('Profile')} style={{ backgroundColor: '#4AAC8D', borderRadius: 10, paddingVertical: 10, paddingHorizontal: 40 }}>
          <Text style={{ color: 'white' }}>Save New Password</Text>
        </TouchableOpacity>
      </View>

    </View>
  );
};

export default ForgotPassword3;