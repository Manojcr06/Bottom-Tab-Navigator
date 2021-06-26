import React, { useState, useEffect } from "react";
import {
  View,
  Text,
  StyleSheet,
  Dimensions,
  Image,
  TouchableOpacity,
  SafeAreaView,
  ScrollView,
} from "react-native";
import SettingsAccount from "./SettingsAccount";
import SettingsSecurity from "./SettingsSecurity";
import Progress from "./Progress";
import Progress1 from "./Progress1";

const Settings = () => {
  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: "white" }}>
      <ScrollView style={{ flex: 1 }}>
      <Text style={{fontSize:20,fontWeight:"bold",paddingTop:40,paddingHorizontal: 20,borderBottomColor:"#f4f8f9",borderBottomWidth:4.5,marginBottom:0,color:'black'}}>{'<- Profile'}</Text>
      <View style={{ paddingTop: 20, paddingHorizontal: 20 }}>
            <View>
                
                <Text style={{color:"black",fontSize:24,fontWeight:"bold",marginBottom:0}}>John Doe</Text>
                <Text style={{color:"#5d616f",fontSize:14,fontWeight:"bold"}}>+91 9975713567</Text>
                <Text style={{color:"#5d616f",fontSize:14,fontWeight:"bold"}}>Logistics|Manager</Text>
            </View>
            <View style={{height:100,width:"auto",borderColor:"#ddd",borderWidth:2,borderRadius:10,marginTop:25,overflow:"hidden"}}>
          
                <View style={{paddingTop:10,paddingHorizontal:22,flexDirection:"row",alignItems:"center"}}>
                    
                    </View>
                   
                    

            </View>
            <View style={{paddingTop:30}}>
                <SettingsAccount/>
            </View>

            <View style={{paddingTop:220}}>
                <SettingsSecurity/>
            </View>
      </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default Settings;