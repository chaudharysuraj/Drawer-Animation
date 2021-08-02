import React, { useState } from 'react'
import { View, Animated, Text, Pressable,  Dimensions, StyleSheet, PanResponder } from "react-native";
import IconEntypo from 'react-native-vector-icons/Entypo';
import Header from './Header';

const screen = Dimensions.get('window');

const SliderView = (props) => {

    const [slide, setSlide] = useState(false)
    const position = new Animated.ValueXY({ x: 0, y: 0 });
    const scale = new Animated.ValueXY({ x: 0, y: 1 });
    const borderRadius = new Animated.Value(0);

    const pan = PanResponder.create({
        onMoveShouldSetPanResponder: (e, gestureState) => {
            return Math.abs(gestureState.dx) > 5;
        },
        onStartShouldSetPanResponderCapture: (e, gestureState) => {
            return Math.abs(gestureState.dx) > 5;
        },
        onPanResponderMove: (e, gesture) => {
            if (gesture.dx > 0) {
                position.setValue({ x: gesture.dx, y: 0 })
            }
        },
        onPanResponderRelease: (e, gesture) => {
            if (gesture.dx > screen.width * 0.35) {
                shift();
            }
            else {
                Animated.timing(position, {
                    toValue: { x: 0, y: 0 },
                    useNativeDriver: true,
                    duration: 250
                }).start();
            }
        }
    });

    const shift = () => {
        Animated.timing(position, {
            toValue: { x: screen.width, y: 0 },
            useNativeDriver: true,
            duration: 350,
        }).start(() => resize());
    };

    const resize = () => {
        Animated.timing(position, {
            toValue: { x: screen.width * 0.75, y: 0 },
            useNativeDriver: true,
            duration: 300,
        }).start();
        Animated.timing(scale, {
            toValue: { x: 0, y: 0.68 },
            useNativeDriver: true,
            duration: 300,
        }).start();
        Animated.timing(borderRadius, {
            toValue: 15,
            useNativeDriver: true,
            duration: 200,
        }).start();

        setTimeout(() => {
            setSlide(false)
        }, 1500);
    };

    const getBack = () => {
        Animated.timing(position, {
            toValue: { x: 0, y: 0 },
            useNativeDriver: true
        }).start();
        Animated.timing(scale, {
            toValue: { x: 0, y: 1 },
            useNativeDriver: true
        }).start();
        Animated.timing(borderRadius, {
            toValue: 0,
            useNativeDriver: true,
            duration: 500,
        }).start();

        setTimeout(() => {
            setSlide(false)
        }, 1500);
    };

    return (
        <Pressable onPress={() => getBack()} style={styles.container}>
            <>
                <View
                    style={{ flexDirection: 'row', alignItems: 'center', paddingTop: '5%', paddingLeft: '5%' }}>
                    <IconEntypo
                        name="cross"
                        style={{ fontSize: 25, color: '#fff' }}
                        onPress={() => getBack()} />
                    <Text
                        style={{ color: '#fff', fontSize: 16, paddingLeft: '15%' }}>{props.status}</Text>
                </View>
                <Pressable
                    style={{ marginVertical: '35%', paddingLeft: '5%' }}
                    onPress={() => props.onPress()}>
                    <Text
                        style={{ color: '#f39c12', fontSize: 18 }}>{props.listItem}</Text>
                </Pressable>
            </>
            <Animated.View
                {...pan.panHandlers}
                style={[
                    styles.slider, {
                        transform: [
                            { translateX: position.x },
                            { translateY: position.y },
                            { scaleY: scale.y }
                        ],
                        borderRadius: borderRadius,
                    }]
                }>
                {/* <View style={styles.header}>
                    <Icon name="menu" onPress={() => shift()} style={styles.icon} />
                    <Text style={styles.text}>{props.name}</Text>
                </View> */}
                <Header
                    icon={props.icon}
                    name={props.name}
                    onPress={() => shift()}
                />
                {props.child}
            </Animated.View>
        </Pressable >
    )
};


const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#363635'
    },
    slider: {
        width: screen.width,
        height: screen.height,
        alignItems: 'flex-start',
        backgroundColor: '#fff',
        elevation: 25,
        position: 'absolute',
        left: 0,
        top: 0
    },
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
});



export default SliderView;
