import React, {useState} from 'react';
import {ScrollView, StyleSheet, Text, 
   View, RefreshControl} from 'react-native';
  
export default function Refresh(){
  const [color, changeColor] = useState('red');
  const [refreshing, setRefreshing] = React.useState(false);
  
  const onRefresh = () => {
    setRefreshing(true);
    setTimeout(() => {
      changeColor('green');
      setRefreshing(false);
    }, 2000);
  };
  return (
    <ScrollView
      refreshControl={
        <RefreshControl refreshing={refreshing} 
          onRefresh={onRefresh} />
      }
      style={styles.container}>
      <View
        style={{
          marginTop: 200,
          alignSelf: 'center',
          padding: 20,
          backgroundColor: color,
        }}>
        <Text style={{color: 'white'}}>
          Swipe Down to Change Color !
        </Text>
      </View>
    </ScrollView>
  );
};
  
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});