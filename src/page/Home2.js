import React from 'react';
import { Image, StyleSheet, Text, TouchableOpacity, TouchableOpacityBase, View } from 'react-native';

const Home2 = ({ navigation }) => {
    return (
        <View style={{ backgroundColor: 'white', flex: 1 }}>
            <View style={{ marginTop: 20, marginStart: 20, marginEnd: 20, flexDirection: 'row', justifyContent: 'space-between' }}>
                <View>
                    <TouchableOpacity onPress={() => navigation.navigate('Profile')}>
                        <Image source={require('../assets/icon/profile.png')} />
                    </TouchableOpacity>
                </View>
                <View>
                    <TouchableOpacity onPress={() => navigation.navigate('Notifications2')} >
                        <Image source={require('../assets/icon/notifications.png')} />
                    </TouchableOpacity>
                </View>
            </View>

            <View style={{ marginTop: 150, marginHorizontal: 50, alignItems: 'center' }}>
                <View style={{ marginTop: -8 }}>
                    <Text style={{ color: 'black', fontSize: 35, marginBottom: 5 }}>Today's Mission</Text>
                </View>
            </View>

            <View style={{ marginTop: 10, marginHorizontal: 30 }}>
                <TouchableOpacity onPress={() => navigation.navigate('Home')} style={{ backgroundColor: '#4AAC8D', borderRadius: 10 }}>
                    <Text style={{ color: '#fff', marginHorizontal: 10, marginVertical: 5, fontWeight: 'bold', fontSize: 15 }}>Reduce 4 Cigarettes</Text>
                    <Text style={{ color: '#fff', marginHorizontal: 10, marginVertical: 0, fontWeight: 'normal', fontSize: 15, fontStyle: 'italic' }}>Berhenti Merokok, Lv. </Text>
                    <View style={{ marginHorizontal: 10, marginVertical: 10, flexDirection: 'row' }}>
                        <Image source={require('../assets/icon/clockhome.png')} />
                        <Text style={{ color: '#fff', marginHorizontal: 10, marginVertical: -3, fontWeight: 'normal', fontSize: 15 }}>10.00 AM </Text>
                    </View>

                </TouchableOpacity>
            </View>

        </View>
    );
};

export default Home2;