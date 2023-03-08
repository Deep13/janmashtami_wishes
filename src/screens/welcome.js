import React from 'react';
import {
  Dimensions,
  View,
  Image,
  Text,
  TouchableOpacity,
  StatusBar,
} from 'react-native';
import s from '../styles/main.style';

const {width, height} = Dimensions.get('window');

const Welcome = ({navigation}) => {
  const linkTo = () => navigation.navigate('Home');

  return (
    <View style={[s.fl1, {flexDirection: 'column'}]}>
      <StatusBar backgroundColor="#000" barStyle="light-content" />
      <View style={s.fl2}>
        <View style={[{backgroundColor: '#a3a3a3'}]}>
          <Image
            source={require('../bg.jpg')}
            style={{width: '100%', height: '100%'}}
          />
        </View>
      </View>
      <View
        style={[
          s.fl1,
          s.pdlt20,
          s.pdrt20,
          {
            width: width,
            marginTop: -20,
            borderRadius: 20,
            backgroundColor: '#FFF',
            paddingTop: 20,
          },
        ]}>
        <View style={{marginTop: 20}}>
          <Text style={[{fontSize: 28}, s.b]}>Welcome</Text>
        </View>
        <Text numberOfLines={3} style={[s.f22, s.pdtp10, {fontWeight: '400'}]}>
          Get the best wishes for festival,{'\n'}right in one place.
        </Text>
        <TouchableOpacity
          onPress={linkTo}
          style={[s.buttonSecondary, s.mdtp30]}>
          <Text style={[s.cllight, s.f18, s.b]}>Get Started</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Welcome;
