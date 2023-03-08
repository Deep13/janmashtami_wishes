import React, { useContext, useEffect, useState } from 'react'
import {Dimensions,View, Text, TouchableOpacity} from 'react-native';
import s from '../styles/main.style'

import storeData from '../methods/store';
import LanguageContext from '../context/languageContext';

const {width,height}=Dimensions.get('window');

const s_language=['English','Hindi'];

const Languages = ({navigation,route}) => {
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
            <View style={[s.fl3,s.pdtp30,s.pdlt20]}>
                <Text style={[s.f28,s.b]}>Languages</Text>
                <Text style={[s.f18]}>Select your preferred language.</Text>
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
            <View style={[s.fl1,s.mdtp30,s.pdlt20,s.pdrt20]}>
                {inner ?
                <TouchableOpacity onPress={linkTo} style={[s.buttonSecondary,s.mdtp30]}>
                    <Text style={[s.cllight,s.f22,s.b]}>Save</Text>
                </TouchableOpacity>
            :
                <TouchableOpacity onPress={linkTo} style={[s.buttonSecondary,s.mdtp30]}>
                    <Text style={[s.cllight,s.f22,s.b]}>Next</Text>
                </TouchableOpacity>
                }
            </View>
        </View>
    )
}

export default Languages;