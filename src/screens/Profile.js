import React from 'react';
import { View, Text, StyleSheet, Platform, StatusBar } from 'react-native';

function Profile(props) {
    return (
        <View style={styles.container}>
            <Text style={{color: 'dodgerblue', fontSize: 25, marginTop: 20}}> The Profile Page</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        marginTop: Platform.OS === 'android' ? StatusBar.currentHeight : 0,
        backgroundColor: 'black',
        alignItems: 'center',
    }
})

export default Profile;