import React from 'react';
import { ScrollView, StyleSheet , Text, Button, TextInput} from 'react-native';
import { ExpoLinksView } from '@expo/samples';
import * as firebase from 'firebase';
//import {RkButton} from 'react-native-ui-kitten';

export default class App extends React.Component {
  constructor(){
      super();
      this.state = {
          user_id : ["hakim","adam","faisal"],
          user_name : ["hakim hassan", "adam zulk", "faisal farhan"],
          user_pw : ["0000","1111","2222"],
          arrayLength : 0,
          myCount : 0,
          //user_id : "hakim",
          //user_name : "hakim hassan",
          //user_pw : "0000",
          user_id_input : null,
          user_name_input : null,
          user_pw_input : null,
          user_access : false,
      };
  }

  loginAttempt = () => {
   /* 
    this.state.user_id.map(){
        this.state.myCount++;
    }

    this.setState({arrayLength : Number(this.state.myCount)});
    
    this.setState({arrayLength: })
*/
    for(i=0; i<this.state.user_id.length; i++){
        if(this.state.user_id_input == this.state.user_id[i] 
            && this.state.user_pw_input == this.state.user_pw[i]){
                this.setState({user_access : Boolean(true)});
                break;
            }
        else{
            this.setState({user_access : Boolean(false)});
        }
        }}
    /* 
    for(i=0; i<this.state.arrayLength && (this.user_access = true); i++){
    this.setState({
        user_access:
        Boolean(
            this.state.user_id_input == this.state.user_id[i] 
            && this.state.user_pw_input == this.state.user_pw[i]
            )
    },
    () => {});
    }};
   
////////////////////////////

  loginAttempt (){
    if(this.state.user_id_input == this.state.user_id 
        && this.state.user_pw_input == this.state.user_pw){
            this.setState({user_access:Boolean(true)})
      }
    else{

    }
  }
  /////////////////
  */
  /*
  {
    if(this.state.user_id_input == this.state.user_id 
      && this.state.user_pw_input == this.state.user_pw){
          
    };
  this.setState({ 
      user_access: 
      Boolean(this.state.user_id_input == this.state.user_id && this.state.user_pw_input == this.state.user_pw)
  },
  //this.setState({user_access: Boolean()},
  () => {user_access = true;});
  };
*/

/////////////////////////


Const firebaseConfig = {
  apiKey: "<YOUR-API-KEY>",
  authDomain: "<YOUR-AUTH-DOMAIN>",
  databaseURL: "<YOUR-DATABASE-URL>",
  storageBucket: "<YOUR-STORAGE-BUCKET>"
};

firebase.initializeApp(firebaseConfig);



  render() {
    return (
      <ScrollView style={styles.container} >
        <Text></Text><Text></Text><Text></Text><Text></Text><Text></Text><Text></Text>
        <TextInput  onChangeText={(user_id_input) =>
            this.setState({user_id_input})} placeholder='       Insert your ID       '/>
            <Text>  </Text>
            <TextInput  onChangeText={(user_pw_input) =>
            this.setState({user_pw_input})} placeholder='       Insert your pw       '/>
            <Text>  </Text>
            <Button color="#841584" onPress={this.loginAttempt} title='Login'/>

            <Text></Text><Text></Text>
            <Text style={{fontWeight:'bold', fontSize:20}}>array length : {this.state.user_id.length}</Text>
            <Text style={{fontWeight:'bold', fontSize:20}}>array length : {this.state.arrayLength}</Text>
            <Text style={{fontWeight:'bold', fontSize:20}}>User IDios : {this.state.user_id[0]}</Text>
            <Text style={{fontWeight:'bold', fontSize:20}}>User ID Input : {this.state.user_id_input}</Text>
            <Text style={{fontWeight:'bold', fontSize:20}}>User PW : {this.state.user_pw[0]}</Text>
            <Text style={{fontWeight:'bold', fontSize:20}}>User PW Input : {this.state.user_pw_input}</Text>
           <Text style={{fontWeight:'bold', fontSize:20}}>User acccess : {this.state.user_access.toString()}</Text>
      

      
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',  
    backgroundColor:'#D1F2EB' ,
  },
  //
});

/*


import React from 'react';
import { StyleSheet,Alert, Text, View, Button, TextInput, Image, URL } from 'react-native';

export default class App extends React.Component {



    constructor(){
      super();
      this.state = {
      carPrice: 0,
      carDP: 0,
      loanPeriod:0,
      loanInterest:0,
      
      monthlyPayment:0
      };
    }

      calculateMP = () => {
        this.setState({monthlyPayment: 
          Number( 
            ((this.state.carPrice-this.state.carDP)
            +((this.state.loanInterest/100)
            *(this.state.carPrice-this.state.carDP)
            *this.state.loanPeriod))
            /(this.state.loanPeriod*12) )
            .toFixed(1)},
        () => {
          
});
        };
    

    render() {
      return (
        
    
  
       <View style={{
         flex:2000, 
         flexDirection: 'column', 
         alignItems: "center", 
         justifyContent: 'center', 
         backgroundColor:'#FFF0F5' ,
         marginLeft:70,
         marginRight:70,
         marginTop:100,
         marginBottom:100
         }}>
      
        

       <Text style={{fontSize:30, fontWeight:"bold", color:'#800000', alignItems:'center'}}>Car Loan Calculator</Text>

       <Text></Text><Text></Text><Text></Text><Text></Text>

      <Text style={{ alignContent:'center'}}> </Text>
      <TextInput  onChangeText={(carPrice) =>
      this.setState({carPrice})} placeholder='       Insert car price (RM)       '/>
      <Text></Text><Text></Text>
      <TextInput onChangeText={(carDP) => 
      this.setState({carDP})} placeholder='       Insert deposit (RM)         '/>
      <Text></Text><Text></Text>
      <TextInput onChangeText={(loanPeriod) => this.setState({loanPeriod})} placeholder='   Insert loan period (Year)   '/>
      <Text></Text><Text></Text>
      <TextInput onChangeText={(loanInterest) => 
      this.setState({loanInterest})} placeholder='   Insert loan interest (%)   '/>
      <Text></Text><Text></Text>
     
      <Button color="#841584" onPress={this.calculateMP} title='Calculate'/>
      <Text></Text><Text></Text>
      <Text style={{fontWeight:'bold', fontSize:20}}>Monthly Payment: RM {this.state.monthlyPayment}</Text>
      </View>
      
      );
      }
      }
      


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

*/