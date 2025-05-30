import { useEffect } from "react";
import { useRouter } from "expo-router";
import { View, ActivityIndicator } from "react-native";
import { UseAuth } from "@/AuthPro/Authprovider";

export default function Index() {
  const router = useRouter();
  const { user } =  UseAuth();

  useEffect(() => {
   if(user===undefined) return
    if (!user) {
      router.replace("/(auth)/home");
    } else {
      router.replace("/(tabs)/home");
    }
  }, [user]);

  if (user === undefined) {
    return (
      <View className="flex-1 justify-center items-center bg-black">
        <ActivityIndicator size={"large"} color="white" />
      </View>
    );
  }

  return null; // We don’t render <Redirect /> — we’re using router.replace()
}
