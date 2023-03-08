import React from 'react';
import {
  View,
  StyleSheet,
  StatusBar,
  Dimensions,
  Text,
  FlatList,
  Image,
  ScrollView,
  TouchableOpacity,
} from 'react-native';
import ShareImage from 'react-native-share';
import Lightbox from 'react-native-lightbox-v2';
const {width, height} = Dimensions.get('window');
import image_base from '../../images.json';
import {day_title, banner_key2} from '../../Constants';
import {
  BannerAd,
  BannerAdSize,
  TestIds,
  InterstitialAd,
  AdEventType,
} from 'react-native-google-mobile-ads';

import s from '../../styles/main.style';
const BadUnitId = banner_key2;
const DATA = [
  {
    id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
    title: 'First Item',
  },
  {
    id: '3ac68afc-c605-48d3-a4f8-fbd91aa97f63',
    title: 'Second Item',
  },
  {
    id: '58694a0f-3da1-471f-bd96-145571e29d72',
    title: 'Third Item',
  },
];

const InspiringImages = ({navigation}) => {
  const onShare = imagebase64 => {
    console.log(imagebase64);
    const shareOptions = {
      title: 'Share via',
      url: imagebase64,
      filename: day_title, // only for base64 file in Android
    };
    // ShareImage.shareSingle(shareOptions);
    ShareImage.open(shareOptions)
      .then(res => {
        console.log(res);
      })
      .catch(err => {
        err && console.log(err);
      });
  };

  return (
    <View style={styles.container}>
      {/* {
                    image_base.wishes.map((data,i)=>{
                        console.log(i);
                        return(
                            <Image key={i} source={{uri:data.data_url}} style={{width:"100%",height:"100%",resizeMode:'contain'}} />
                        )
                    })
                } */}
      <FlatList
        data={image_base.wishes}
        numColumns={2}
        columnWrapperStyle={{flex: 1, justifyContent: 'space-around'}}
        ListHeaderComponent={() => {
          return (
            <View>
              <View
                style={{
                  flex: 1,
                  height: 80,
                  justifyContent: 'center',
                  paddingLeft: 10,
                }}>
                <Text style={[s.f22, s.b]}>Cards</Text>
                <Text style={[s.f14]}>Tap any card to share.</Text>
              </View>
              <BannerAd unitId={BadUnitId} size={BannerAdSize.FULL_BANNER} />
            </View>
          );
        }}
        renderItem={(itemData, i) => {
          //console.log('eerer',itemData.item.id%2)
          return (
            <View>
              <TouchableOpacity
                activeOpacity={0.8}
                onPress={() => {
                  //onShare(itemData.item.data_url)
                  navigation.navigate('FullImage', {
                    img: itemData.item.data_url,
                  });
                }}>
                <Image
                  source={{uri: itemData.item.data_url}}
                  onLoad={() => console.log('Image loaded')}
                  resizeMode="cover"
                  style={{
                    width: 180,
                    minHeight: 250,
                    borderRadius: 14,
                    marginTop: itemData.item.id % 2 ? 20 : 60,
                    alignItems: 'flex-start',
                    justifyContent: 'flex-start',
                  }}
                />
              </TouchableOpacity>
            </View>
          );
        }}
        keyExtractor={item => item.id}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 2,
    paddingLeft: 4,
    backgroundColor: '#FFF',
  },
  item: {
    padding: 20,
    marginVertical: 8,
    marginHorizontal: 6,
  },
  title: {
    fontSize: 32,
  },
});

export default InspiringImages;
