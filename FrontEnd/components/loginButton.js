import React from 'react';
import {View , TouchableOpacity , Text} from 'react-native';
import { loginButtonStyle } from '../styles/components';

const LoginButton = ()=> {
    return (
        <View>
            <TouchableOpacity style={loginButtonStyle.btn}>
                <Text style={loginButtonStyle.login}>Log in</Text>
            </TouchableOpacity>
            <View style={loginButtonStyle.container}>
                <Text style={loginButtonStyle.registerDesc}>Don’t have an Account?</Text><TouchableOpacity><Text style={loginButtonStyle.registerBtn}> Register</Text></TouchableOpacity>
            </View>

        </View>
    )
}
export default LoginButton;