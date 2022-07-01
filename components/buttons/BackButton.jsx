import { useEffect } from "react";
import { StyleSheet, View, Text, BackHandler } from "react-native";
import { TouchableWithoutFeedback } from "react-native";

export default function BackButton({ navigation, color }) {
  const styles = StyleSheet.create({
    container: {
      backgroundColor: "#f8f8fb",
      width: 40,
      height: 40,
      marginTop: 10,
      borderRadius: 5,
    },
    text: {
      color: color,
      fontWeight: "bold",
      fontSize: 28,
      alignSelf: "center",
    },
  });

  function handleBackButtonClick() {
    navigation.goBack();
    return true;
  }

  return (
    <TouchableWithoutFeedback
    onPress={()=> {
      if(navigation){
        handleBackButtonClick();
      }
    }}
    >
      <View style={styles.container}>
        <Text style={styles.text}>{"<"}</Text>
      </View>
    </TouchableWithoutFeedback>
  );
}
