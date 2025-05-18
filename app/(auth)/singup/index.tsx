import { View, Text, Image, TextInput, TouchableOpacity } from 'react-native'
import React, { useState } from 'react'
import { useRouter } from 'expo-router'
import {supabase} from '@/lip/susbaseClient'
import 'react-native-url-polyfill/auto';
 

const index = () => {
  const routers=useRouter();
  const [fullname,setFullname]=useState('');
  const [email,setEmail]=useState('');
  const [passwrod,setpassword]=useState('');
  const [error,seterror]=useState('');

const handleAI = async () => {
  const { user, error } = await supabase.auth.signUp(
    {
      email,
      password:passwrod,
    },
    {
      data: {
        fullname,
      },
    }
  );

  if (error) {
    seterror(error.message);
  } else {
    routers.replace('/(auth)/signin');
  }
};

 
   
  return (
    <View className='flex-1 items-center bg-[#0B0F19] flex-column'>
      <Image 
         source={require('@/assets/images/NeuraChat1.png')}
        className='w-[25rem] h-[15rem] mt-[7rem]'
      />
      <Text className='font-bold text-4xl text-white mb-'>Sing up</Text>
      <Text className='font-light text-white mt-4 text-2xl'>And Get Started With us</Text>
      
      <TextInput
        placeholder='Full name'
        className='bg-[#1F2937] w-[26rem] h-16 rounded-xl mt-5 p-5 text-center text-white placeholder:text-[#94A3B8]'
        value={fullname}
        onChangeText={setFullname}
      />
      <TextInput
        placeholder='Email'
        className='bg-[#1F2937] w-[26rem] h-16 rounded-xl mt-5 p-5 text-center text-white placeholder:text-[#94A3B8]'
         value={email}
        onChangeText={setEmail}
      />
      <TextInput
        placeholder='Password'
        className='bg-[#1F2937] w-[26rem] h-16 rounded-xl mt-5 p-5 text-center text-white placeholder:text-[#94A3B8]'
         value={passwrod}
        onChangeText={setpassword}
          secureTextEntry={true}
      />
        {error && <Text className='  mb-8 text-center font-bold color-red-600  absolute mt-[47rem]'>{error}</Text> }
   
      <View className='flex-row mt-3'>
        <Text className='text-white text-xl mt-2'>Already hava account?</Text>
        <TouchableOpacity className='mt-[0.35rem]' onPress={()=>{routers.push('/(auth)/signin')}}> 
          <Text className='text-white font-normal ml-1 text-xl border-b-2 border-b-white'>Login now</Text> 
        </TouchableOpacity>
      </View>
      
      <TouchableOpacity className='w-40 h-11 justify-center items-center text-white bg-[#6366F1] mt-8 rounded-3xl'
      onPress={handleAI}
      >
        <Text className='text-white text-[1.3rem] text-center'>Sing up</Text>
      </TouchableOpacity>
    </View>
  )
}

export default index
