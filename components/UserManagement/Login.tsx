import React, { useState } from 'react';
import { StyleSheet, View, Button, Text, Alert } from 'react-native';
import { TextInput, TouchableOpacity } from 'react-native-gesture-handler';
import { Registration } from './Registration';
import { ForgotPassword } from './ForgotPassword';

const _PHONENUMBER = '123456';
const _PASSWORD = 'admin123';

const Login = ({ setUser }: { setUser: () => void }) => {
  const [phoneNumber, setPhoneNumber] = useState<string>();
  const [password, setPassword] = useState<string>();
  const [state, setState] = useState<string>('login');

  const checkAuth = () => {
    if (phoneNumber === _PHONENUMBER && password === _PASSWORD) {
      console.log('matching', phoneNumber, password);
      // setIsLogged(true);
      setUser();
    } else {
      Alert.alert('Phone number or password is incorrect!');
    }
  };

  if (state === 'register') {
    return <Registration />;
  } else if (state === 'forgot') {
    return <ForgotPassword />;
  }

  return (
    <View style={styles.container}>
      <Text style={styles.logo}>Baito App</Text>
      <View style={styles.inputView}>
        <TextInput
          style={styles.inputText}
          placeholder="Phone number..."
          placeholderTextColor="#003f5c"
          onChangeText={(number) => setPhoneNumber(number)}
        />
      </View>
      <View style={styles.inputView}>
        <TextInput
          style={styles.inputText}
          placeholder="Password..."
          placeholderTextColor="#003f5c"
          secureTextEntry
          onChangeText={(number) => setPassword(number)}
        />
      </View>
      <Text style={styles.forgot} onPress={() => setState('forgot')}>
        Forgot Password?
      </Text>
      <View style={styles.loginBtn}>
        <Button color="#fff" title="LOGIN" onPress={() => checkAuth()} />
      </View>
      <Text style={styles.loginText} onPress={() => setState('register')}>
        Signup
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#003f5c',
    alignItems: 'center',
    justifyContent: 'center',
  },
  logo: {
    fontWeight: 'bold',
    fontSize: 50,
    color: '#fff',
    marginBottom: 40,
  },
  inputView: {
    width: '80%',
    backgroundColor: '#465881',
    borderRadius: 25,
    height: 50,
    marginBottom: 20,
    justifyContent: 'center',
    padding: 20,
  },
  inputText: {
    height: 50,
    color: 'white',
  },
  forgot: {
    color: 'white',
    fontSize: 11,
  },
  loginText: {
    color: 'white',
    fontSize: 14,
  },
  loginBtn: {
    width: '80%',
    backgroundColor: '#fb5b5a',
    borderRadius: 25,
    height: 50,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 40,
    marginBottom: 10,
  },
});

export default Login;
