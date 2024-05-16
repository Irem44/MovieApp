import {View,Text, Platform, TouchableOpacity, ScrollView} from 'react-native'
/*import React from 'react'*/
import { SafeAreaView } from 'react-native-safe-area-context'
import { StatusBar } from 'expo-status-bar'
import { Bars3BottomLeftIcon, MagnifyingGlassIcon } from 'react-native-heroicons/outline';
import { styles } from '../theme';
import TrendingMovies from '../components/trendingMovies';
import React , { useEffect, useState } from 'react';
import MovieList from '../components/movieList';
import { useNavigation } from '@react-navigation/native';
import Loading from '../components/loading';
import { fetchTopRatedMovies, fetchTrendingMovies, fetchUpcomingMovies } from '../api/moviedb';
const android=Platform.OS=='android';
export default function HomeScreen(){
    const [trending,setTrending]=useState([]);
    const [upcoming,setUpcoming]=useState([]);
    const [topRated,setTopRated]=useState([]);
    const [loading,setLoading]=useState(true);
    const navigation=useNavigation();
    
    useEffect(()=>{
           getTrendingMovies();
           getUpcomingMovies();
           getTopRatedMovies();
    },[])


    const getTrendingMovies=async ()=>{
      const data=await fetchTrendingMovies();
      //console.log('got trending movies:', data);
      if(data && data.results) setTrending(data.results);
      setLoading(false);
    }
    const getUpcomingMovies=async ()=>{
      const data=await fetchUpcomingMovies();
      //console.log('got upcoming movies:', data);
      if(data && data.results) setUpcoming(data.results);
    }
    const getTopRatedMovies=async ()=>{
      const data=await fetchTopRatedMovies();
      //console.log('got top rated movies:', data);
      if(data && data.results) setTopRated(data.results);
    }

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
            <TouchableOpacity onPress={()=> navigation.navigate('Search')}>
                <MagnifyingGlassIcon size="30" strokeWidth={2} color="white"/>
            </TouchableOpacity>
          </View>
          </SafeAreaView>
          {
            loading?(
              <Loading/>
            ):(
              <ScrollView showsVerticalScrollIndicator={false}
                  contentContainerStyle={{paddingBottom:10}}
                  >
                  {/*Trending movies carousel*/}
                  
               { trending.length>0 && <TrendingMovies data={trending}/>}
                
                {/*upcoming movies row*/}
                <MovieList title="Upcoming" data={upcoming}/>

                  {/*en çok oy alan filmler için*/}
                  <MovieList title="Top Rated" data={topRated}/>
          </ScrollView>
            )
          }

          
        </View>
    )
}
