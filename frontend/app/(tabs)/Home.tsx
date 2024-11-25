import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Stack } from 'expo-router';
import { StyleSheet, View } from 'react-native';
import React, { useEffect, useState } from 'react';
import { onAuthStateChanged, User } from 'firebase/auth';

import { ScreenContent } from '~/components/ScreenContent';
import { firebaseAuth } from '~/utils/firebase';

const MainStack = createNativeStackNavigator();

const InsideStack = createNativeStackNavigator();

function InsideLayout() {
  return (
    <InsideStack.Navigator>
      <ScreenContent path="frontend/components/Home/Header.tsx" title="Header" />
    </InsideStack.Navigator>
  );
}

const [user, setUser] = useState<User | null>(null);

useEffect(() => {
  onAuthStateChanged(firebaseAuth, (user) => {
    console.log('user', user);
    setUser(user);
  });
}, []);

return (
  
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 24,
  },
});
