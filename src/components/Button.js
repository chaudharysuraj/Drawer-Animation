import React, { useState } from 'react'
import { View, Text, StyleSheet, Pressable } from 'react-native';

const Button = (props) => {
    const [scale, setscale] = useState(1);

    return (
        <View
            style={[styles.container, {
                height: props.height,
                width: props.width,
                marginVertical: props.margin,
                elevation: props.elevation,
                transform: [{ scale: scale }],
            }]}>
            <Pressable
                underlayColor={"#8a795d"}
                style={[styles.pressable, {
                    height: props.height,
                    width: props.width,
                }]}
                onPress={() => props.onPress()}
                onPressIn={() => setscale(0.95)}
                onPressOut={() => setscale(1)}>
                <Text
                    style={[styles.text, {
                        fontSize: props.fontSize,
                        fontWeight: props.fontWeight,
                        transform: [{ scale: scale }]
                    }]}>
                    {props.val}</Text>
            </Pressable>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        borderRadius: 25,
        backgroundColor: '#e67e22',
    },
    text: {
        color: '#fff',
    },
    pressable: {
        borderRadius: 25,
        justifyContent: 'center',
        alignItems: 'center'
    }
})



export default Button;