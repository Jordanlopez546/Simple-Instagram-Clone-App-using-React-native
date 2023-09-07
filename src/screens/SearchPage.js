import React from 'react';
import { View, Text, StyleSheet, Platform, StatusBar, TextInput, Image, FlatList } from 'react-native';
import { Feather } from '@expo/vector-icons'

function SearchPage(props) {

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
        <View style={styles.imageWrapper}>
            <Image source={item.image} style={styles.image} />
        </View>
        )
    }

    return (
        <View style={styles.container}>
            <View style={styles.firstView}>
                <View style={styles.searchIconSearchContainer}>
                    <Feather style={styles.icon} name='search' color={'#E0E0E0'} size={25} />
                    <TextInput style={styles.search} placeholder='Search' placeholderTextColor={'#E0E0E0'} />
                </View>
            </View>
            <View style={styles.secondView}>
                <FlatList numColumns={3} data={DATA} keyExtractor={(index, item) => item+index} renderItem={imageSection} />
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
    searchIconSearchContainer: {
        width: 350, 
        height: 40, 
        backgroundColor: 'grey', 
        alignSelf: 'center', 
        borderRadius: 15, 
        flexDirection: 'row', 
        alignItems: 'center', 
        justifyContent: 'space-between'
    },
    search: {
        width: '90%', 
        height: '100%', 
        padding: 10, 
        fontSize: 18
    },
    icon: {
        margin: 5
    }, 
    firstView: {
        backgroundColor: '#000',
        flex: 0.1, 
        alignItems: 'center', 
        justifyContent: 'center',
    }, 
    secondView: {
        backgroundColor: '#000',
        flex: 0.9,
    }, 
    imageWrapper: {
        width: 128,
        height: 110,
    }, 
    image: {
        height: '100%',
        width: '100%',
    }
})

export default SearchPage;