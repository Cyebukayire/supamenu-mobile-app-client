import { View, Text, Image, TouchableOpacity, StyleSheet } from "react-native";
import Colors from "../../constants/Colors";

const ResultCard = ({name, unitPrice, img, quantity}) => {
    return(
        <View style={styles.card}>
            {/* <Image source={{uri:'https://www.seriouseats.com/thmb/1OdmFf9djrsvcLxbHs4JKdwj2lo=/1500x1125/filters:fill(auto,1)/__opt__aboutcom__coeus__resources__content_migration__serious_eats__seriouseats.com__2019__06__20190614-yogurt-vicky-wasik-8-1b8381eea1b44c17ac31879c11e6c624.jpg'}}/> */}
            <Image style={styles.img} source={require('../../assets/yogurt.jpeg')}/>
            <View style={styles.details}>
                <Text style={styles.title}>{name}</Text>
                <Text style={styles.price}>$ {unitPrice}</Text>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    card: {
        marginTop: 15,
        backgroundColor: Colors.lightGrey,
        boxSizing: "border-box",
        padding: 10,
        display: 'flex',
        flexDirection: "row",
        // justifyContent: "space-between"
    },
    details: {
        display: 'flex',
        paddingLeft: 50,
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
    },
    title: {
        fontSize: 16,
        fontWeight: "bold"
    },
    price: {
        marginTop: 5,
        fontSize: 16,
        fontWeight: "400"
    },

    img: {
        borderRadius: 5,
        height: 100,
        width: 100,
    },
})

export default ResultCard;