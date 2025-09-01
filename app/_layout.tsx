import { Stack } from 'expo-router';
import {CustomBackButton} from '../components/ui/back-button';

export default function RootLayout() {
  return (
    <Stack
      screenOptions={{
        headerStyle: { backgroundColor: "#EFEFEF" },
        headerLeft: () => <CustomBackButton />,
        headerTitleAlign: 'center',
        headerTintColor: "navy",
        headerTitleStyle: { fontWeight: 'bold' },
        headerShadowVisible: false,
      }}
    >
      <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
      <Stack.Screen name="my-voucher" options={{ title: "My Voucher" }} />
      <Stack.Screen name="notifications" options={{ title: "Notifications" }} />
      <Stack.Screen name="benefits" options={{ title: "Super Chevrolet Service" }} />
    </Stack>
  );
}