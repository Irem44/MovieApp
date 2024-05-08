/*Tüm film ayrıntılarını görüntülemek için oluşturuldu bu ekran*/
import {View,Text, ScrollView, TouchableOpacity,Dimensions,Image} from 'react-native'
import React, { useEffect, useState } from 'react'
import { useNavigation, useRoute } from '@react-navigation/native'
import { SafeAreaView } from 'react-native-safe-area-context';
import { ChevronLeftIcon} from 'react-native-heroicons/outline';
import {HeartIcon } from 'react-native-heroicons/solid';
import { styles, theme } from '../theme';
import { Platform } from 'react-native';
import Cast from '../components/cast';
import MovieList from '../components/movieList'
import { LinearGradient } from 'expo-linear-gradient';
import Loading from '../components/loading';
var {width,height}=Dimensions.get('window');
const android=Platform.OS=='android';
const topMargin=android? '':'mt-3';

export default function MovieScreen(){
  const{params:item}=useRoute();
  const [isFavourite,toggleFavourite]=useState(false);
  const navigation=useNavigation();//geriye dönme aktif
  const [cast,setCast]=useState([1,2,3,4,5]);
  const [similarMovies,setSimilarMovies]=useState([1,2,3,4,5]);
  const [loading,setLoading]=useState(false);


  let movieName="Shrek";

  useEffect(()=>{
      //call the movie details api
  },[item])
  
  

    
    return(
      <ScrollView
      contentContainerStyle={{paddingBottom:65}}
      className="flex-1 bg-neutral-900"
    >
         {/*back button and movie poster*/}
         <View className="w-full">
              <SafeAreaView className={"absolute z-20 w-full flex-row justify-between items-center px-4"+topMargin}>
                    <TouchableOpacity onPress={()=> navigation.goBack()}  style={styles.background} className="rounded-xl p-1">
                        <ChevronLeftIcon size="20" strokeWidth={2.5} color="white"/>
                    </TouchableOpacity>
                 <TouchableOpacity onPress={()=>toggleFavourite(! isFavourite)}>
                  <HeartIcon size="30" color={isFavourite? theme.background : "white"}/>

              </TouchableOpacity>
              </SafeAreaView>
              {
                 loading? (
                  <Loading/>
                 ):(
                  <View>
                    <Image
                    source={require('../assets/shrek.jpeg')}
                    style={{width,height:height*0.55}}
                    />
                    <LinearGradient
                        colors={['transparent','rgba(23,23,23,0.8)','rgba(23,23,23,1)']}
                        style={{width,height:height*0.40}}
                        start={{x:0.5,y:0}}
                        end={{x:0.5,y:1}}
                        className="absolute bottom-0"
                    />
            </View>
                 )
              }
           
         </View>

         {/* movie details */}

         <View style={{marginTop:-(height*0.09)}}  className="space-y-3">
          {/*title */}
          <Text className="text-white text-center text-3xl font-bold tracking-wider">
          {
            movieName
          }
          </Text>
          {/*status,relese,runtime*/}
          <Text className="text-neutral-400 font-semibold text-base text-center">
            Released . 2020 .170 min
          </Text>

          {/*genres*/ }
          <View className="flex-row justify-center mx-4 space-x-2">
                  <Text className="text-neutral-400 font-semibold text-base text-center">
                    Animation.
                  </Text>
                  <Text className="text-neutral-400 font-semibold text-base text-center">
                    Thrill.
                  </Text>
                  <Text className="text-neutral-400 font-semibold text-base text-center">
                    Comedy
                  </Text>
          </View>
          {/*description*/}
          <Text className="text-neutral-400 mx-4 tracking-wide">
          Shrek is a humorous animated film that turns fairy tale conventions upside down, following the adventures of an ogre named Shrek. Through its witty humor and unconventional characters, it delivers a message of acceptance and friendship.
          </Text>

         </View>

         {/*cast*/}
         <Cast navigation={navigation} cast={cast}/>

         {/*similar movies*/}

         <MovieList title="Similar Movies" hideSeeAll={true} data={similarMovies}/>
    </ScrollView>
    )
}