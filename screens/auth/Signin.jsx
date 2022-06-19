import React from "react";
import { View, Text, StyleSheet, TextInput, TouchableOpacity, ScrollView } from "react-native";
import Colors from '../../constants/Colors';

export default function SigninScreen(){
    return(
        <View style={styles.container}>
            <View style={styles.sub_container}>
                <View>
                    <Text style={styles.title}>
                        <Text style={styles.sub_title}>Supa</Text>Menu
                    </Text> 
                    <Text style={styles.welcome}>Welcome ...</Text>
                    <Text style={styles.sub_welcome}>Signin to continue</Text>
                </View>
                <ScrollView>
                    <View style={styles.inputs}>
                        <View style={styles.inputContainer}>
                            <TextInput
                            style={styles.input}
                            placeholder="Enter your email"
                            onChangeText={(text) => {}}
                            />
                        </View>
                        <View style={styles.inputContainer}>
                            <TextInput
                            secureTextEntry={true}
                            style={styles.input}
                            placeholder="Enter your password"
                            onChangeText={(text) => {}}
                            />
                        </View>
                    </View>
                    <TouchableOpacity
                        style={styles.button}
                        title="Sign In"
                        color={Colors.primary}  
                    >
                        <Text style={styles.btnText}>Sign In</Text>
                    </TouchableOpacity>
                </ScrollView>
            </View>
        </View>
    );
} 

const styles = StyleSheet.create({
    container: {
        backgroundColor: Colors.primary,
        width: '100%',
        height: "100%",
        boxSizing: "border-box",
    },
    sub_container: {
        backgroundColor: "white",
        boxSizing: "border-box",
        marginTop: 90,
        height: "100%",
        borderTopLeftRadius: 30,  
        borderTopRightRadius: 30,  


        display: "flex",
        flexDirection: "column",
        alignItems: "center"
    },
    title: {
        fontSize: 45,
        fontWeight: "bold",
        color: Colors.primary,
        textAlign: "center",
        margin: 15,
    },
    sub_title: {
        color: 'black'
    },
    welcome: {
        fontSize: 20,
        color: "black",
        fontWeight: "bold",
        textAlign: "center",
    },
    sub_welcome: {
        fontSize: 15,
        color: Colors.grey,
        fontWeight: "bold",
        textAlign: "center",
        margin: 10,
    },
    inputContainer: {
        borderBottomWidth: 3,
        borderTopWidth: 3,
        borderLeftWidth: 3,
        borderRightWidth: 3,
        width: 350,
        height: 70,
        borderBottomColor:Colors.secondary,
        borderTopColor: Colors.secondary,  
        borderLeftColor: Colors.secondary,
        borderRightColor: Colors.secondary,
        borderRadius: 5,
        marginTop: 25,
        alignContent: 'center',
    },
    input: {
        padding: 10,
        fontSize: 20,
        color: "black",
        
    },
    inputs: {
        display: 'flex',
        flexDirection: "column",
        alignItems: "center",       
    },
    button: {
        backgroundColor: Colors.primary,
        height: 60,
        width: 350,
        marginTop: 20,
        borderRadius: 5,
    },
    btnText: {
        color: "white", 
        fontSize: 20,
        fontWeight: "bold",
        textAlign: "center",
        margin: 15,
    }
})