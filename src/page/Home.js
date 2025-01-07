import React from 'react';
import { Image, StyleSheet, Text, TouchableOpacity, TouchableOpacityBase, View } from 'react-native';

const Home = ({ navigation }) => {
    return (
        <View style={{ backgroundColor: 'white', flex: 1 }}>
            <View style={{ marginTop: 20, marginStart: 20, marginEnd: 20, flexDirection: 'row', justifyContent: 'space-between' }}>
                <View>
                    <TouchableOpacity onPress={() => navigation.navigate('Profile')}>
                        <Image source={require('../assets/icon/profile.png')} />
                    </TouchableOpacity>
                </View>
                <View>
                    <TouchableOpacity onPress={() => navigation.navigate('Notifications')} >
                        <Image source={require('../assets/icon/notifications.png')} />
                    </TouchableOpacity>
                </View>
            </View>

            <View style={{ marginTop: 15, marginHorizontal: 50, alignItems: 'center' }}>
                <Image source={require('../assets/image/home2.png')} style={{ height: 150, width: 150 }} />
                <View style={{ marginTop: -8 }}>
                    <Text style={{ color: 'black', fontSize: 35, marginBottom: 5 }}>Today's Mission</Text>
                </View>
                <View style={{ marginTop: 5 }}>
                    <Text style={{ color: 'black', fontSize: 15 }}>You have no mission(s) yet</Text>
                </View>
            </View>

            <View style={{ marginTop: 50, alignItems: 'center' }}>
                <TouchableOpacity onPress={() => navigation.navigate('Program')} style={{ backgroundColor: '#4AAC8D', borderRadius: 10, paddingVertical: 10, paddingHorizontal: 50 }}>
                    <Text style={{ color: 'white' }}>Join Program</Text>
                </TouchableOpacity>
            </View>

        </View>
    );
};

export default Home;