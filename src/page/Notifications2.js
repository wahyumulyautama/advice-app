import React from 'react';
import { Image, StyleSheet, Text, TouchableOpacity, TouchableOpacityBase, View } from 'react-native';

const Notifications2 = ({ navigation }) => {
    return (
        <View style={{ backgroundColor: '#fff', flex: 1 }}>
            <View style={{ marginTop: 20, marginHorizontal: 20 }}>
                <TouchableOpacity onPress={() => navigation.navigate('Home2')} style={{ backgroundColor: '#fff', borderRadius: 5, borderWidth: 0.2 }}>
                    <Text style={{ color: '#4AAC8D', marginHorizontal: 10, marginVertical: 5, fontWeight: 'bold', fontSize: 15 }}>Reduce 4 Cigarettes</Text>
                    <View style={{ marginHorizontal: 10, marginTop: 0, marginBottom: 30, flexDirection: 'row', justifyContent: 'space-between' }}>
                        <View>
                            <Text style={{ color: '#000', fontWeight: 'normal', fontSize: 15 }}>10.00 AM </Text>
                        </View>
                        <Image source={require('../assets/icon/arrow.png')} />
                    </View>

                </TouchableOpacity>
            </View>


        </View>
    );
};

export default Notifications2;