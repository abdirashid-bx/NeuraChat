import { View, Text } from 'react-native'
import React from 'react'
import { supabase } from '@/lip/susbaseClient';
import 'react-native-url-polyfill/auto';
const index = () => {
    const user = supabase.auth.user(); // or from the signUp result
const username =user?.user_metadata.fullname
  return (
    <View className='flex-1 justify-center items-center'>
      <Text className='text-3xl color-white'>{username}</Text>
    </View>
  )
}

export default index