import React from 'react';
import { ScrollView, StyleSheet, Text, TextInput , Button} from 'react-native';
import { Dropdown } from 'react-native-material-dropdown';
import { ExpoLinksView } from '@expo/samples';

export default class LinksScreen extends React.Component {
  static navigationOptions = {
    title: 'Reload',
  };


 loginAttempt(){
   
 }
     


  render() {

    let gateDropDown = [{
      value: 'Maybank (Internet Banking)',
    }, {
      value: 'CIMB (Internet Banking)',
    }, {
      value: 'Credit Card / Master Card',
    },{
    value: 'PayPal',
    }
  ];


    return (
      <ScrollView style={styles.container}>
        {/* Go ahead and delete ExpoLinksView and replace it with your
           * content, we just wanted to provide you with some helpful links <ExpoLinksView />*/}
        <Text style={{marginTop:70,alignSelf:'center', fontSize:15 }}>Reload using</Text>
        
        <Dropdown style={{width:200, marginTop:10}}
        //label='Favorite Fruit'
        data={ gateDropDown}
      />
        <Text style={{marginTop:30,alignSelf:'center', fontSize:15 }}>Amount (RM)</Text>
        <TextInput  style={{ marginTop:10 ,width:200, alignSelf:'center', borderBottomWidth:1, borderBottomColor:'grey'}} onChangeText={(user_id_input) =>
            this.setState({user_id_input})} placeholder='RM 0.00'/>
        <Button style={{color: '#2E86C1', marginTop: 30, padding: 10}} onPress={this.loginAttempt} title='Reload'/>
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 15,
    backgroundColor: '#fff',
  },
});
