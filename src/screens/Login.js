import React, { useState } from 'react'
import { View, Dimensions, StatusBar, ToastAndroid } from "react-native";
import { useDispatch, useSelector } from 'react-redux';
import Input from '../components/Input';
import Button from '../components/Button';
import Header from '../components/Header';
const screen = Dimensions.get('window');

const Login = (props) => {

    const [name, setName] = useState('');
    const [pass, setPass] = useState('');
    const dispatch = useDispatch();

    const onLogin = () => {
        if (name.toString().trim() === '' || pass.toString().trim() === '') {
            ToastAndroid.show('Invalid Name and Password', ToastAndroid.LONG);
            return false;
        }
        dispatch({ type: 'LOGIN', name: name });
        props.navigation.navigate('Home');
        setName('');
        setPass('')
    }

    return (
        <View style={{ flex: 1 }}>
            <Header
                icon="account"
                name="Login"
                onPress={() => null}
            />
            <View style={{ alignItems: 'center', alignSelf: 'center', marginVertical: '15%' }}>
                <StatusBar backgroundColor={"#000"} />
                <Input
                    width={screen.width * 0.85}
                    height={screen.height * 0.125}
                    text={'Username'}
                    fontSize={13}
                    iFontSize={15}
                    value={name}
                    onChange={val => setName(val)}
                >
                </Input>
                <Input
                    width={screen.width * 0.85}
                    height={screen.height * 0.125}
                    text={'Password'}
                    fontSize={13}
                    iFontSize={15}
                    value={pass}
                    secureTextEntry={true}
                    onChange={val => setPass(val)}
                >
                </Input>
                <Button
                    height={screen.height * 0.075}
                    width={screen.width * 0.55}
                    elevation={8}
                    onPress={() => onLogin()}
                    fontSize={13}
                    margin={'5%'}
                    fontWeight={"bold"}
                    val={"LOGIN"}
                />
            </View>
        </View>
    )
};

export default Login;
