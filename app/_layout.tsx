import { useEffect, useState } from "react";
import { Stack } from "expo-router";
import * as SplashScreen from "expo-splash-screen";
import { View } from "react-native";
 
import { Authprovider } from "@/AuthPro/Authprovider";

export default function RootLayout() {
   return (
    <Authprovider>
      <Stack screenOptions={{ headerShown: false }} />
    </Authprovider>
  );
}
