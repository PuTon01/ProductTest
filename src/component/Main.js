import React, { Component } from 'react';
import { View,
        StyleSheet,
        Text,
        TouchableOpacity,
        TextInput,
        StatusBar,
        Alert
} from 'react-native';
import { fetchData } from '../api';
import { Actions } from 'react-native-router-flux';
import Camera ,{RNCamera,FaceDetector}from 'react-native-camera';



import Footer from './Footer';
export default class ThungTorn extends Component {

    constructor(props){
        super(props);
        this.state ={    
            sumProduct:0,
            sumPrice:0,
            nameProduct:"",
            price:0,
            numProduct:0,
        }
      }
     
Modify(){
    Actions.Modify()
}
Pay(){
    Actions.Pay()
}



onBarCodeRead(e) {

        if(e.data == 8854698010405){
                this.setState({
                    nameProduct:"โออิชิ",
                    price:10,
                    sumPrice:this.state.sumPrice + this.state.price,
                    sumProduct:this.state.sumProduct + 1 
                    })
                   
                    
        }
        if(e.data == 4902430304757 ){
            this.setState({
                nameProduct:"Ambi Pur AIR",
                price:20,
                sumPrice:this.state.sumPrice + this.state.price,
                sumProduct:this.state.sumProduct + 1
                })
               
        }
}

    render(){
        return(
            <View style={{flex:1,}} >
                {/* แสดงจำนวน */}
                <View style={styles.Body} >
                    <View style={{flex:1,flexDirection:"row",borderBottomWidth:1,borderColor:"#ff584f"}} >             
                        <View style={styles.Bar} >
                            <Text style={styles.Num} >{this.state.sumProduct}</Text>
                            <Text style={styles.Text} >  ชิ้น </Text>
                        </View>
                        <View style={styles.Bar} >
                            <Text style={styles.Textsum}>
                            { this.state.sumPrice }
                            </Text>
                            <Text style={styles.Text} >  บาท </Text>
                        </View>
                    </View>
                    <View style={{flexDirection:"row"}} >
                        <View style={{flex:1,
                                        backgroundColor:"#ffffff", 
                                        flexDirection:"row",
                                        justifyContent:"flex-end",}} >
                            <Text style={{fontSize:24,
                                        textAlign:"center",
                                        marginRight:5,fontWeight:"bold"
                                        }} >{this.state.nameProduct }</Text>
                        </View>
                        <View style={{flex:1,
                                        backgroundColor:"#ffffff",  
                                        flexDirection:"row",
                                        justifyContent:"flex-start",}} >
                            <Text style={{fontSize:24,
                                        textAlign:"center",
                                        marginLeft:5,fontWeight:"bold"
                                        }} >{this.state.price} บาท</Text>
                        </View>
                    </View>
                    <View style={{flexDirection:"row"}} >
                    <View style={{flex:1,justifyContent:"center"}} >
                        <Text style={styles.TextHead} >จำนวนชิ้น</Text>
                    </View> 
                        <View style={{flex:1,backgroundColor:"#ffffff"}} >
                            <View style={{flexDirection:"row",marginTop:12,justifyContent:"center",}} >
                                <TouchableOpacity >
                                    <Text style={{width:30,
                                        fontSize:36.5,textAlign:"center",
                                        color:"#000000"}} 
                                        >-</Text>
                                </TouchableOpacity>
                                <View style={{width:55,backgroundColor:"#ffffff",justifyContent:"center"}} >
                                    <View style={{flex:1,width:50,
                                        backgroundColor:"#ffffff",
                                        marginBottom:5,
                                        marginTop:5,
                                        borderWidth:1}} >
                                        <Text style={{flex:1,
                                        fontSize:20,
                                        textAlign:"center",
                                        marginBottom:5,
                                        marginTop:5,}} >{this.state.sumProduct}</Text>
                                    </View>
                                </View>
                                <TouchableOpacity>
                                    <Text style={{width:30,
                                        fontSize:36.5,textAlign:"center",
                                        color:"#000000"}} 
                                        >+</Text>
                                </TouchableOpacity>
                            </View>
                        </View>
                    </View>   
                </View>
                {/* ที่แสกน */}
                <View style={styles.Scan} >
                    
                    <Camera
          ref={(cam) => {
            this.camera = cam;
          }}
	  onBarCodeRead={this.onBarCodeRead.bind(this)}
          style={styles.ScanT}
          aspect={Camera.constants.Aspect.fill}
         >
          </Camera>
                    
                </View>
                {/* แสดงข้อมูล */}
                <View style={styles.Data} >
                    <View style={{flex:1,backgroundColor:"#ffffff",justifyContent:"center"}} >
                        <View style={{flex:1,justifyContent:"center"}} >
                            <TouchableOpacity onPress={this.Modify} style={{backgroundColor:"#ffffff",}} >
                                <Text style={{fontSize:20,
                                    textAlign:"center",
                                    marginTop:10,color:"#1E90FF"}}
                                    >รายละเอียด</Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                    <View style={{flex:1,
                        backgroundColor:"#ffffff",
                        alignItems:"center"}} >
                        <View style={{flex:1,justifyContent:"center"}} >
                            <View style={{flex:1,backgroundColor:"#ffffff",justifyContent:"center"}} >    
                                <TouchableOpacity onPress={this.Pay} style={{backgroundColor:"#FF564F",
                                                            borderRadius:10,
                                                            width:140}} >
                                    <Text style={{fontSize:22,
                                        textAlign:"center",
                                        marginTop:1,color:"#ffffff",}} 
                                        >ชำระเงิน</Text>
                                </TouchableOpacity>
                            </View>    
                        </View>
                    </View>
                </View>
                <Footer/>
            </View>
        );
    }
}
// จัดหน้า ui
const styles = StyleSheet.create({
    Head:{
        flex:0.45,
        backgroundColor:'#FA8072',
    },
    Body:{
        flex:1.1,
        backgroundColor:'#ffffff',
        flexDirection:"column",
        justifyContent:"space-around",
    },
    Scan:{
        flex:2,
        backgroundColor:'#ffffff',
    },
    Data:{
        flex:0.3,
        backgroundColor:'#B68E43',
        flexDirection:"row",
    },
    Option:{
        flex:0.6,
        backgroundColor:'#FA8072',
        flexDirection:"row",
    },
    Botton:{
        flex:1,
        marginTop:5,
        backgroundColor:"#ffffff",
  
    },
    Icon:{
        textAlign:"center",
        marginTop:10,

    },
    Text:{
        fontSize:20,
        textAlign:"center",
        marginTop:15,
    },
    Textsum:{
        fontSize:40,
        textAlign:"center",
        marginBottom:10,
        fontWeight:"bold",
        justifyContent:"center",
        color:"#ff8072"
    },
    Bar:{
        flex:1,
        flexDirection:"row",
        justifyContent:"center"
    },
    Textdata:{
        fontSize:20,
        textAlign:"center",
    },
    TextHead:{
        fontSize:24,
        textAlign:"center",
        marginTop:10,fontWeight:"bold"
    },
    Num:{
        fontSize:40,
        textAlign:"center",
        marginBottom:10,
        fontWeight:"bold",
        justifyContent:"center"
    },
    ScanT:{
        flex:1,
        backgroundColor:"#c0c0c0",
    }
});