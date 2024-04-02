/*Tüm film ayrıntılarını görüntülemek için oluşturuldu bu ekran*/
import {View,Text, ScrollView, TouchableOpacity} from 'react-native'
import React, { useEffect } from 'react'
import { useRoute } from '@react-navigation/native'
import { SafeAreaView } from 'react-native-safe-area-context';
import { ChevronLeftIcon } from 'react-native-heroicons/outline';
import { styles } from '../theme';
export default function MovieScreen(){
  const{params:item}=useRoute();
  useEffect(()=>{
      //call the movie details api
  },[item])
  
  

    
    return(
      <ScrollView
      contentContainerStyle={{paddingBottom:20}}
      className="flex-1 bg-neutral-900"
    >
         {/*back button and movie poster*/}
         <View className="w-full">
              <SafeAreaView className="absolute z-20 w-full flex-row justify-between items-center px-4">
                    <TouchableOpacity style={styles.background} className="rounded-xl p-1">
                        <ChevronLeftIcon size="28" strokeWidth={2.5} color="white"></ChevronLeftIcon>

                    </TouchableOpacity>

              </SafeAreaView>

         </View>
    </ScrollView>
    )
}