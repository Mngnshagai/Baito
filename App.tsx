import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, View, Text, Button, Alert } from 'react-native';
import { SafeAreaProvider } from 'react-native-safe-area-context';

import useCachedResources from './hooks/useCachedResources';
import useColorScheme from './hooks/useColorScheme';
import Navigation from './navigation';
import { TextInput, TouchableOpacity } from 'react-native-gesture-handler';

const _PHONENUMBER = '123456';
const _PASSWORD = 'admin123';

export default function App() {
  const isLoadingComplete = useCachedResources();
  const colorScheme = useColorScheme();
  const [phoneNumber, setPhoneNumber] = React.useState<string>();
  const [password, setPassword] = React.useState<string>();
  const [isLogged, setIsLogged] = React.useState<boolean>(false);

  const checkAuth = () => {
    if (phoneNumber === _PHONENUMBER && password === _PASSWORD) {
      console.log('matching', phoneNumber, password);
      setIsLogged(true);
    } else {
      Alert.alert('Phone number or password is incorrect!');
      setIsLogged(false);
    }
  };

  if (!isLoadingComplete) {
    return null;
  } else if (isLogged) {
    return (
      <SafeAreaProvider>
        <Navigation colorScheme={colorScheme} />
        <StatusBar />
      </SafeAreaProvider>
    );
  } else {
    return (
      <View style={styles.container}>
        {/* <SafeAreaProvider>
          <Navigation colorScheme={colorScheme} />
          <StatusBar />
        </SafeAreaProvider> */}
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
        <TouchableOpacity>
          <Text style={styles.forgot}>Forgot Password?</Text>
        </TouchableOpacity>
        <View style={styles.loginBtn}>
          <Button color="#fff" title="LOGIN" onPress={() => checkAuth()} />
        </View>
        <TouchableOpacity>
          <Text style={styles.loginText}>Signup</Text>
        </TouchableOpacity>
      </View>
    );
  }
}

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
