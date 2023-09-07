import React from 'react';
import { View, Text, StyleSheet, Platform, StatusBar, TouchableOpacity, Image } from 'react-native';
import { Video } from 'expo-av';
import {Feather} from '@expo/vector-icons'
import { useNavigation } from '@react-navigation/native';

function Reels(props) {
    const videoUri = require('../another_images/LeBron.mp4');
    const naviagtion = useNavigation()

    const handleNavigation = () => {
        naviagtion.navigate('Profile')
    }

    return (
        <View style={styles.container}>
            <Video
                source={videoUri}
                rate={1.0}
                volume={1.0}
                isMuted={true}
                resizeMode="cover"
                shouldPlay
                isLooping
                style={styles.video}
            />
            <View style={styles.firstView}>
                <TouchableOpacity style={styles.recentTextIconContainer}>
                    <Text style={[styles.recentText, {marginLeft: -12}]}>Reels</Text>
                    <Feather name='arrow-down' color={'#fff'} style={styles.iconArrowDown} size={20}  />
                </TouchableOpacity>
                <TouchableOpacity style={{marginHorizontal: 15}}>
                    <Feather name='camera' color={'#fff'} size={25} />
                </TouchableOpacity>
            </View>
            <View style={styles.secondView}>
                <TouchableOpacity style={styles.iconContainer}>
                    <Feather name='heart' color={'#fff'} size={25} />
                    <Text style={styles.iconText}>Likes</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.iconContainer}>
                    <Feather name='arrow-up-right' color={'#fff'} size={25} />
                    <Text style={styles.iconText}>9,177</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.iconContainer}>
                    <Feather name='more-vertical' color={'#fff'} size={25} />
                </TouchableOpacity>
                <TouchableOpacity style={styles.iconContainer}>
                    <Feather name='check-square' color={'#fff'} size={25} />
                </TouchableOpacity>
            </View>
            <View style={styles.thirdView}>
                <TouchableOpacity onPress={handleNavigation}>
                    <Image style={styles.img} source={require('../another_images/5.jpg')} />
                </TouchableOpacity>
                <TouchableOpacity onPress={handleNavigation}>
                    <Text style={styles.username}>Jordan Lopez</Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={handleNavigation} style={styles.followContainer}>
                    <Text style={styles.followText}>Follow</Text>
                </TouchableOpacity>
            </View>
            <View style={[styles.thirdView, {bottom: 10, left: 13}]}>
                <Text style={{color: '#fff', }}>3million merci❤️❤️❤️  </Text>
                <TouchableOpacity onPress={handleNavigation}>
                    <Text style={{color: '#fff', }}>@jordanlopez..</Text>
                </TouchableOpacity>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        marginTop: Platform.OS === 'android' ? StatusBar.currentHeight : 0,
        backgroundColor: 'black',
        alignItems: 'center',
        width: '100%',
        height: '100%',
    },
    thirdView: {
        position: 'absolute', 
        height: 70, 
        width: '70%', 
        flexDirection: 'row', 
        backgroundColor: 'transparent',  
        alignItems: 'center', 
        justifyContent: 'space-around', 
        bottom: 50, 
        left: 1
    },
    followText: {
        color: '#fff', 
        fontSize: 15
    },
    username: {
        color: '#fff', 
        fontSize: 17, 
        marginLeft: -22,
        fontWeight: 'bold', 
    },
    followContainer: {
        width:'25%', 
        height: '45%', 
        borderRadius: 10,
        backgroundColor: 'transparent', 
        alignItems: 'center', 
        justifyContent: 'center',
        borderWidth: 2,
        borderColor: '#fff',
        marginLeft: -18
    },
    video: {
        width: '100%',
        height: '100%',
    },
    iconArrowDown: {
        marginTop: 2.54
    },
    recentText: {
        color: '#fff', 
        fontSize: 20, 
        fontWeight: 'bold', 
    },
    recentTextIconContainer: {
        height: '100%', 
        backgroundColor: 'transparent',   
        width: '30%', 
        flexDirection: 'row', 
        alignItems: 'center', 
        justifyContent: 'center',
        marginLeft: 1
    },
    firstView: {
        position: 'absolute', 
        width: '100%', 
        flexDirection: 'row', 
        backgroundColor: 'transparent', 
        height: 55, 
        alignItems: 'center', 
        justifyContent: 'space-between'
    },
    secondView: {
        position: 'absolute',
        height: 210,
        backgroundColor: 'transparent', 
        width: 40,
        alignItems: 'center',
        justifyContent: 'space-between',
        bottom: 30, 
        right: 10,
    },
    iconContainer: {
        justifyContent: 'center', 
        alignItems: 'center', 
        marginVertical: 5
    },
    iconText: {
        color: 'white', 
        marginTop: 4
    },
    img: {
        width: 50,
        height: 50, 
        borderRadius: 25
    }
})

export default Reels;