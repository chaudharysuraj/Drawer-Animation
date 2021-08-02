import React from 'react'
import { View, Text, TextInput, StyleSheet } from 'react-native';
const Input = (props) => {
    return (
        <View
            style={[styles.container, {
                width: props.width,
                height: props.height,
            }]}>
            <Text
                style={[styles.text, {
                    fontSize: props.fontSize,

                }]}>{props.text}</Text>
            <TextInput
                keyboardType={props.keyboardType}
                onChangeText={props.onChange}
                secureTextEntry={props.secureTextEntry}
                selectionColor={"#e67e22"}
                value={props.value}
                style={[styles.input, {
                    fontSize: props.iFontSize,
                    width: props.width,
                }]}></TextInput>
        </View>
    )
}


const styles = StyleSheet.create({
    container: {
        justifyContent: 'center',
        marginVertical: '1.5%'
    },
    input: {
        height: 45,
        borderBottomWidth: 2,
        borderBottomColor: '#dfe6e9',
        color: '#000',
        fontWeight: 'bold'
    },
    text: {
        marginBottom: '-2.5%',
        textAlign: 'left',
        paddingLeft: '1.25%',
        borderWidth: 0,
        color: '#e67e22'
    },
})
export default Input
