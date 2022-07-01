import { useState } from 'react'
import {Text, View, StyleSheet, TextInput, Image, TouchableOpacity } from 'react-native'
import Colors from '../../constants/Colors'

export default function SearchScreen({navigation, route}) {
    const [keywords, setKeywords] = useState(false);
    console.log("why are you there")
    return(
        <TouchableOpacity style={styles.container}
        onPress={()=>{
            console.log("cz touched")
        }}
        >
            <TouchableOpacity>
            <Text>Hello</Text>
        </TouchableOpacity>
            <View style={styles.inputContainer}>
                <TextInput
                style={styles.input}
                placeholder="Search for your preferred restaurant ..."
                />
            </View>
            <Text style={styles.or}>or</Text>
            <Image style={styles.img} source={require('../../assets/scan.png')}/>
            <Text style={styles.text}>Scan, Pay & Enjoy</Text>
        </TouchableOpacity>
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
        paddingTop: 2,
        paddingLeft: 10,
        paddingRight: 10
    },
    input: {
        marginTop: 4,
        padding: 10,
        fontSize: 16,
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