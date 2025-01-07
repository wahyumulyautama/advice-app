import React from 'react';
import { Image, StyleSheet, Text, TouchableOpacity, TouchableOpacityBase, View } from 'react-native';

const Program = ({ navigation }) => {
    return (
        <View style={{ backgroundColor: 'white', flex: 1 }}>
            <View style={{ marginTop: 20, alignItems: 'center' }}>
                <Text style={{ color: 'black', fontSize: 25, marginBottom: 5 }}>Programs</Text>
            </View>
            <View style={{ marginTop: 30, marginHorizontal: 20 }}>
                <View style={{}}>
                    <TouchableOpacity onPress={() => navigation.navigate('SetProgram')} style={{ justifyContent: 'center', alignItems: 'center', paddingVertical: 0, marginVertical: 10 }}>
                        <Image style={{}} source={require('../assets/icon/merokok.png')} />
                        <Text style={{ position: 'absolute', color: "#fff", fontSize: 20 }}>Merokok</Text>
                    </TouchableOpacity>

                    <TouchableOpacity onPress={() => navigation.navigate('SetBegadang')} style={{ justifyContent: 'center', alignItems: 'center', paddingVertical: 0, marginVertical: 10 }}>
                        <Image style={{}} source={require('../assets/icon/begadang.png')} />
                        <Text style={{ position: 'absolute', color: "#fff", fontSize: 20 }} >Begadang</Text>
                    </TouchableOpacity>

                    <TouchableOpacity onPress={() => navigation.navigate('SetKecanduan')} style={{ justifyContent: 'center', alignItems: 'center', paddingVertical: 0, marginVertical: 10 }}>
                        <Image style={{}} source={require('../assets/icon/sosmed.png')} />
                        <Text style={{ position: 'absolute', color: "#fff", fontSize: 20 }}>Kecanduan Sosmed</Text>
                    </TouchableOpacity>

                    <TouchableOpacity onPress={() => navigation.navigate('SetTelat')} style={{ justifyContent: 'center', alignItems: 'center', paddingVertical: 0, marginVertical: 10 }}>
                        <Image style={{}} source={require('../assets/icon/telatmakan.png')} />
                        <Text style={{ position: 'absolute', color: "#fff", fontSize: 20 }}>Telat Makan</Text>
                    </TouchableOpacity>

                </View>

            </View>



        </View >
    );
};

export default Program;