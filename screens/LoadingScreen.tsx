import { StackScreenProps } from '@react-navigation/stack';
import * as React from 'react';
import { StyleSheet, View, ActivityIndicator } from 'react-native';

import { RootStackParamList } from '../types';

import firebase from 'firebase';

export default function LoadingScreen({
  navigation,
}: StackScreenProps<RootStackParamList, 'Loading'>) {
  const checkIfLoggedIn = () => {
    firebase.auth().onAuthStateChanged((user) => {
      if (user) navigation.navigate('Root');
      else navigation.navigate('Login');
    });
  };

  React.useEffect(() => {
    checkIfLoggedIn();
  }, []);

  return (
    <View style={styles.container}>
      <ActivityIndicator size="large" />
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
});
