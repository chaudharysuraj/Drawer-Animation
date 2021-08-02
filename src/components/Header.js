import React from 'react'
import { View, Text, StyleSheet, Dimensions } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
const screen = Dimensions.get('window');

const Header = (props) => {
    return (
        <View style={styles.header}>
            <Icon name={props.icon} onPress={() => props.onPress()} style={styles.icon} />
            <Text style={styles.text}>{props.name}</Text>
        </View>
    )
};


const styles = StyleSheet.create({
    header: {
        height: screen.height * 0.1,
        width: screen.width,
        borderTopLeftRadius: 10,
        borderTopRightRadius: 10,
        elevation: 5,
        backgroundColor: '#fff',
        flexDirection: 'row',
        alignItems: 'center',
    },
    icon: {
        fontSize: 25,
        paddingLeft: '5%',
        color: '#f39c12'
    },
    text: {
        fontSize: 18,
        paddingLeft: '8%',
        color: '#f39c12'
    }
})


export default Header
