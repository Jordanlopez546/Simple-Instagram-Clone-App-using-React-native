import React from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity, TextInput, FlatList, KeyboardAvoidingView} from 'react-native';
import {FontAwesome, FontAwesome5, Feather, MaterialCommunityIcons, MaterialIcons} from '@expo/vector-icons'


function Post(props) {

    const DATA = [
        {
            posterImage: require('../images/chime.jpg'), 
            name1: "chididikee",
            name2: "Chidi my boy!",
            imagePost: require('../images/chike.jpg'), 
            caption: "Believe in what your doing!!"
        },
        {
            posterImage: require('../images/four.jpg'), 
            name1: "jordanlopez",
            name2: "In UK!",
            imagePost: require('../images/five.jpg'), 
            caption: "keep coding!!"
        },
        {
            posterImage: require('../images/one.jpg'), 
            name1: "spaceman",
            name2: "Just in Space!",
            imagePost: require('../images/two.jpg'), 
            caption: "To be a superhero!!"
        },
        {
            posterImage: require('../images/image.jpg'), 
            name1: "jiggymain",
            name2: "At my coding house!",
            imagePost: require('../images/aji.jpg'), 
            caption: "My Queen is so cute!!"
        },
    ]

    const RenderItem = ({item}) => {
        return(
            <View style={styles.itemContainer}>
                <View style={styles.nameImageIconContainer}>
                    <View style={styles.nameImageContainer}>
                        <TouchableOpacity>
                            <Image  style={styles.image} source={item.posterImage} />
                        </TouchableOpacity>
                        <View style={styles.nameContainer}>
                            <TouchableOpacity>
                                <Text style={styles.name1}>{item.name1}</Text>
                                <Text style={styles.name2}>{item.name2}</Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                    <View style={styles.iconContainer}>
                        <TouchableOpacity>
                            <Feather name='more-vertical' size={25} color={'#E0E0E0'}/>
                        </TouchableOpacity>
                    </View>
                </View>
                <View style={styles.postImageContainer}>
                    <Image source={item.imagePost} style={[styles.postImage]}/>
                </View>
                <View style={styles.iconContainer2}>
                    <View style={styles.iconsFirst}>
                        <TouchableOpacity>
                            <Feather size={26} style={styles.icon} name='heart' color={'#E0E0E0'}/>
                        </TouchableOpacity>
                        <TouchableOpacity>
                            <Feather size={26} style={styles.icon} name='message-circle' color={'#E0E0E0'}/>
                        </TouchableOpacity>
                        <TouchableOpacity>
                            <Feather size={26} style={styles.icon} name='arrow-up-right' color={'#E0E0E0'}/>
                        </TouchableOpacity>
                    </View>
                    <View style={styles.iconsSecond}>
                        <TouchableOpacity>
                            <Feather size={24} name='paperclip' color={'#E0E0E0'}/>
                        </TouchableOpacity>
                    </View>
                </View>
                <View style={styles.likeContainer}>
                    <Image style={styles.likeImage} source={require('../images/one.jpg')} />
                    <Text style={styles.likeText}>Liked by Only Programmers and BROgrammers</Text>
                </View>
                <View style={styles.nameCaptionContainer}>
                    <Text style={styles.nameFirst}>{item.name1}</Text>
                    <Text style={styles.nameSecond}>{item.caption}</Text>
                </View>
                <View style={styles.commentContainer}>
                    <Text style={styles.comment}>View all 208 comments</Text>
                </View>
                <View style={styles.addCommentContainer}>
                    <Image style={styles.commentImage}  source={require('../images/three.jpg')} />
                    <TextInput style={styles.input} placeholderTextColor={'grey'} placeholder='Add a comment....' />
                </View>
                <View>
                    <Text style={[styles.comment, {fontSize: 12}]}>2 hours ago</Text>
                </View>
            </View>
        )
    }
    return (
        <View style={{}}>
            <FlatList data={DATA} keyExtractor={(item, index) => index + item} renderItem={({item})=> <RenderItem item={item} />} />
        </View>
    );
}

const styles = StyleSheet.create({
    itemContainer: {
        backgroundColor: 'black',
        marginBottom: -35,
        height: 650, 
        marginTop: 6
    },
    nameImageIconContainer: {
        flexDirection: 'row', 
        width: '100%', 
        height: 50, 
        backgroundColor: '#000', 
        alignItems: 'center',
        justifyContent: 'space-between',
        marginBottom: 10
    },
    nameImageContainer: {
        flexDirection: 'row', 
        alignItems: 'center', 
        justifyContent: 'center'
    },
    image: {
        width: 40, 
        height: 40,
        borderRadius: 20, 
        marginHorizontal: 10
    },
    nameContainer: {
        marginLeft: 2
    },
    name1: {
        fontWeight: 'bold', 
        fontSize: 17, 
        color: '#E0E0E0'
    },
    name2: {
        fontSize: 13, 
        color: '#E0E0E0'
    },
    iconContainer: {
        justifyContent: 'center',
        alignItems: 'center', 
        marginHorizontal: 6
    }, 
    postImageContainer: {
        width: '100%',
        height: 365, 
        backgroundColor: 'black', 
        marginTop: -11,
    },
    postImage: {
        width: '100%',
        height: '100%',
        // resizeMode: 'contain'
    },
    iconContainer2: {
        width: '100%',
        height: '5%', 
        backgroundColor: 'black', 
        flexDirection: 'row', 
        alignItems: 'center', 
        justifyContent: 'space-between', 
        marginTop: 8
    }, 
    iconsFirst: {
        flexDirection: 'row', 
        marginHorizontal: 2, 
    }, 
    iconsSecond: {
        marginHorizontal: 12
    }, 
    icon: {
        marginHorizontal: 8
    }, 
    likeContainer: {
        width: '100%', 
        height: 45,
        backgroundColor: 'black', 
        flexDirection: 'row', 
        alignItems: 'center', 
        marginBottom: 2
    },
    likeImage: {
        width: 30, 
        height: 30,
        borderRadius: 15, 
        marginHorizontal: 8
    },
    commentImage: {
        width: 25, 
        height: 25,
        borderRadius: 15, 
        marginHorizontal: 15, alignSelf: 'center', 
    },
    likeText: {
        color: '#E0E0E0',
        fontSize: 15, 
        fontWeight: 'bold', 
    },
    nameCaptionContainer: {
        flexDirection: 'row',
        width: '100%', 
        height: 28, 
        backgroundColor: 'black',
        alignItems: 'center',
        marginTop: -12
    },
    nameFirst: {
        fontWeight: 'bold', 
        color: '#E0E0E0',
        fontSize: 16, 
        marginRight: 10,
        marginLeft: 15,
    },
    nameSecond: {
        color: '#E0E0E0',
        fontSize: 16, 
    },
    commentContainer: {
        width: '100%', 
        height: 23, 
        backgroundColor: 'black', 
        justifyContent: 'center',
        marginTop: -3
    },
    comment: {
        color: 'grey',
        fontSize: 14, 
        marginLeft: 15,
    },
    addCommentContainer: {
        width: '100%',
        height: 50,
        backgroundColor: 'black', 
        flexDirection: 'row',
    },
    input: {
        fontSize: 15, 
        color: '#E0E0E0', 
    },
    addCommentCo3ntainer: {},
    addCommentCon3tainer: {},
})

export default Post;