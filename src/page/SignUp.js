import React, { useState } from 'react';
import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { TextInput, Checkbox } from 'react-native-paper';
const SignUp = ({ navigation }) => {
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [phone, setPhone] = useState('')
    const [password, setPassword] = useState('')

    const [checked, setChecked] = useState(false);

    return (
        <View style={{ backgroundColor: '#FFF', flex: 1 }}>
            <View style={{ marginTop: 40, marginStart: 50, marginEnd: 50 }}>
                <View>
                    <Text style={{ color: 'black', fontSize: 35, marginBottom: 5 }}>Create</Text>
                    <Text style={{ color: 'black', fontSize: 35 }}>Account</Text>
                </View>
                <View style={{ marginTop: 10 }}>
                    <TextInput
                        label="Name"
                        value={name}
                        onChangeText={text => setName(text)}
                        style={{ backgroundColor: 'transparent' }}
                        activeUnderlineColor='#4AAC8D'
                    />

                    <TextInput
                        label="Email"
                        value={email}
                        onChangeText={text => setEmail(text)}
                        style={{ backgroundColor: 'transparent' }}
                        activeUnderlineColor='#4AAC8D'
                    />

                    <TextInput
                        label="Phone Number"
                        value={phone}
                        onChangeText={text => setPhone(text)}
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
                <View style={{ marginTop: 5, flexDirection: 'row', alignItems: 'center' }}>
                    <Checkbox
                        status={checked ? 'checked' : 'unchecked'}
                        onPress={() => {
                            setChecked(!checked);
                        }}
                    />
                    <Text style={{ fontSize: 11, color: '#000' }}>I agree to the Terms and Privacy policy</Text>
                </View>
            </View>
            <View style={{ marginTop: 30, alignItems: 'center' }}>
                <TouchableOpacity activeOpacity={0.8}>
                    <Text onPress={() => navigation.navigate('Splash')} style={{ backgroundColor: '#4AAC8D', borderRadius: 10, paddingHorizontal: 50, paddingVertical: 10, color: '#fff' }}>Create Account</Text>
                </TouchableOpacity>
            </View>
            <View style={{ justifyContent: 'center', marginTop: 10, flexDirection: 'row' }}>
                <Text style={{ color: '#000' }}>Already have an account?</Text>
                <TouchableOpacity style={{ marginHorizontal: 5 }}>
                    <Text onPress={() => navigation.navigate('Login')} style={{ color: '#4AAC8D' }}>Login</Text>
                </TouchableOpacity>

            </View>
        </View>

    );
};

export default SignUp;