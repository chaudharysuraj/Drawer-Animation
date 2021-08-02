import React, { useState, useEffect, useRef } from 'react'
import { View, Animated, Text, Pressable, Dimensions, StyleSheet, StatusBar } from "react-native";
import { useDispatch, useSelector } from 'react-redux';
import Button from '../components/Button';
import SliderView from '../components/SliderView';
import Icon from 'react-native-vector-icons/Entypo';

const screen = Dimensions.get('window');

const Home = (props) => {
    const state = useSelector(state => state);
    const dispatch = useDispatch();

    const onLogout = () => {
        dispatch({ type: 'LOGOUT', name: '' });
        props.navigation.navigate('Login');
    }

    return (
        <View style={{ flex: 1 }}>
            <SliderView
                name={state.name}
                icon="menu"
                status={state.name}
                listItem={'Login'}
                onPress={() => onLogout()}
                child={
                    <View style={{ alignItems: 'center', zIndex: 2, alignSelf: 'center', marginVertical: '15%' }}>
                        <StatusBar backgroundColor={"#000"} />
                        <Button
                            height={screen.height * 0.075}
                            width={screen.width * 0.55}
                            elevation={8}
                            onPress={() => onLogout()}
                            fontSize={13}
                            margin={'35%'}
                            fontWeight={"bold"}
                            val={"LOGOUT"}
                        />
                    </View>
                }
            />
        </View>
    )
};

export default Home;
