import { View, Text, Image, TouchableOpacity, StyleSheet } from "react-native";
import Colors from "../../constants/Colors";

const ResultCard = () => {
    return(
        <View >
            <Text>Hello worldss</Text>
{/*            
            <View style={styles.details}>
                <Text>Choose Kigali</Text>
                <Text>World, African, Pizzeria, Coffee</Text>
            </View> */}
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

export default ResultCard;