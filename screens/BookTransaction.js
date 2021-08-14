import React from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import * as Permissions from 'expo-permissions';
import {BarCodeScanner} from 'expo-barcode-scanner';


export default class TransactionScreen extends React.Component{
    constructor(){
        super();
        this.state={
            hasCameraPermission : null,
            scanned :false,
            scannedData : '',
            buttonState : 'normal',
        };

    }
    getCameraPermission=async()=>{
          const {status}=await Permissions.askAsync(Permissions.CAMERA);
          this.setState({
            hasCameraPermission : status==='granted',
            buttonState : 'clicked',
          })
    }
    handleBarCodeScan=async({type,data})=>{
        this.setState({
            scanned:true,
          scannedData : data,
          buttonState : 'normal',
        })
    }
    render(){
        const hasCameraPermission=this.state.hasCameraPermission
        const scanned = this.state.scanned
        const buttonState = this.state.buttonState

       if (buttonState === 'clicked' && hasCameraPermission){
           return(
              <BarCodeScanner
            onBarCodeScanned={scanned?undefined:this.handleBarCodeScan}
            style={StyleSheet.absoluteFillObject}
            /> 
           )
       }else if(buttonState==='normal'){

       

        return(
            <View style={styles.container}>
                <Text style={styles.displayText}>
                    {
                        hasCameraPermission===true?this.state.scannedData
                        :"Request Camera permission"
                    }
                </Text>
                <TouchableOpacity style={styles.scanButton} 
                onPress={this.getCameraPermission}
                >
             <Text style={styles.displayText}>Scan QR code</Text>
             </TouchableOpacity>
            </View>
        )
    }
}
}
const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
    },
    displayText:{
        fontSize:15,
        textDecoration: 'underline',
    },
    scanButton:{
        backgroundColor: 'blue',
        padding:10,
        margin:10,
    }
  });
