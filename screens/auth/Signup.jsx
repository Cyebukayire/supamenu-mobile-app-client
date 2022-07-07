import axios from "axios";
import React, { useState } from "react";
import { View, Text, StyleSheet, TextInput, TouchableOpacity, ScrollView } from "react-native";
import { NativeModules } from "react-native-web";
import Colors from '../../constants/Colors';
import { baseUrl } from "../../utils/baseUrl";
import { token } from "../../utils/token";

export default function SignupScreen({route, navigation}){
    const [ formData, setFormData] = useState({
        email: "",
        firstName: "",
        lastName: "",
        mobile: "",
        password: ""
    })
    const Signup = async (req) => {
        const data = {
            fname: req.firstName,
            lname: req.lastName,
            email: req.email,
            mobile: req.mobile,
            password: req.password
        };
        // console.log(data);
        await axios.post(`${baseUrl}/auth/signup`,data
        // await axios.post(`http://192.168.2.1:4000/api/v1/auth/signup`, data
            // ,{
            //     headers: {
            //         "Content-Type": "Application/Json",
            //         "Authorization": `Bearer ${token}`
            //     }
            // }
        )
        .then((res) => {
            console.log("Signed up successfully");
            navigation.navigate("SigninScreen", {});
        })
        .catch((e) => {
            console.log("User can't be registered, Please try again");
        })
    }
    return(
        <ScrollView style={styles.container}>
            <View style={styles.sub_container}>
                <View>
                    <Text style={styles.title}>
                        <Text style={styles.sub_title}>Supa</Text>Menu
                    </Text> 
                    <Text style={styles.welcome}>Welcome ...</Text>
                    <Text style={styles.sub_welcome}>Please fill in the information</Text>
                </View>
                    <View style={styles.inputs}>
                        <View style={styles.inputContainer}>
                            <TextInput
                            style={styles.input}
                            placeholder="Email"
                            onChangeText={(text) => {
                                setFormData((prevData) => {
                                    return({
                                        ...prevData,
                                        email: text
                                    })
                                })
                            }}
                            />
                        </View>
                        <View style={styles.inputContainer}>
                            <TextInput
                            style={styles.input}
                            placeholder="First name"
                            onChangeText={(text) => {
                                setFormData((prevData) => {
                                    return({
                                        ...prevData,
                                        firstName: text
                                    })
                                })
                            }}
                            />
                        </View>
                        <View style={styles.inputContainer}>
                            <TextInput
                            style={styles.input}
                            placeholder="Last name"
                            onChangeText={(text) => {
                                setFormData((prevData) => {
                                    return({
                                        ...prevData,
                                        lastName: text
                                    })
                                })
                            }}
                            />
                        </View>
                        <View style={styles.inputContainer}>
                            <TextInput
                            style={styles.input}
                            placeholder="Phone number"
                            onChangeText={(text) => {
                                setFormData((prevData) => {
                                    return({
                                        ...prevData,
                                        mobile: text
                                    })
                                })
                            }}
                            />
                        </View>
                        <View style={styles.inputContainer}>
                            <TextInput
                            secureTextEntry={true}
                            style={styles.input}
                            placeholder="Password"
                            onChangeText={(text) => {
                                setFormData((prevData) => {
                                    return({
                                        ...prevData,
                                        password: text
                                    })
                                })
                            }}
                            />
                        </View>
                    </View>
                    <TouchableOpacity
                        style={styles.button}
                        title="Sign In"
                        color={Colors.primary}  
                        onPress={() => {
                            Signup(formData);
                        }}
                        >
                        <Text style={styles.btnText}>Sign Up</Text>
                    </TouchableOpacity>
                    <Text style={styles.account}>
                        <Text>Already have an account? </Text>
                        <TouchableOpacity
                        onPress={() => {
                            navigation.navigate("SigninScreen", {});
                        }}
                        >
                            <Text style={{color: Colors.primary, fontSize: 15}}>Signin</Text>
                        </TouchableOpacity>
                    </Text>
            </View>
        </ScrollView>
    );
} 

const styles = StyleSheet.create({
    container: {
        backgroundColor: Colors.primary,
        width: '100%',
        height: "100%",
        boxSizing: "border-box",
    },
    scroll: {
        backgroundColor: "transparent",
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
        margin: 5,
        marginBottom: 30,
    }
})