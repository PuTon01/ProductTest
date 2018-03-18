import React,{ Component }from 'react';
import { View,
        Text,
        StyleSheet,
        TouchableOpacity,
        TextInput,KeyboardType
 } from 'react-native'
import Backheader from './Backheader';

 

export default class Pay extends Component{
    // constructor(props) {
    //     super(props)
    //   }
      
    state = {
        sumPricePay: 30,
        priceUesr:0,
        ton:0

    }
    componentDidUpdate(){
            this.setState({
                    ton:this.state.priceUesr - this.state.sumPricePay
                })
            }
            
            
            
    render(){
       return(
                <View style={{flex:1,backgroundColor:"#ffffff"}} >
                    <Backheader type="รายการชำระเงิน" />
                    <View style={{flex:0,backgroundColor:"#ffffff",borderWidth:2,
                        margin:15,borderRadius:10,borderColor:"#c0c0c0",height:250
                        }} >
                        <View style={{flex:1,flexDirection:"row"}} >
                            <View style={{flex:1,justifyContent:"flex-end"}} >
                                <Text style={styles.TextHead} >ยอดรวมชำระ</Text>
                            </View>
                            <View style={{flex:1,alignItems:"flex-end",justifyContent:"flex-end",flexDirection:"row"}} >
                                <Text style={styles.TextHeadpay} > {this.state.sumPricePay}</Text>
                                <Text style={styles.TextHead} >  บาท</Text>
                            </View>
                        </View>
                        <View style={{flex:1,flexDirection:"row"}} >
                            <View style={{flex:1,justifyContent:"center"}} >
                                <Text style={styles.TextHead} >ชำระเงิน</Text>
                            </View>
                            <View style={{flex:1,alignItems:"flex-end",justifyContent:"flex-end",flexDirection:"row"}} >
                                <TextInput style={styles.TextInput} keyboardType={'numeric'} value ={this.state.priceUesr}></TextInput>
                                <Text style={styles.TextHead} >  บาท</Text>
                            </View>
                        </View>
                        <View style={{flex:1,flexDirection:"row"}} >
                            <View style={{flex:1,justifyContent:"flex-start"}} >
                            <Text style={styles.TextHead} >เงินทอน</Text>
                            </View>
                            <View style={{flex:1,alignItems:"flex-end",justifyContent:"flex-end",flexDirection:"row"}} >
                                <Text style={styles.TextHead} >{this.state.ton} </Text>
                                <Text style={styles.TextHead} >  บาท</Text>
                            </View>
                        </View>
                        <View style={{flex:1}} ></View>
                    </View>
                    <View style={styles.ViewBT} >
                        <TouchableOpacity style={styles.Botton} onPress={this.componentDidUpdate}>
                             <Text style={styles.Text} >ยืนยัน</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            //  <View style={{flex:1,backgroundColor:"#c0c0c0"}} >
            //     {/* แถบบน */}
            //     <Backheader/>
            //     <View style={{flex:1,backgroundColor:"#ffffff",}} >
            //         <View style={{flexDirection:"row"}} >
            //             <View style={styles.Head} >
            //                 <Text style={styles.TextHead} >ยอดชำระ</Text>
            //             </View>
            //             <View style={styles.Head} >
            //                 <Text style={styles.TextHead} >{this.state.sumPricePay} บาท</Text>
            //             </View>
            //         </View>
            //         <View style={styles.Pay} >
            //             <Text style={styles.Text} >รับเงิน</Text>
            //             <TextInput style={styles.TextInput} keyboardType={'numeric'} value ={this.state.priceUesr}       
            //             ></TextInput>
            //         </View>
            //         <View style={{flexDirection:"row"}} >
            //             <View style={styles.Head} >
            //                 <Text style={styles.Text} >เงินทอน</Text>
            //             </View>
            //             <View style={styles.Head} >
            //                 <Text style={styles.Text} >{this.state.ton} บ.</Text>
            //             </View>
            //         </View>
            //         <View style={styles.ViewBT} >
            //             <TouchableOpacity style={styles.Botton} onPress={this.componentDidUpdate}>
            //                 <Text style={styles.Text} >ยืนยัน</Text>
            //             </TouchableOpacity>
            //         </View>
            //     </View>  
            //  </View>
        );
    }
}
const styles = StyleSheet.create({
    TextHead:{
        fontSize:25,
        color:"#000000",
        margin:10
    },
    TextHeadpay:{
        fontSize:25,
        color:"#FF8072",
        margin:10
    },
    TextHeadton:{
        fontSize:25,
        color:"#000000",
        margin:10,
        
    },
    // Head:{
    //     flex:1,height:70,
    //     backgroundColor:"#ffffff",
    //     justifyContent:"center",
    // },
    Text:{
        fontSize:20,
        textAlign:"center",
        color:"#ffffff"
    },
    // Pay:{
    //     height:120,
    //     backgroundColor:"#ffffff",
    //     justifyContent:"center",
    //     alignItems:"center",
    //     flexDirection:"row",
    //     borderTopWidth:1
    //     ,borderBottomWidth:1
    //     ,borderColor:"#fa8072",
    // },
    TextInput:{
        fontSize:25,
        width:100,
        textAlign:"center",
        color:"#000000",
        justifyContent:"center"
    },
    ViewBT:{
        flex:1,
        justifyContent:"flex-end",
        backgroundColor:"#ffffff",
        alignItems:"center"
    },
     Botton:{
         width:290,height:50,
         justifyContent:"center",
         backgroundColor:"#FF584F",
        borderRadius:5,
        marginBottom:20,
        borderWidth:1
     }
});