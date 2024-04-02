import {View,Text, Platform, TouchableOpacity, ScrollView} from 'react-native'
/*import React from 'react'*/
import { SafeAreaView } from 'react-native-safe-area-context'
import { StatusBar } from 'expo-status-bar'
import { Bars3BottomLeftIcon, MagnifyingGlassIcon } from 'react-native-heroicons/outline';
import { styles } from '../theme';
import TrendingMovies from '../components/trendingMovies';
import React , { useState } from 'react';
import MovieList from '../components/movieList';
const android=Platform.OS=='android';
export default function HomeScreen(){
    const [trending,setTrending]=useState([1,2,3]);
    const [upcoming,setUpcoming]=useState([1,2,3]);
    const [topRated,setTopRated]=useState([1,2,3]);

    return(
        <View className="flex-1 bg-neutral-800">
          {/*search bar and logo*/}
          {/*İçerisinde bulunan içeriğin ekrandan taşmasını önler.*/}
          {/*margin-bottom(mb) belirli bir elementin alt kenarı ile ondan sonraki element arasında boşluk bırakır.*/}
          <SafeAreaView className={android? "-mb-3":"mb-2"}>
          <StatusBar style='light'/>
          {/*flex-row:öğeler yan yana sıralansın jus:içerilen öğeler arasında eşit boşluk bırakır*/}
          <View className="flex-row justify-between items-center mx-4">
          {/*stroke:çizgi kalınlıkları*/}
            <Bars3BottomLeftIcon size="30" strokeWidth={3} color="white" />
            <Text className="text-white text-3xl font-bold">
             <Text style={styles.text}>M</Text>ovies
            </Text>
            <TouchableOpacity>
                <MagnifyingGlassIcon size="30" strokeWidth={2} color="white"/>
            </TouchableOpacity>
          </View>
          </SafeAreaView>
          {/*ScrollView içeriğin dikey olarak kaydırılmasını sağlar ama false ile dikey kaydırma çubuğu görünmez yapıldı */}
          <ScrollView showsVerticalScrollIndicator={false}
          /*içeriğin alt kısmı ile ScrollView bileşeninin alt kenarı arasında 10 birimlik bir boşluk bırakır.*/
          contentContainerStyle={{paddingBottom:10}}
          >
          {/*Trending movies carousel*/}
          
        <TrendingMovies data={trending}/>
        
         {/*upcoming movies row*/}
         <MovieList title="Upcoming" data={upcoming}/>

          {/*en çok oy alan filmler için*/}
          <MovieList title="Top Rated" data={topRated}/>
          </ScrollView>
        </View>
    )
}
