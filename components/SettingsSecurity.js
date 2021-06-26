import React,{useState} from 'react'
import { View, Text ,Image,TouchableOpacity,StyleSheet} from 'react-native'
import ToggleSwitch from "toggle-switch-react-native"

const SettingsSecurity = () => {
    const [face, setFace] = useState(false)
    const [privacy, setPrivacy] = useState(false)
    return (
        <View style={{marginBottom:90}}>
            <Text style={{fontSize:20,fontWeight:"bold",paddingBottom:30}}>{'<-  Settings'}</Text>
            <View
          style={{
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "space-between",
            marginBottom: 0,
            borderRadius:5,borderColor:'#f4f8f9',borderWidth:1.5,borderBottomColor:'#F4F8F9',
            borderTopColor:'#f4f8f9'
          }}
        >
          <Text
            style={{
              flexWrap: "wrap",
              fontSize: 17,
              fontWeight: "300",
              letterSpacing: 0.5,
              marginBottom:20,paddingTop:10,paddingLeft:10
            }}
          >
            Change Password
          </Text>
          <Image
            source={require("../assets/arrow.jpg")}
            style={{ width: 10, height: 10 }}
          />
        </View>
            <View style={{paddingTop:0,flexDirection:"column"}}>
                <View style={{flexDirection:"row",alignItems:"center",justifyContent:"space-between",marginBottom:0,borderRadius:5,borderColor:'white',borderWidth:0.5,borderBottomColor:'#F4F8F9',backgroundColor:'#F4F8F9'}}>
                    <Text style={{flexWrap:"wrap",fontSize:17,letterSpacing:0.5,color:'black',fontWeight:"300",marginBottom:20,paddingTop:10,paddingLeft:10}}>Push Notifications</Text>
                    <ToggleSwitch
                    
                    isOn={face}
                    onColor="#2150f5" 
                    offColor="#ddd"
                    size="medium"
                    onToggle={(isOn)=>{
                        if(!face){
                            setFace(true)
                        }
                        else{
                            setFace(false)
                        }
                    }}
                    />
                </View>
                <View style={{flexDirection:"row",alignItems:"center",justifyContent:"space-between",marginBottom:20,borderRadius:5,borderColor:'#f4f8f9',borderWidth:1.5,borderBottomColor:'#f4F8F9'}}>
                    <Text style={{flexWrap:"wrap",fontSize:17,letterSpacing:0.5,color: 'black',fontWeight:"300",marginBottom:20,paddingTop:10,paddingLeft:10}}>Dark Mode</Text>
                    <ToggleSwitch
                    
                    isOn={privacy}
                    onColor="#2150f5" 
                    offColor="#ddd"
                    size="medium"
                    onToggle={(isOn)=>{
                        if(!privacy){
                            setPrivacy(true)
                        }
                        else{
                            setPrivacy(false)
                        }
                    }}
                    />
                </View>

                <View style={{flexDirection:"row",alignItems:"center",justifyContent:"space-between",marginBottom:0,borderRadius:5,borderColor:'#f4f8f9',borderWidth:1.5,borderBottomColor:'#F4F8F9',backgroundColor:'#F4F8F9'}}>
                <Text style={{fontSize:17,fontWeight:"300",letterSpacing:0.5,color:!face?"black":"black",marginBottom:20,paddingTop:10,paddingLeft:10}}>About Us</Text>
                    <Image
                    source={require("../assets/arrow.jpg")}
                    style={{width:10,height:10}}
                    />
                    
                </View>
                
                <View
          style={{
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "space-between",
            marginBottom: 0,
            borderRadius:10,borderColor:'white',borderWidth:0.5,borderBottomColor:'#F4F8F9'
          }}
        >
          <Text
            style={{
              flexWrap: "wrap",
              fontSize: 17,
              fontWeight: "300",
              letterSpacing: 0.5,
              marginBottom:20,paddingTop:10,paddingLeft:10
            }}
          >
            Privacy Policy
          </Text>
          <Image
            source={require("../assets/arrow.jpg")}
            style={{ width: 10, height: 10 }}
          />
        </View>
        <View
          style={{
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "space-between",
            marginBottom: 20,
            borderRadius:5,borderColor:'#f4f8f9',borderWidth:1.5,borderBottomColor:'#F4F8F9',backgroundColor:'#F4F8F9'
          }}
        >
          <Text
            style={{
              flexWrap: "wrap",
              fontSize: 17,
              fontWeight: "300",
              letterSpacing: 0.5,marginBottom:20,paddingTop:10,paddingLeft:10
            }}
          >
            Terms And Condition
          </Text>
          <Image
            source={require("../assets/arrow.jpg")}
            style={{ width: 10, height: 10 }}
          />
        </View>
        <View
          style={{
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "space-between",
            marginBottom: 40,
            borderRadius:5,borderColor:'#F4F8F9',borderWidth:1.5,
          }}
        >
        
          <Text
            style={{
              flexWrap: "wrap",
              fontSize: 17,
              fontWeight: "300",
              letterSpacing: 0.5,
              color: 'red',marginBottom:20,paddingTop:10,paddingLeft:10
              
            }}
          >
            Logout
          </Text>
          <Image
            source={require("../assets/arrow.jpg")}
            style={{ width: 10, height: 10 }}
          />
        </View>
       

            </View>
        </View>
    )

    
      
}

const styles = StyleSheet.create({
    appButtonContainer: {
      width: "100%",
      borderWidth: 0.5,
      borderColor: "#ddd",
      borderRadius: 8,
      paddingVertical: 17,
      paddingHorizontal: 100,
    },
    appButtonText: {
      fontSize: 16,
      color: "red",
      fontWeight: "600",
      alignSelf: "center",
    },
  });

export default SettingsSecurity