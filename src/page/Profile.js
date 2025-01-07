import React from 'react';
import { Image, StyleSheet, Text, TouchableOpacity, TouchableOpacityBase, View } from 'react-native';
import { launchCamera, launchImageLibrary } from 'react-native-image-picker';

const Profile = ({ navigation }) => {
    const pickimage = () => {
        launchImageLibrary()

    }
    return (
        <View style={{ backgroundColor: '#fff', flex: 1 }}>
            <View style={{ marginTop: 40, marginHorizontal: 20, alignItems: 'center' }}>
                <TouchableOpacity onPress={pickimage}>
                    <Image source={require('../assets/icon/ava.png')} />
                </TouchableOpacity>
                <View style={{ marginTop: 20 }}>
                    <Text style={{ color: 'black', fontWeight: '800', fontSize: 20 }}>SevinW</Text>
                </View>
            </View>
            <View style={{ marginTop: 60, marginHorizontal: 20 }}>
                <View style={{ marginHorizontal: 50 }}>
                    <TouchableOpacity onPress={() => navigation.navigate('UpdateProfile')} style={{ flexDirection: 'row', borderWidth: 0.2, backgroundColor: '#fff', borderRadius: 10, alignItems: 'center', paddingVertical: 10, marginVertical: 15 }}>
                        <Image style={{ marginHorizontal: 20 }} source={require('../assets/icon/account.png')} />
                        <Text>Profile Update</Text>
                    </TouchableOpacity>

                    <TouchableOpacity onPress={() => navigation.navigate('ForgotPassword3')} style={{ flexDirection: 'row', borderWidth: 0.2, backgroundColor: '#fff', borderRadius: 10, alignItems: 'center', paddingVertical: 10, marginVertical: 15 }}>
                        <Image style={{ marginHorizontal: 20 }} source={require('../assets/icon/settings.png')} />
                        <Text>Reset Password</Text>
                    </TouchableOpacity>

                    <TouchableOpacity onPress={() => navigation.navigate('Splash')} style={{ flexDirection: 'row', backgroundColor: '#4AAC8D', borderRadius: 20, justifyContent: 'center', paddingVertical: 10, marginVertical: 15, marginHorizontal: 25, marginTop: 50 }}>
                        {/* <Image style={{ marginHorizontal: 20 }} source={require('../assets/icon/logout.png')} /> */}
                        <Text style={{ color: '#fff' }}>Log Out</Text>
                    </TouchableOpacity>
                </View>

            </View>

        </View>
    );
};

export default Profile;