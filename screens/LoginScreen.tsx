import { StackScreenProps } from '@react-navigation/stack';
import * as React from 'react';
import { StyleSheet, Text, Button, View } from 'react-native';

import { RootStackParamList } from '../types';

import * as Google from 'expo-google-app-auth';

export default function LoginScreen({ navigation }: StackScreenProps<RootStackParamList, 'Login'>) {
  const signInWithGoogleAsync = async () => {
    try {
      const result = await Google.logInAsync({
        // androidClientId: YOUR_CLIENT_ID_HERE,
        behavior: 'web',
        iosClientId: '506347826495-m4uqnhmit2mvdc49kanjeduamquqdgba.apps.googleusercontent.com',
        scopes: ['profile', 'email'],
      });

      if (result.type === 'success') {
        console.log('result.accessToken: ', result.accessToken);
        navigation.navigate('Root');
        return result.accessToken;
      } else {
        return { cancelled: true };
      }
    } catch (e) {
      return { error: true };
    }
  };

  return (
    <View style={styles.container}>
      <Button title="Sign in with google" onPress={() => signInWithGoogleAsync()} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  link: {
    marginTop: 15,
    paddingVertical: 15,
  },
  linkText: {
    fontSize: 14,
    color: '#2e78b7',
  },
});
