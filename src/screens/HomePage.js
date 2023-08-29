import React, { useState } from 'react';
import {View, Text, StyleSheet, Platform, StatusBar, SafeAreaView, ScrollView, TouchableOpacity} from 'react-native'
import InstagramHeader from './InstagramHeader';
import {FontAwesome, FontAwesome5, Feather, MaterialCommunityIcons, MaterialIcons} from '@expo/vector-icons'
import Stories from './Stories';
import Post from './Post';
import { NavigationContainer } from '@react-navigation/native';


function HomePage(props) {

    const [underLineText, setUnderLineText] = useState('JayStagram');

    const handleTabPress = (tab) => {
        setUnderLineText(tab);
    }

    return (
        <SafeAreaView style={styles.container}>
            <View style={styles.mainView}>
                <View style={styles.nameContainer}>
                    <TouchableOpacity onPressIn={()=>handleTabPress('JayStagram')} style={[underLineText==='JayStagram' && '']}>
                        <Text style={styles.name}>JayStagram</Text>
                    </TouchableOpacity>
                </View>
                <View style={styles.iconContainer}>
                    <TouchableOpacity>
                        <Feather style={styles.icon} color={'#E0E0E0'} name='heart' size={28}/>
                    </TouchableOpacity>
                    <TouchableOpacity>
                        <Feather name='message-circle' color={'#E0E0E0'} size={28} />
                    </TouchableOpacity>
                </View>
            </View>
            <Stories/>
            <View style={styles.thirdView}>
                {underLineText === 'JayStagram' && <Post />}
            </View>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#000',
        marginTop: Platform.OS === 'android' ? StatusBar.currentHeight : 0
    },
    nameContainer: {
        marginHorizontal: 15
    },
    thirdView: {
        flex: 1,
    },
    name: {
        color: '#E0E0E0',
        fontSize: 27, 
        fontWeight: 'bold',
    },
    iconContainer: {
        marginHorizontal: 15, 
        flexDirection: 'row',
    },
    icon: {
        marginHorizontal: 20, 
    },
    mainView: {
        backgroundColor: '#000',
        width: '100%',
        height: 75,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingHorizontal: 0,
        flex: 0.08,
        marginTop: 10
    },
    secondView: {
        height: 95,
        backgroundColor: '#075E54',
        width: '100%',
        flexDirection: 'row',
        // justifyContent: 'space-around',
        alignItems: 'center',
    },
});

export default HomePage;