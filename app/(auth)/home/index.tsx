import {
  View,
  Text,
  Image,
  ScrollView,
  TouchableOpacity,
} from 'react-native';
import React from 'react';
import { useRouter } from 'expo-router';
import { supabase } from '@/lip/susbaseClient';
import 'react-native-url-polyfill/auto';

const index = () => {
  const router = useRouter();

  return (
    <ScrollView contentContainerStyle={{ flexGrow: 1 }}>
      <View className="flex-1 justify-center items-center bg-[#0B0F19] px-6 pb-20 pt-16">
        <Image
         source={require('@/assets/images/Robot face-pana.png')}
           className="w-[25rem] h-[20rem] mt-[-2rem]"
          resizeMode="contain"
        />

        <Text className="text-white text-3xl font-semibold mb-2 text-center">
          Welcome to NeuraChat
        </Text>

        <Text className="text-white   text-center text-2xl mt-2 leading-relaxed">
          NeuraChat — your personal AI assistant 
          Ask anything, anytime.{"\n"}
          Let’s get started!
        </Text>

          <TouchableOpacity
          className="w-full max-w-[20rem] h-[3.5rem] justify-center items-center bg-[#6366F1] mt-12 rounded-full shadow-md active:opacity-80"
          onPress={() => router.push('/(auth)/signin')}
        >
          <Text className="text-white text-lg font-medium">
            Get started now
          </Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
};

export default index;
