// In App.js in a new project
/*
//import * as React from 'react';
import 'react-native-gesture-handler';
//import {View, Text,Button} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import TextArea from './info';
import {
  View,
  Text,
  Button,
  ImageBackground,
  StyleSheet,
  SafeAreaView,
  TouchableOpacity,
  ScrollView,
} from 'react-native';
import {Form} from 'native-base';
import firebase from 'firebase';
import {Provider} from 'react-redux';
//import {creatStore, applyMiddleware} from 'redux';
import ReduxThunk from 'redux-thunk';
import reducers from './reducers';

import React, {Component} from 'react';
import Routes from './components/Routes';
//import {Provider} from 'react-redux';
import {createStore, applyMiddleware} from 'redux';
//import ReduxThunk from 'redux-thunk';
//import reducers from './reducers';

const image = {
  uri:
    'https://fsb.zobj.net/crop.php?r=ZQ7JiYdnKX5QUSQEKVWSRnm6sosA7oLM2CuBlUC9kYhaPY--TJ_cKdhtO_KW1NHlJTiBQCKWV7qDLfNgmlDbDGUl-5H98vr4kkj-7uEgDYtlQ7D_GPTOEEvO6UWlF2sPao7j4VZ4D1doFVpR',
};

const image5 = {
  uri:
    'https://fsb.zobj.net/crop.php?r=ZQ7JiYdnKX5QUSQEKVWSRnm6sosA7oLM2CuBlUC9kYhaPY--TJ_cKdhtO_KW1NHlJTiBQCKWV7qDLfNgmlDbDGUl-5H98vr4kkj-7uEgDYtlQ7D_GPTOEEvO6UWlF2sPao7j4VZ4D1doFVpR',
};
function HomeScreen({navigation}) {
  return (
    <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
      <SafeAreaView style={[styles.container]}>
        <ImageBackground source={image} style={styles.image}>
          <View>
            <Form>
              <TouchableOpacity
                onPress={() => navigation.navigate('Information')}>
                <Text
                  style={styles.button1}
                  rowSpan={2}
                  placeholderTextColor="#FFFFFF">
                  WELCOME
                </Text>
                <Text style={styles.button1} placeholderTextColor="#FFFFFF">
                  WELCOME
                </Text>

                <Text style={styles.button}>START</Text>
              </TouchableOpacity>
            </Form>
          </View>
        </ImageBackground>
      </SafeAreaView>
    </View>
  );
}

function DetailsScreen({navigation}) {
  return (
    <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
      <View style={styles.container}>
        <SafeAreaView style={[styles.container]}>
          <ImageBackground source={image5} style={styles.image5}>
            <ScrollView style={styles.scrollView}>
              <TextArea />
            </ScrollView>
          </ImageBackground>
        </SafeAreaView>
      </View>
    </View>
  );
}

const Stack = createStackNavigator();

function App() {


  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Welcome">
        <Stack.Screen name="Welcome" component={HomeScreen} />
        
        <Stack.Screen name="Information" component={DetailsScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
class App extends Component {
  render() {
    const state = createStore(reducers, {}, applyMiddleware(ReduxThunk));

    return (
      <Provider store={state}>
        <Routes />
      </Provider>
    );
  }
}
*/
/*function App() {
  const state = creatStore(reducer, {}, applyMiddleware(ReduxThunk));
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Welcome">
        <Stack.Screen name="Welcome" component={HomeScreen} />
        <Provider store={state} />
        <Stack.Screen name="Information" component={DetailsScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    width: '100%',
    height: '100%',
  },
  image5: {
    flex: 1,
    resizeMode: 'cover',
    justifyContent: 'center',
    borderWidth: 5,
    // borderColor: '#b2f9d6',
  },
  scrollView: {
    margin: 5,
    flex: 1,
    flexDirection: 'column',
  },
  button: {
    fontSize: 30,
    justifyContent: 'center',
    fontWeight: 'bold',
    margin: 130,
    color: '#FFFFFF',
    marginTop: 320,
    //  backgroundColor: '#F4FBF5',
    borderRadius: 15,
    borderRightColor: '#08a91c',
  },
  button1: {
    fontSize: 40,
    color: '#FFFFFF',
    fontWeight: 'bold',
    borderColor: '#FFFFFF',
    borderWidth: 5,
    borderRadius: 5,
    margin: 20,
    alignItems: 'center',
    justifyContent: 'center',
    flex: 1,
  },

  image: {
    flex: 1,
    resizeMode: 'cover',
    justifyContent: 'center',
  },
});
*/
//make this component available to the app

//import liraries
import React, {Component} from 'react';
import Routes from './components/Routes';
import {Provider} from 'react-redux';
import {createStore, applyMiddleware} from 'redux';
import ReduxThunk from 'redux-thunk';
import reducers from './reducers';

// create a component
class App extends Component {
  render() {
    const state = createStore(reducers, {}, applyMiddleware(ReduxThunk));

    return (
      <Provider store={state}>
        <Routes />
      </Provider>
    );
  }
}

//make this component available to the app
export default App;
