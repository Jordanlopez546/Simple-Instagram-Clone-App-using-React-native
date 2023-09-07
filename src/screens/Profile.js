import React from 'react';
import { View, Text, StyleSheet, Platform, StatusBar, Image, TouchableOpacity, FlatList } from 'react-native';
import {Feather} from '@expo/vector-icons'


function Profile(props) {

    const DATA = [
        {
            image: require('../images/image.jpg'), 
            name: "StevJay",
        },
        {
            image: require('../another_images/9.jpg'), 
            name: "Python.",
        },
        {
            image: require('../images/five.jpg'), 
            name: "L."
        },
        {
            image: require('../another_images/11.jpg'), 
            name: "D."
        },
        {
            image: require('../images/two.jpg'), 
            name: "C."
        },
        {
            image: require('../images/four.jpg'), 
            name: "coder"
        },
        {
            image: require('../images/three.jpg'), 
            name: "lastborn"
        },
    ]

    const renderItem = ({item}) => {
        return (
            <TouchableOpacity style={styles.profileStoryContainer}>
                <Image style={styles.image} source={item.image} />
                <Text style={[styles.lightText, styles.bioText]}>{item.name}</Text>
            </TouchableOpacity>
        )
    }

    return (
        <View style={styles.container}>
            <View style={styles.firstView}>
                <TouchableOpacity style={styles.nameIconView}>
                    <Text style={styles.name}>jordanlopez</Text>
                    <Feather name='arrow-down' color={'#fff'} style={styles.iconArrowDown} size={20}  />
                </TouchableOpacity>
                <View style={styles.iconIconView}>
                    <TouchableOpacity>
                        <Feather name='plus-square' color={'#fff'} size={28}  />
                    </TouchableOpacity>
                    <TouchableOpacity>
                        <Feather name='menu' color={'#fff'} size={28}  />
                    </TouchableOpacity>
                </View>
            </View>
            <View style={styles.secondView}>
                <TouchableOpacity style={styles.imageContainer}>
                    <Image style={styles.image} source={require('../images/image.jpg')} />
                </TouchableOpacity>
                <View style={styles.postsFollowersFollowingcontainer}>
                    <TouchableOpacity style={styles.textContainer}>
                        <Text style={[styles.name, styles.boldText]}>1</Text>
                        <Text style={[styles.name, styles.lightText]}>Posts</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.textContainer}>
                        <Text style={[styles.name, styles.boldText]}>430</Text>
                        <Text style={[styles.name, styles.lightText]}>Followers</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.textContainer}>
                        <Text style={[styles.name, styles.boldText]}>795</Text>
                        <Text style={[styles.name, styles.lightText]}>Following</Text>
                    </TouchableOpacity>
                </View>
            </View>
            <View style={styles.thirdView}>
                <Text style={[styles.boldText, styles.profileName]}>Jordann The Programmer✝️</Text>
                <Text style={[styles.lightText, styles.figureCategoryName]}>Public figure</Text>
                <Text style={[styles.lightText, styles.bioText]}>Software Engineer | StevJay Innovations🦅</Text>
                <Text style={[styles.lightText, styles.bioText]}>@tijem86 Brand Manager❤️</Text>
            </View>
            <View style={[styles.thirdView, {marginBottom: 15}]}>
                <TouchableOpacity style={styles.professionalContainer}>
                    <Text style={[styles.lightText, styles.bioText]}>Professional dashboard</Text>
                    <Text style={[styles.lightText, styles.figureCategoryName, {color: 'black'}]}>88 accounts reached in the last 30 days.</Text>
                </TouchableOpacity>
                <View style={styles.profileContainer}>
                    <TouchableOpacity style={styles.editProfileContainer}>
                        <Text style={[styles.lightText, styles.bioText]}>Edit profile</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.editProfileContainer}>
                        <Text style={[styles.lightText, styles.bioText]}>Share profile</Text>
                    </TouchableOpacity>
                </View>
            </View>
            <View style={styles.fourthView}>
                <FlatList showsHorizontalScrollIndicator={false} horizontal data={DATA} keyExtractor={(item, index) => item+index} renderItem={renderItem} />
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
    profileStoryContainer: {
        width: 80, 
        height: 100, 
        alignItems: 'center'
    },
    thirdView: {
        width: '100%', 
        flex: 0.115, 
        backgroundColor: 'black', 
        marginHorizontal: 15,
    },
    professionalContainer: {
        width: '92%', 
        backgroundColor: 'grey', 
        height: 45, 
        borderRadius: 12, 
        justifyContent: 'center', 
        padding: 10, 
        marginBottom: 6
    },
    profileContainer: {
        width: '92%', 
        backgroundColor: 'black', 
        height: 40, 
        borderRadius: 12, 
        justifyContent: 'space-between', 
        flexDirection: 'row', 
        marginBottom: 6
    },
    editProfileContainer: {
        width: '49%', 
        backgroundColor: 'grey', 
        height: '100%', 
        borderRadius: 12, 
        justifyContent: 'center', 
        alignItems: 'center'
    },
    fourthView: {
        width: '96%', 
        flex: 0.12, 
        backgroundColor: 'black',
        alignItems: 'center',
        justifyContent: 'center', 
        alignSelf: 'flex-end'
    },
    profileName: {
        color: 'white', 
        fontSize: 15
    },
    figureCategoryName: {
        color: 'grey', 
        fontSize: 14, 
        fontWeight: '300'
    },
    bioText: {
        color: 'white', fontSize: 14
    },
    firstView: {
        width: '100%', 
        flex: 0.08,
        backgroundColor: 'black', 
        flexDirection: 'row', 
        alignItems: 'center', 
        justifyContent: 'space-between'
    },
    nameIconView: {
        width: '40%', 
        height: '100%', 
        backgroundColor: 'black', 
        flexDirection: 'row', 
        alignItems: 'center', 
        justifyContent: 'center'
    },
    iconIconView: {
        width: '30%', 
        height: '100%', 
        backgroundColor: 'black', 
        flexDirection: 'row', 
        alignItems: 'center', 
        justifyContent: 'space-evenly'
    },
    name: {
        color: 'white', 
        fontSize: 20
    },
    secondView: {
        width: '100%', 
        flex: 0.12,
        backgroundColor: 'black', 
        flexDirection: 'row', 
        alignItems: 'center', 
        justifyContent: 'space-around'
    },
    imageContainer: {
        width: '20%', 
        height: '100%', 
        backgroundColor: 'black', 
        alignItems: 'center', 
        justifyContent: 'center'
    },
    image: {
        width: '85%', 
        height: '70%', 
        borderRadius: 150
    },
    postsFollowersFollowingcontainer: {
        width: '60%', 
        height: '100%', 
        backgroundColor: 'black', 
        flexDirection: 'row', 
        justifyContent: 'space-between', 
        alignItems: 'center'
    },
    textContainer: {
        justifyContent: 'center', 
        alignItems: 'center'
    },
    boldText: {
        fontSize: 16, 
        fontWeight: 'bold'
    },
    lightText: {
        fontSize: 16, 
        fontWeight: 'normal'
    },
})

export default Profile;