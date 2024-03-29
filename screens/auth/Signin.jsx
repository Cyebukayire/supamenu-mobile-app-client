import axios from "axios";
import React, { useEffect, useState } from "react";
import { View, Text, StyleSheet, TextInput, TouchableOpacity, ScrollView } from "react-native";
import Colors from '../../constants/Colors';
import { baseUrl } from "../../utils/baseUrl";
import * as Notifications from 'expo-notifications';
import * as Permissions from 'expo-permissions'

export default function SigninScreen({route, navigation}){
    const [token, setToken] = useState(false);
    const [formData, setFormData] = useState({
        email: '',
        password: ''
    })

       /** START AUTH  */
    const Login = async (data) => {
        await axios.post(`${baseUrl}/auth/signin`,
        {
            email: data.email,
            password: data.password
        })
        .then((response) => {
            setToken(response.data.token);
            console.log(token);
            console.log("Logged in successfully");
            alert("You're logged in successfully");
            navigation.navigate('SearchResultsScreen', {})
        })
        .catch((e) => {
            console.log("User can't login, Please try again.");
        })
    }
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
                            onChangeText={(text) => {
                                setFormData((prevData) => {
                                    return({
                                        ...prevData,
                                        email: text,
                                    })
                                })
                            }}
                            />
                        </View>
                        <View style={styles.inputContainer}>
                            <TextInput
                            secureTextEntry={true}
                            style={styles.input}
                            placeholder="Enter your password"
                            onChangeText={(text) => {
                                setFormData((prevData) => {
                                    return({
                                        ...prevData,
                                        password: text,
                                    })
                                })}}
                            />
                        </View>
                    </View>
                    <TouchableOpacity
                        style={styles.button}
                        title="Sign In"
                        color={Colors.primary}  
                        onPress={() => {
                            Login(formData);
                        }}
                    >
                        <Text style={styles.btnText}>Sign In</Text>
                    </TouchableOpacity>
                    <Text style={styles.account}>
                        <Text>Don't have an account yet? </Text>
                        <TouchableOpacity
                            onPress={() => {
                                navigation.navigate("SignupScreen", {});
                            }}
                        >
                            <Text style={{color: Colors.primary, fontSize: 15}}>Signup</Text>
                        </TouchableOpacity>
                    </Text>
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
    },
    account: {
        fontSize: 18,   
        color: Colors.grey,
        textAlign: "center",
        margin: 5
    }
})