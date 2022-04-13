import { StatusBar } from 'expo-status-bar';
import React, {Component, useState, useEffect} from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';
import { SafeAreaView } from 'react-native-web';
import ToggleSwitch from "../components/ToggleSwitch";

export default function HomeScreen() {
  const [currentDate, setCurrentDate] = useState('');
  const [count, setCount] = useState(0);

  useEffect(() => {
    var hours = new Date().getHours(); //Current Hours
    var min = new Date().getMinutes(); //Current Minutes
    var sec = new Date().getSeconds(); //Current Seconds
    setCurrentDate(
      hours + ':' + min + ':' + sec
    );
  }, []);

  return (
    <View style={styles.container}>
      <View style={styles.topContainer}>
        <Text style={styles.textStyleWhite}>Current Time</Text>
        <Text style={styles.textStyleWhite}>{currentDate}</Text>  
      </View>
      
      <View style={styles.middleContainer}></View>
      
      <View style={styles.bottomContainer}>
        <View style={{flex:4, justifyContent:"flex-end"}}>
          <Button
            onPress={() => setCount(count - 1)}
            title="-"
            style={{width:"30%"}}
            />    
        </View>
        
        <Text style={{flex:1, color:"white", textAlign:"center"}}>{count}</Text>
        <View style={{flex:4}}>
          <Button
          onPress={() => setCount(count + 1)}
          title="+"
          />
        </View>
      </View>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    justifyContent: 'center',
    paddingTop: 40,
  },
  textStyleWhite: {
    width : '100%',
    color: '#fff',
    textAlign: 'center',
  },
  topContainer: {
    flex: 1,
    backgroundColor: '#0946AC',
    alignItems: 'center',
    justifyContent: 'center',
  },
  middleContainer: {
    flex: 8,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  bottomContainer: {
    flex: 1,
    flexDirection: 'row',
    backgroundColor: '#0946AC',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
