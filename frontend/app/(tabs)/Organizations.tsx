import { Stack } from 'expo-router';
import { StyleSheet, View } from 'react-native';

import { ScreenContent } from '~/components/ScreenContent';

export default function Home() {
  return (
    <>
      <Stack.Screen options={{ title: 'Organizations' }} />
      <View style={styles.container}>
        <ScreenContent path="app/(tabs)/index.tsx" title="Tab One" />
        <ScreenContent path="app/(tabs)/Organizations.tsx" title="Organizations" />
        <ScreenContent path="app/(tabs)/Test.tsx" title="Test" />
        <ScreenContent path="app/(tabs)/Events.tsx" title="Events" />
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 24,
  },
});
