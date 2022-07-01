import { View, Text, Image, TouchableOpacity, StyleSheet } from "react-native-web";
import Colors from "../../constants/Colors";

export default function Card(){
    return(
        <View style={styles.card}>
            <Image
              source={{
                uri: "https://poetryteatime.com/assets/blog-images/_featuredMaxHeight/PTT-Tips-Tea-in-India-featured.jpg",
              }}
              resizeMode="contain"
              style={styles.img}
            />
            <View style={styles.details}>
                <Text>Choose Kigali</Text>
                <Text>World, African, Pizzeria, Coffee</Text>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    card: {
        backgroundColor: Colors.grey,
    },
    details: {
        display: 'flex'
    },

    img: {
        borderRadius: 5,
        height: 50,
        width: 50,
    },
})