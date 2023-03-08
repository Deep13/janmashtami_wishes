import React, { useContext, useEffect, useState } from 'react'
import {Dimensions,View, Text, TouchableOpacity} from 'react-native';
import s from '../styles/main.style';
import storeData from '../methods/store';
import LanguageContext from '../context/languageContext';

const s_language=['English','Hindi'];
const {width,height}=Dimensions.get('window');

const Settings = ({navigation,route}) => {
    const {lang,setlang}=useContext(LanguageContext);
    const inner=route.params.inner;
    const [selected,setselected]=useState(false);
    const [val,setval]=useState(inner ? lang : 'English');

    const linkTo=()=> navigation.navigate('Home')

    const setLanguage=(lang)=>{
        setlang(lang);
        storeData('@language',{type:lang});
        setval(lang);
    }

    useEffect(()=>{
        storeData('@language',{type:val});
    },[])

    return(
        <View style={s.fl1}>
            <View style={[s.fl3,s.pdtp20,s.pdlt10]}>
                    <Text style={[s.f22,s.b]}>Languages</Text>
                    <Text style={[s.f14]}>Select your preferred language.</Text>
            
                <View style={[s.pdtp30,s.row,s.jStart]}>
                    {s_language.map((data,i)=>{
                        return(
                        <TouchableOpacity key={i}  onPress={()=>setLanguage(data)}  style={[val===data && {borderWidth:2, borderColor:'cornflowerblue'} ,{width:100,height:40,borderRadius:24,backgroundColor:"#d3d3d3",justifyContent:'center',alignItems:'center',marginRight:30}]}>
                            <Text>{data}</Text>
                        </TouchableOpacity>

                        )
                    })}
                </View>
            </View>
            
        </View>
    )
}

export default Settings;