import React,{Component} from 'react'
import { View, Text,Image, TouchableOpacity } from 'react-native'


const SettingsAccount = () => {
    return (
        <View>
            
            <View style={{flexDirection:"column",paddingTop:0,borderRadius:5,borderColor:'black',borderWidth:0,}}>
            
            <View style={{flexDirection:"row",justifyContent:"space-between",alignItems:"center",borderRadius:10,borderColor:'#f4f8f9',borderWidth:1.5,borderBottomColor:'#F4F8F9',backgroundColor:'white'}}>
            <Image
                    source={require("../assets/PI.png")}
                    style={{width:12,height:12,marginHorizontal:10}}
                    />
                    <Text style={{color: "black",fontSize:17,fontWeight:"200",letterSpacing:0.5,marginBottom:20,paddingTop:15,paddingRight:140}}>Personal Information</Text>
                    <Image
                    source={require("../assets/arrow.jpg")}
                    style={{width:15,height:10,paddingBottom:15}}
                    />
                </View>
               
                <View style={{flexDirection:"row",justifyContent:"space-between",alignItems:"center",backgroundColor:'#F4F8F9',borderRadius:5,borderBottomColor:'#F4F8F9'}}>
                <Image
                    source={require("../assets/CI.png")}
                    style={{width:12,height:12,marginHorizontal:10}}
                    />
                    <Text style={{color: "black",fontSize:17,fontWeight:"200",letterSpacing:0.5,marginBottom:20,paddingTop:15,paddingRight:130}}>Company Information</Text>
                    <Image
                    source={require("../assets/arrow.jpg")}
                    style={{width:15,height:10,paddingBottom:15}}
                    />
                </View>
                <View style={{flexDirection:"row",justifyContent:"space-between",alignItems:"center",borderRadius:5,borderColor:'#f4f8f9',borderWidth:1.5,backgroundColor:'white',borderBottomColor:'#F4F8F9',borderTopColor:'#F4F8F9',marginBottom:15}}>
                <Image
                    source={require("../assets/MT.png")}
                    style={{width:12,height:12,marginHorizontal:10}}
                    />
                    <Text style={{fontSize:17,fontWeight:"300",letterSpacing:0.5,marginBottom:20,paddingTop:15,paddingRight:230}}>My Team</Text>
                    <Image
                    source={require("../assets/arrow.jpg")}
                    style={{width:15,height:10,paddingBottom:15}}
                    />
                </View>
                <View style={{flexDirection:"row",justifyContent:"space-between",alignItems:"center",backgroundColor:'#F4F8F9',borderRadius:5,borderBottomColor:'#F4F8F9'}}>
                <Image
                    source={require("../assets/Setting.png")}
                    style={{width:12,height:12,marginHorizontal:10}}
                    />
                    <Text style={{fontSize:17,fontWeight:"300",letterSpacing:0.5,marginBottom:20,paddingTop:15,paddingRight:240}}>Settings</Text>
                    <Image
                    source={require("../assets/arrow.jpg")}
                    style={{width:15,height:10,paddingBottom:15}}
                    />
                </View>
                <View style={{flexDirection:"row",justifyContent:"space-between",alignItems:"center",borderRadius:5,borderColor:'white',borderWidth:0.5,backgroundColor:'white',borderBottomColor:'#F4F8F9',borderTopColor:'#F4F8F9'}}>
                <Image
                    source={require("../assets/arrow.jpg")}
                    style={{width:12,height:12,marginHorizontal:10}}
                    />
                    <Text style={{fontSize:17,fontWeight:"300",letterSpacing:0.5,marginBottom:20,paddingTop:10,paddingRight:240}}>Support</Text>
                    <Image
                    source={require("../assets/arrow.jpg")}
                    style={{width:15,height:10,paddingBottom:15}}
                    />
                </View>
                <View style={{flexDirection:"row",justifyContent:"space-between",alignItems:"center",backgroundColor:'#F4F8F9',borderRadius:5,borderBottomColor:'#F4F8F9'}}>
                <Image
                    source={require("../assets/Invite.png")}
                    style={{width:12,height:12,marginHorizontal:10}}
                    />
                    <Text style={{fontSize:17,fontWeight:"300",letterSpacing:0.5,marginBottom:20,paddingTop:15,paddingRight:255}}>Invite</Text>
                    <Image
                    source={require("../assets/arrow.jpg")}
                    style={{width:15,height:10,paddingBottom:15}}
                    />
                </View>
                <View style={{flexDirection:"row",justifyContent:"space-between",alignItems:"center",borderRadius:5,borderColor:'white',borderWidth:0.5,backgroundColor:'white',borderBottomColor:'#F4F8F9',borderTopColor:'#F4F8F9'}}>
                <Image
                    source={require("../assets/FAQ.png")}
                    style={{width:12,height:12,marginHorizontal:10}}
                    />
                    <Text style={{fontSize:17,fontWeight:"300",letterSpacing:0.5,marginBottom:20,paddingTop:15,paddingRight:260}}>FAQs</Text>
                    <Image
                    source={require("../assets/arrow.jpg")}
                    style={{width:15,height:10,paddingBottom:15}}
                    />
                </View>
                <View style={{flexDirection:"row",justifyContent:"space-between",alignItems:"center",backgroundColor:'#F4F8F9',borderRadius:5}}>
                    
                <Image
                    source={require("../assets/fea.png")}
                    style={{width:12,height:12,marginHorizontal:10}}
                    />
                    <Text style={{fontSize:17,fontWeight:"300",letterSpacing:0.5,marginBottom:20,paddingTop:15,paddingRight:160}}>Suggest a feature</Text>
                    <Image
                    source={require("../assets/arrow.jpg")}
                    style={{width:15,height:10,paddingBottom:15}}
                    />
                </View>

            </View>
        </View>
    )
}

export default SettingsAccount;