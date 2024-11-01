import React from "react";
import { View, Text, Button } from "react-native";
import { useNavigation } from "@react-navigation/native";

const GetStarted = () => {
  const navigation = useNavigation();

  const handleNext = () => {
    navigation.navigate("OrganizationList");
  };

  return (
    <View className="flex-1 justify-center p-4">
      <Text className="text-lg mb-4">Tell us about your interests!</Text>
      {/* TODO: Add form inputs to collect interests/hobbies */}
      <Button title="Find Organizations" onPress={handleNext} />
    </View>
  );
};

export default GetStarted;
