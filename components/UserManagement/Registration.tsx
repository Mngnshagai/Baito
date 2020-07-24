import React, { useState, useRef } from 'react';
import { Text, View, TextInput, Button, StyleSheet, Alert, ScrollView } from 'react-native';
import CodeInput from 'react-native-confirmation-code-input';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#003f5c',
    alignItems: 'center',
    // justifyContent: 'center',
    paddingTop: 100,
  },
  logo: {
    fontWeight: 'bold',
    fontSize: 40,
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
    marginTop: 20,
    marginBottom: 10,
  },
  codeInput: {
    // position: 'absolute',
    // bottom: 300,
    marginTop: 20,
    alignItems: 'center',
    justifyContent: 'center',
  },
  displayNone: {
    display: 'none',
  },
  verificationText: {
    color: 'white',
    fontSize: 14,
  },
});

export const Registration = () => {
  // const divRef = React.forwardRef();
  const [confirm, setConfirm] = useState(false);
  const handleRegistration = () => {
    console.log('Registration handler');
    setConfirm(true);
  };

  const onFinishChecking = (isValid: any, code: any) => {
    console.log(`Validating ${isValid} and ${code}`);
    if (isValid) {
      // implement request method for backend
      Alert.alert('Registration completed!. Please Login');
      // implement redirect to login page
    } else {
      // divRef.clear();
      Alert.alert('Verification failed!');
    }
  };

  return (
    // <ScrollView>
    <View style={styles.container}>
      <Text style={styles.logo}>REGISTRATION</Text>
      <View style={styles.inputView}>
        <TextInput
          style={styles.inputText}
          placeholder="Phone number..."
          placeholderTextColor="#003f5c"
          // onChangeText={(number) => setPhoneNumber(number)}
        />
      </View>
      <View style={styles.inputView}>
        <TextInput
          style={styles.inputText}
          placeholder="Password..."
          placeholderTextColor="#003f5c"
          secureTextEntry
          // onChangeText={(number) => setPassword(number)}
        />
      </View>
      <View style={styles.inputView}>
        <TextInput
          style={styles.inputText}
          placeholder="Repeat password"
          placeholderTextColor="#003f5c"
          secureTextEntry
          // onChangeText={(number) => setPassword(number)}
        />
      </View>
      <View style={styles.loginBtn}>
        <Button color="#fff" title="Register" onPress={() => handleRegistration()} />
      </View>
      <View style={confirm ? styles.codeInput : styles.displayNone}>
        <View>
          <Text style={styles.verificationText}>Please insert verification code below!</Text>
        </View>
        <CodeInput
          // ref={divRef}
          keyboardType="numeric"
          codeLength={6}
          className="border-circle"
          compareWithCode="123456"
          autoFocus={true}
          space={18}
          codeInputStyle={{ fontWeight: '800' }}
          onFulfill={(isValid: any, code: any) => onFinishChecking(isValid, code)}
          containerStyle={{ marginTop: 30 }}
        />
      </View>
    </View>
    // </ScrollView>
  );
};
