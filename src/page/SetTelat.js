import React, { useState } from 'react';
import { Image, StyleSheet, Text, TouchableOpacity, TouchableOpacityBase, View, ScrollView } from 'react-native';
import { RadioButton } from 'react-native-paper';


const SetTelat = ({ navigation }) => {
    const [checked, setChecked] = useState();
    return (
        <ScrollView style={{ backgroundColor: 'white', flex: 1 }}>
            <View style={{ alignItems: 'center' }}>
                <Image source={require('../assets/icon/merokokbesar.png')} />
            </View>
            <View style={{ marginTop: 10, marginHorizontal: 20 }}>
                <Text style={{ color: '#000', fontWeight: '800', fontSize: 20 }}>Duration</Text>
            </View>

            <View style={{ marginTop: 10, marginHorizontal: 30, flexDirection: 'row', justifyContent: 'space-between' }}>
                <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                    <View style={{ alignItems: 'center', marginHorizontal: 10 }}>
                        <RadioButton
                            color='#6B739B'
                            value="easy"
                            status={checked === 'easy' ? 'checked' : 'unchecked'}
                            onPress={() => setChecked('easy')}
                        />
                        <Text style={{ color: '#000' }}>easy</Text>
                    </View>

                    <View style={{ alignItems: 'center', marginHorizontal: 10 }}>
                        <RadioButton
                            color='#6B739B'
                            value="medium"
                            status={checked === 'medium' ? 'checked' : 'unchecked'}
                            onPress={() => setChecked('medium')}
                        />
                        <Text style={{ color: '#000' }}>medium</Text>
                    </View>

                    <View style={{ alignItems: 'center', marginHorizontal: 10 }}>
                        <RadioButton
                            color='#6B739B'
                            value="hard"
                            status={checked === 'hard' ? 'checked' : 'unchecked'}
                            onPress={() => setChecked('hard')}
                        />
                        <Text style={{ color: '#000' }}>hard</Text>

                    </View>

                </View>
                <Text style={{ color: '#6B739B', fontWeight: '800', fontSize: 20 }}>30 DAYS</Text>
            </View>

            <View style={{ marginTop: 20, marginHorizontal: 20 }}>
                <Text style={{ textAlign: 'justify' }}>Quitting smoking doesn’t happen overnight. But, it can be incredibly easy when you follow a specific process that removes your need to smoke.</Text>
            </View>

            <View style={{ marginTop: 5, marginHorizontal: 20 }}>
                <Text style={{ textAlign: 'justify' }}>Welcome to MEROKOK, a 30 days at least program where we encourage you to quit smoking by sending mission per day.</Text>
            </View>

            <View style={{ marginTop: 30, marginHorizontal: 20 }}>
                <TouchableOpacity onPress={() => navigation.navigate('Home')} style={{}}>
                    <Text style={{ color: 'black', fontWeight: '900', fontSize: 18 }}>Set The Time</Text>
                </TouchableOpacity>
            </View>

            <View style={{ marginTop: 20, marginHorizontal: 20, marginVertical: 20 }}>
                <View style={{ marginHorizontal: 80 }}>
                    <TouchableOpacity onPress={() => navigation.navigate('Home2')} style={{ backgroundColor: '#6B739B', borderRadius: 10, alignItems: 'center', paddingVertical: 15, marginVertical: 5 }}>
                        <Text style={{ color: 'white' }}>Activate Program</Text>
                    </TouchableOpacity>
                </View>
            </View>

        </ScrollView>
    );
};

export default SetTelat;