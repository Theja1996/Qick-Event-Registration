/* eslint-disable react/jsx-no-duplicate-props */
/* eslint-disable prettier/prettier */
/*import React, {Component} from 'react';
import {Text, View, StyleSheet,Button,Alert,TouchableOpacity,SafeAreaView} from 'react-native';
import {Container, Header, Content,Spinner, Textarea, Form,Icon,Item,Label,Input,Picker} from 'native-base';
//import { SafeAreaView } from 'react-navigation';
import {postBlog} from '../actions';
import {connect} from 'react-redux';

 

class TextArea extends Component {
  state={
    name:"",
  }
  submit=()=>{
   this.props.postBlog(this.state.name)
   this.setState({
     name:"",
   })
  }
  render() {
    return (
       
      <Form >
          
      <Item inlineLabel placeholderTextColor="#FFFFFF" >
              <Label style={styles.button1} rowSpan={2}  placeholderTextColor="#FFFFFF" bordered placeholder="name" >First Name</Label>
              <Input style={styles.button2} placeholder="name" onChangeText={name=>this.setState({name})} value={this.state.name}/>
            </Item>
            <Item inlineLabel placeholderTextColor="#FFFFFF">
              <Label style={styles.button1} rowSpan={2}  placeholderTextColor="#FFFFFF" bordered placeholder="Your Name" >Last Name</Label>
              <Input style={styles.button3}/>
            </Item>
            <Item inlineLabel placeholderTextColor="#FFFFFF">
              <Label style={styles.button1} rowSpan={2}  placeholderTextColor="#FFFFFF" bordered placeholder="Your Name" >Gender</Label>
              <Input style={styles.button4}/>
            </Item>
            <Item inlineLabel placeholderTextColor="#FFFFFF">
              <Label style={styles.button1} rowSpan={2}  placeholderTextColor="#FFFFFF" bordered placeholder="Your Name" >Room</Label>
              <Input style={styles.button5}/>
            </Item>
            <Item inlineLabel placeholderTextColor="#FFFFFF">
              <Label style={styles.button1} rowSpan={2}  placeholderTextColor="#FFFFFF" bordered placeholder="Your Name" >Site</Label>
              <Input style={styles.button6}/>
            </Item>
            <Item inlineLabel placeholderTextColor="#FFFFFF">
              <Label style={styles.button1} rowSpan={2}  placeholderTextColor="#FFFFFF" bordered placeholder="Your Name" >City</Label>
              <Input style={styles.button7}/>
            </Item>
            <Item inlineLabel placeholderTextColor="#FFFFFF">
              <Label style={styles.button1} rowSpan={2}  placeholderTextColor="#FFFFFF" bordered placeholder="Your Name" >E-mail</Label>
              <Input style={styles.button8}/>
            </Item>
            
        <SafeAreaView >
        <TouchableOpacity  onPress={this.submit}
      
    onPress={() => Alert.alert('Success Submition')}>
         
           <Text style={styles.button} >SUBMIT</Text>
 
        </TouchableOpacity>
      
      </SafeAreaView>
      </Form>
     
      
    );
  }
}
const styles = StyleSheet.create({
  button: {
    fontSize:30,
  color:'#0AFFFF',
    marginLeft:130,
    //backgroundColor:'#00ffb2',
    width:160,
    borderRadius:10, 
    fontWeight:'bold',
    marginVertical:25,
  },
  button1: {
    fontSize:20,
  color:'#FFFFFF',
    fontWeight:'bold',

  },
  button2:{
color:'#FFFFFF',
//marginLeft:5,
  },
  button3:{
    color:'#FFFFFF',
    marginLeft:5,
      },
      button4:{
        color:'#FFFFFF',
        marginLeft:3,
          },
          button5:{
            color:'#FFFFFF',
            marginLeft:52,
              },
              button6:{
                color:'#FFFFFF',
                marginLeft:68,
                  },
                  button7:{
                    color:'#FFFFFF',
                    marginLeft:68,
                      },
                      button8:{
                        color:'#FFFFFF',
                        marginLeft:48,
                          },

 icon: {
 flex:3, 
  marginLeft:250,
marginTop:-58,
color:'#FFFFFF',

  },

});
export default connect(null, {postBlog}) (TextArea);*/
