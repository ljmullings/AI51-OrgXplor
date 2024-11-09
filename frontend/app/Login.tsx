import React from "react";
import { View, Text, TextInput, Button } from "react-native";
import { useForm, Controller } from "react-hook-form";
import { auth } from "../services/firebase";
import {
  signInWithEmailAndPassword,
  GoogleAuthProvider,
  signInWithPopup,
} from "firebase/auth";
import { startAsync } from "expo-auth-session";

const Login = () => {
  const { control, handleSubmit } = useForm<{
    email: string;
    password: string;
  }>();

  const onSubmit = async ({
    email,
    password,
  }: {
    email: string;
    password: string;
  }) => {
    try {
      await signInWithEmailAndPassword(auth, email, password);
      // Handle successful login
    } catch (error) {
      console.error("Login Error", error);
    }
  };

  const handleGoogleSignIn = async () => {
    const provider = new GoogleAuthProvider();
    try {
      await signInWithPopup(auth, provider);
      // Handle successful Google login
    } catch (error) {
      console.error("Google Sign-In Error", error);
    }
  };

  const handleDiscordSignIn = async () => {
    // Discord sign-in using AuthSession (or other methods)
    try {
      const result = await startAsync({
        authUrl:
          "https://discord.com/api/oauth2/authorize?client_id=YOUR_CLIENT_ID&redirect_uri=YOUR_REDIRECT_URI&response_type=token&scope=identify email",
      });
      if (result.type === "success") {
        // Handle successful Discord login
      }
    } catch (error) {
      console.error("Discord Sign-In Error", error);
    }
  };
  return (
    <View className="flex-1 justify-center p-4">
      <Text className="text-lg mb-4">Login</Text>
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
      <Button title="Login" onPress={handleSubmit(onSubmit)} />
      <Button title="Login with Google" onPress={handleGoogleSignIn} />
      <Button title="Login with Discord" onPress={handleDiscordSignIn} />
    </View>
  );
};

export default Login;
