import React from 'react';
import { Image, StyleSheet, Text, TouchableOpacity, TouchableOpacityBase, View } from 'react-native';

const Notifications = ({ navigation }) => {
    return (
        <View style={{ backgroundColor: '#fff', flex: 1 }}>
            <View style={{ marginTop: 10, marginStart: 50, marginEnd: 50, alignItems: 'center' }}>
                <Image source={require('../assets/image/notif1.png')} style={{ height: 200, width: 200 }} />
                <View style={{ marginTop: 15 }}>
                    <Text style={{ color: 'black', fontSize: 20, textAlign: 'center' }}>You have no received any notifications yet</Text>
                </View>
            </View>


        </View>
    );
};

export default Notifications;