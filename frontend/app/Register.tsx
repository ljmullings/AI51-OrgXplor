import React from 'react';
import { View, Text, TextInput, Button } from 'react-native';
import { useForm, Controller } from 'react-hook-form';
import { auth } from "../services/firebase";
import { createUserWithEmailAndPassword, GoogleAuthProvider, signInWithPopup } from 'firebase/auth';
import * as WebBrowser from 'expo-web-browser';
import { makeRedirectUri, useAuthRequest } from 'expo-auth-session';

const Register = () => {
  const { control, handleSubmit } = useForm<{ email: string; password: string }>();

  const onSubmit = async ({ email, password }: { email: string; password: string; }) => {
    try {
      await createUserWithEmailAndPassword(auth, email, password);
      // Handle successful registration
    } catch (error) {
      console.error('Registration Error', error);
    }
  };

  const handleGoogleSignUp = async () => {
    const provider = new GoogleAuthProvider();
    try {
      await signInWithPopup(auth, provider);
      // Handle successful Google registration
    } catch (error) {
      console.error('Google Sign-Up Error', error);
    }
  };
  const handleDiscordSignUp = async () => {
    // Discord sign-up using AuthSession
    try {
      const redirectUri = makeRedirectUri();
      const authUrl = `https://discord.com/api/oauth2/authorize?client_id=YOUR_CLIENT_ID&redirect_uri=${redirectUri}&response_type=token&scope=identify email`;
      const result = await WebBrowser.openAuthSessionAsync(authUrl, redirectUri);
      if (result.type === 'success') {
        // Handle successful Discord registration
      }
    } catch (error) {
      console.error('Discord Sign-Up Error', error);
    }
  };
  return (
    <View className="flex-1 justify-center p-4">
      <Text className="text-lg mb-4">Register</Text>
      <Controller
        control={control}
        name="email"
        render={({ field: { onChange, value } }) => (
          <TextInput
            placeholder="Email"
            value={value}
            onChangeText={onChange}
            className="border rounded p-2 mb-4"
          />
        )}
      />
      <Controller
        control={control}
        name="password"
        render={({ field: { onChange, value } }) => (
          <TextInput
            placeholder="Password"
            value={value}
            onChangeText={onChange}
            secureTextEntry
            className="border rounded p-2 mb-4"
          />
        )}
      />
      <Button title="Register" onPress={handleSubmit(onSubmit)} />
      <Button title="Register with Google" onPress={handleGoogleSignUp} />
      <Button title="Register with Discord" onPress={handleDiscordSignUp} />
    </View>
  );
};

export default Register;