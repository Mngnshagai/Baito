import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, View, Text, Button, Alert } from 'react-native';
import { SafeAreaProvider } from 'react-native-safe-area-context';

import useCachedResources from './hooks/useCachedResources';
import useColorScheme from './hooks/useColorScheme';
import Navigation from './navigation';
import { TextInput, TouchableOpacity } from 'react-native-gesture-handler';
import Login from './components/UserManagement/Login';
import { UserContext } from './context/userContext';

export default function App() {
  const isLoadingComplete = useCachedResources();
  const colorScheme = useColorScheme();

  const defaultUserState: { user: null | any; isLogged: boolean; error: null | string } = {
    user: null,
    isLogged: false,
    error: null,
  };

  const [userStatus, setUserStatus] = React.useState(defaultUserState);

  function handleUserStatusChange() {
    // implement a method to send request to check if user is logged
    setUserStatus({ ...userStatus, isLogged: true });
  }

  // React.useEffect(handleUserStatusChange, []);

  if (!isLoadingComplete) {
    return null;
  } else if (userStatus.isLogged) {
    return (
      <UserContext.Provider value={userStatus.user}>
        <SafeAreaProvider>
          <Navigation colorScheme={colorScheme} />
          <StatusBar />
        </SafeAreaProvider>
      </UserContext.Provider>
    );
  } else {
    return <Login setUser={handleUserStatusChange} />;
  }
}
