import React from 'react';
import { ScrollView, StyleSheet, Text, TextInput , Button} from 'react-native';
import { Dropdown } from 'react-native-material-dropdown';
import { ExpoLinksView } from '@expo/samples';

export default class LinksScreen extends React.Component {
  static navigationOptions = {
    title: 'Donate',
  };


  loginAttempt(){
   
  }
      
     


  render() {

    let catDropDown = [{
      value: 'Local associations',
    }, {
      value: 'International associations',
    }, {
      value: 'Individuals & family',
    },{
    value: 'Startup',
    }
  ];


  let rcpDropDown = [{
    value: 'Aman Palestin',
  }, {
    value: 'Muslim Voluntary Malaysia',
  }, {
    value: 'UN',
  },
];


    return (
      <ScrollView style={styles.container}>
        {/* Go ahead and delete ExpoLinksView and replace it with your
           * content, we just wanted to provide you with some helpful links <ExpoLinksView />*/}
        <Text style={{marginTop:70,alignSelf:'center', fontSize:15 }}>Recipient Category</Text>
        
        <Dropdown style={{width:200, marginTop:10}}
        //label='Favorite Fruit'
        data={ catDropDown}
      />

<Text style={{marginTop:40,alignSelf:'center', fontSize:15 }}>Recipient Name</Text>
        
        <Dropdown style={{width:200, marginTop:10}}
        //label='Favorite Fruit'
        data={ rcpDropDown}
      />


        <Text style={{marginTop:30,alignSelf:'center', fontSize:15 }}>Amount (RM)</Text>
        <TextInput  style={{ marginTop:10 ,width:200, alignSelf:'center', borderBottomWidth:1, borderBottomColor:'grey'}} onChangeText={(user_id_input) =>
            this.setState({user_id_input})} placeholder='RM 0.00'/>
        <Button style={{color: '#2E86C1', marginTop: 30, padding: 10}} onPress={this.loginAttempt} title='Donate'/>

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
