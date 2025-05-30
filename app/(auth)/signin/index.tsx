import {
  View,
  Text,
  Image,
  TextInput,
  TouchableOpacity,
  ScrollView,
  KeyboardAvoidingView,
  Platform
} from 'react-native';
import React, { useState } from 'react';
import { useRouter } from 'expo-router';
import { supabase } from '@/lip/susbaseClient';
import 'react-native-url-polyfill/auto';

const index = () => {
  const routers = useRouter();

  const [email, setEmail] = useState('');
  const [passwrod, setpassword] = useState('');
  const [error, seterror] = useState('');

  const handlesingin = async () => {
    const { error: signInError } = await supabase.auth.signIn({
      email,
      password: passwrod
    });

    if (signInError) {
      seterror(signInError.message);
    } else {
      routers.replace('/');
    }
  };

  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === 'ios' ? 'padding' : undefined}
      keyboardVerticalOffset={Platform.OS === 'ios' ? 60 : 0}
      className="flex-1 bg-[#0B0F19]"
    >
      <ScrollView
        contentContainerStyle={{ flexGrow: 1 }}
        keyboardShouldPersistTaps="handled"
      >
        <View className="flex-1 items-center bg-[#0B0F19]">
          <Image
            source={require('@/assets/images/NeuraChat1.png')}
            className="w-[25rem] h-[15rem] mt-[3rem]"
          />
          <Text className="font-bold text-4xl text-white">Login in</Text>
          <Text className="font-light text-white mt-4 text-2xl">
            Welcome back again
          </Text>

          <TextInput
            placeholder="Email"
            className="bg-[#1F2937] w-[26rem] h-16 rounded-xl mt-5 p-5 text-center text-white placeholder:text-[#94A3B8]"
            value={email}
            onChangeText={setEmail}
            keyboardType="email-address"
            autoCapitalize="none"
          />
          <TextInput
            placeholder="Password"
            className="bg-[#1F2937] w-[26rem] h-16 rounded-xl mt-5 p-5 text-center text-white placeholder:text-[#94A3B8]"
            value={passwrod}
            onChangeText={setpassword}
            secureTextEntry
          />

          {error ? (
            <Text className="text-red-500 text-center mt-4">{error}</Text>
          ) : null}

          <View className="flex-row mt-5">
            <Text className="text-white text-xl">Don't have an account? </Text>
            <TouchableOpacity
              onPress={() => {
                routers.push('/(auth)/singup');
              }}
            >
              <Text className="text-white font-normal ml-1 text-xl border-b border-white">
                Sign up now
              </Text>
            </TouchableOpacity>
          </View>

          <TouchableOpacity
            className="w-40 h-11 justify-center items-center bg-[#6366F1] mt-8 rounded-3xl"
            onPress={handlesingin}
          >
            <Text className="text-white text-[1.3rem] text-center">
              Login in
            </Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </KeyboardAvoidingView>
  );
};

export default index;
