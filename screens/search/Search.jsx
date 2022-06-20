import {Text, View, StyleSheet, TextInput, Image } from 'react-native'
import Colors from '../../constants/Colors'

export default function SearchScreen() {
    return(
        <View style={styles.container}>
            <View style={styles.inputContainer}>
                <TextInput
                style={styles.input}
                placeholder="Search ..."
                />
            </View>
            <Text style={styles.or}>or</Text>
            <Image style={styles.img} source={require('../../assets/scan.png')}/>
            <Text style={styles.text}>Scan, Pay & Enjoy</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: Colors.primary,
        height: "100%",
        width: "100%",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        // paddingTop: 50,
    },
    inputContainer: {
        backgroundColor: "white",
        borderBottomWidth: 3,
        borderTopWidth: 3,
        borderLeftWidth: 3,
        borderRightWidth: 3,
        width: 350,
        height: 50,
        borderBottomColor: "white",
        borderTopColor: "white",  
        borderLeftColor: "white",
        borderRightColor: "white",
        borderRadius: 50,
        marginTop: 100,
        alignContent: 'center',
    },
    input: {
        padding: 10,
        fontSize: 20,
        color: "black",
    },

    or: {
        margin:90,
        // marginBottom: 20,
        fontWeight: 'bold',
        fontSize: 24,
        color: Colors.lightBlack,
        
    },
    text: {
        fontWeight: 'bold',
        fontSize: 24,
        color: Colors.lightBlack,
        
    },
    img: {
        width: 100,
        height: 100,
        marginBottom: 80
    }
})