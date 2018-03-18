import React, { Component } from 'react';
import { View,Text,StyleSheet,StatusBar,TouchableOpacity } from "react-native";

import {Actions} from 'react-native-router-flux';

export default class BackHerder extends Component{
    back(){
        Actions.pop()
    }
    render(){
        return(
            <View style={{flexDirection:"row",height:50}}>
                <StatusBar
                    backgroundColor="#c35046"
                    barStyle="light-content"
                />
                <View style={{flex:1,justifyContent:"center",flexDirection:"row"}} >
                    <View style={{flex:1,flexDirection:"row",justifyContent:"center",alignItems:"center"}} >
                        <TouchableOpacity onPress={this.back} style={{flex:1}} >
                            <Text style={styles.textback} >{'< กลับ'}</Text>
                        </TouchableOpacity>
                    <Text style={styles.text} >{this.props.type}</Text>
                    </View>
                    {/* <View style={{flex:3,justifyContent:"center"}} >
                       <Text style={styles.text} >รายการชำระเงิน</Text>
                    </View> */}
                </View>
            </View>
        )
    }
}

const styles = StyleSheet.create({
  
    textback:{
        fontSize:20,
        color:"#0a60ff",
        marginLeft:13
    },
    text:{
        flex:2.2,
        fontSize:25,
        textAlign:"left",
        color:"#FF8072",
        justifyContent:"center"
    }
});