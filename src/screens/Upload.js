import React from 'react';
import { View, Text, StyleSheet, Platform, StatusBar, FlatList, Image, TouchableOpacity } from 'react-native';
import {FontAwesome, Feather, MaterialIcons} from '@expo/vector-icons'
import { useNavigation } from '@react-navigation/native'; 

function Upload(props) {

    const navigation = useNavigation();

    const handleIconPress = () => {
        navigation.navigate('Home');
    };
    const handleIconPress2 = () => {
        navigation.navigate('Reels');
    };
    const handleIconPress3 = () => {
        navigation.navigate('Profile');
    };

    const DATA = [
        {
            image: require('../another_images/1.jpg'),
        },
        {
            image: require('../another_images/2.jpg'),
        },
        {
            image: require('../another_images/3.jpg'),
        },
        {
            image: require('../another_images/4.jpg'),
        },
        {
            image: require('../another_images/5.jpg'),
        },
        {
            image: require('../another_images/6.jpg'),
        },
        {
            image: require('../another_images/7.jpg'),
        },
        {
            image: require('../another_images/8.jpg'),
        },
        {
            image: require('../another_images/9.jpg'),
        },
        {
            image: require('../another_images/10.jpg'),
        },
        {
            image: require('../another_images/11.jpg'),
        },
        {
            image: require('../another_images/12.jpg'),
        },
        {
            image: require('../another_images/13.jpg'),
        },
        {
            image: require('../another_images/14.jpg'),
        },
        {
            image: require('../another_images/15.jpg'),
        },
        {
            image: require('../another_images/16.jpg'),
        },
        {
            image: require('../another_images/18.jpg'),
        },
        {
            image: require('../another_images/19.jpg'),
        },
        {
            image: require('../another_images/20.jpg'),
        },
        {
            image: require('../another_images/21.jpg'),
        },
        {
            image: require('../another_images/22.jpg'),
        },
        {
            image: require('../another_images/23.jpg'),
        },
        {
            image: require('../another_images/24.jpg'),
        },
        {
            image: require('../another_images/25.jpg'),
        },
        {
            image: require('../another_images/26.jpg'),
        },
        {
            image: require('../another_images/27.jpg'),
        },
        {
            image: require('../another_images/28.jpg'),
        },
        {
            image: require('../another_images/29.jpg'),
        },
        {
            image: require('../another_images/30.jpg'),
        },
        {
            image: require('../another_images/31.jpg'),
        },
        {
            image: require('../another_images/32.jpg'),
        },
        {
            image: require('../another_images/33.jpg'),
        },
        {
            image: require('../another_images/1.jpg'),
        },
        {
            image: require('../another_images/2.jpg'),
        },
        {
            image: require('../another_images/3.jpg'),
        },
        {
            image: require('../another_images/4.jpg'),
        },
        {
            image: require('../another_images/5.jpg'),
        },
        {
            image: require('../another_images/6.jpg'),
        },
        {
            image: require('../another_images/7.jpg'),
        },
        {
            image: require('../another_images/8.jpg'),
        },
        {
            image: require('../another_images/9.jpg'),
        },
        {
            image: require('../another_images/10.jpg'),
        },
        {
            image: require('../another_images/11.jpg'),
        },
        {
            image: require('../another_images/12.jpg'),
        },
        {
            image: require('../another_images/13.jpg'),
        },
        {
            image: require('../another_images/14.jpg'),
        },
        {
            image: require('../another_images/15.jpg'),
        },
        {
            image: require('../another_images/16.jpg'),
        },
        {
            image: require('../another_images/18.jpg'),
        },
        {
            image: require('../another_images/19.jpg'),
        },
        {
            image: require('../another_images/20.jpg'),
        },
        {
            image: require('../another_images/21.jpg'),
        },
        {
            image: require('../another_images/22.jpg'),
        },
        {
            image: require('../another_images/23.jpg'),
        },
        {
            image: require('../another_images/24.jpg'),
        },
        {
            image: require('../another_images/25.jpg'),
        },
        {
            image: require('../another_images/26.jpg'),
        },
        {
            image: require('../another_images/27.jpg'),
        },
        {
            image: require('../another_images/28.jpg'),
        },
        {
            image: require('../another_images/29.jpg'),
        },
        {
            image: require('../another_images/30.jpg'),
        },
        {
            image: require('../another_images/31.jpg'),
        },
        {
            image: require('../another_images/32.jpg'),
        },
        {
            image: require('../another_images/33.jpg'),
        },
        {
            image: require('../another_images/27.jpg'),
        },
        {
            image: require('../another_images/28.jpg'),
        },
    ]
    
    const imageSection = ({item}) => {
        return (
        <TouchableOpacity style={styles.imageWrapper}>
            <Image source={item.image} style={styles.image} />
        </TouchableOpacity>
        )
    }

    return (
        <View style={styles.container}>
            <View style={styles.firstView}>
                <View style={styles.iconTextContainer}>
                    <View style={styles.newPostIconContainer}>
                        <TouchableOpacity onPress={handleIconPress}>
                            <FontAwesome style={styles.icon} name='times' color={'#E0E0E0'} size={25} />
                        </TouchableOpacity>
                        <TouchableOpacity>
                            <Text style={styles.text1}>New post</Text>
                        </TouchableOpacity>
                    </View>
                    <TouchableOpacity onPress={handleIconPress2}>
                        <Text style={styles.text2}>Next</Text>
                    </TouchableOpacity>
                </View>
            </View>
            <View style={styles.secondView}>
                <FlatList numColumns={3} data={DATA} keyExtractor={(index, item) => item+index} renderItem={imageSection} />
            </View>
            <View style={styles.thirdView}>
                <View style={styles.recentsIconsContainer}>
                    <TouchableOpacity style={styles.recentTextIconContainer}>
                        <Text style={styles.recentText}>Recents</Text>
                        <Feather name='arrow-down' color={'#E0E0E0'} style={styles.iconArrowDown} size={20}  />
                    </TouchableOpacity>
                    <View style={styles.rightIconsContainer}>
                        <TouchableOpacity style={ styles.rightSingleIconContainer}>
                            <MaterialIcons name='add-to-photos' color={'#E0E0E0'} size={23} />
                        </TouchableOpacity>
                        <TouchableOpacity style={ styles.rightSingleIconContainer}>
                            <Feather name='camera' color={'#E0E0E0'} size={23} />
                        </TouchableOpacity>
                    </View>
                </View>
                <View style={styles.secondImageView}>
                    <FlatList numColumns={3} data={DATA} keyExtractor={(index, item) => item+index} renderItem={imageSection} />
                </View>
                <View style={styles.positionAbsoluteContainer}>
                    <TouchableOpacity>
                        <Text style={styles.bolderText}>POST</Text>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={handleIconPress3}>
                        <Text style={styles.lighterText}>STORY</Text>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={handleIconPress2}>
                        <Text style={styles.lighterText}>REEL</Text>
                    </TouchableOpacity>
                    <TouchableOpacity>
                        <Text style={styles.lighterText}>LIVE</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        marginTop: Platform.OS === 'android' ? StatusBar.currentHeight : 0,
        backgroundColor: 'black',
    },
    secondImageView: {
        flex: 0.85
    },
    bolderText: {
        color: '#E0E0E0', 
        marginHorizontal: 15, 
        fontWeight: 'bold', 
        fontSize: 17
    },
    lighterText: {
        color: '#E0E0E0', 
        marginHorizontal: 15, 
        fontWeight: '300', 
        fontSize: 17
    },
    positionAbsoluteContainer: {
        position: 'absolute', 
        flexDirection: 'row', 
        backgroundColor: 'black', 
        borderRadius:20, 
        width: 300, 
        height: 50, 
        alignItems: 'center',
        bottom: 5, 
        right: -20,
    },
    rightSingleIconContainer: {
        width: 35, 
        height: 35, 
        backgroundColor: 'grey', 
        borderRadius: 20, 
        alignItems: 'center', 
        justifyContent: 'center', 
        marginHorizontal: 10
    },
    rightIconsContainer: {
        height: '100%', 
        backgroundColor: '#000', 
        width: '30%', 
        flexDirection: 'row', 
        alignItems: 'center',
    },
    iconArrowDown: {
        marginTop: 2.54
    },
    recentText: {
        color: '#E0E0E0', 
        fontSize: 20
    },
    recentsIconsContainer: {
        width: '100%',
        backgroundColor: '#000',
        flex: 0.15,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between'
    },
    recentTextIconContainer: {
        height: '100%', 
        backgroundColor: '#000', 
        width: '30%', 
        flexDirection: 'row', 
        alignItems: 'center', 
        justifyContent: 'center',
        marginLeft: 3
    },
    secondView: {
        backgroundColor: '#000',
        flex: 0.47,
    },
    thirdView: {
        backgroundColor: 'black',
        flex: 0.45
    },
    imageWrapper: {
        width: 128,
        height: 110,
    }, 
    image: {
        height: '100%',
        width: '100%',
    },
    iconTextContainer: {
        width: '100%', 
        height: 50, 
        backgroundColor: '#000', 
        alignSelf: 'center', 
        flexDirection: 'row', 
        alignItems: 'center', 
        justifyContent: 'space-between'
    },
    newPostIconContainer: {
        width: '50%', 
        height: '100%', 
        flexDirection: 'row', 
        backgroundColor: '#000', 
        alignItems: 'center', 
        justifyContent: 'space-between'
    },
    icon: {
        marginHorizontal: 15
    }, 
    firstView: {
        backgroundColor: '#000',
        flex: 0.08, 
        alignItems: 'center', 
        justifyContent: 'center',
    }, 
    text1: {
        fontSize: 20,
        color: '#E0E0E0',
        marginRight: 45, 
        fontWeight: 'bold'
    },
    text2: {
        fontSize: 18,
        color: 'dodgerblue',
        marginRight: 20
    },
    
})

export default Upload;