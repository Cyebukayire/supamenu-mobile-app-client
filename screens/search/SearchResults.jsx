import axios from "axios";
import React, { useEffect, useState } from "react";
import { FlatList, RefreshControl, ScrollView, TextInput, Text, View, StyleSheet} from "react-native";
import BackButton from "../../components/buttons/BackButton";
import ResultCard from "../../components/cards/ResultCard";
import Colors from "../../constants/Colors";
import { baseUrl } from "../../utils/baseUrl";

export default function SearchResultsScreen({route, navigation}) {
    
    const [keyword, setKeyword] = useState({
        key: ""
    });
    const [products, setProducts] = useState([]);
    const [searchResults, setSearchResults] = useState([]);
    const [bgColor, changeBgColor] = useState('white');
    const [refreshing, setRefreshing] = React.useState(false);
  
    // HANDLE SWIP-REFRESH
    const onRefresh = () => {
        setRefreshing(true);
        setTimeout(() => {
          setRefreshing(false);
        }, 2000);
        fetchProducts();
      };

    // STYLES
    const styles = StyleSheet.create({
        container:{
            backgroundColor: bgColor,
            padding: 30,
            height: '100%',
            width: '100%',
        },
        heading: {
            display: "flex",
            flexDirection: "row",
            borderBottomColor: Colors.grey,
            borderBottomWidth: 1,
            paddingBottom: 15
        },
        input: {
            marginLeft: 30,
            marginTop: 10,
        },
        title: {
            marginTop: 15,
            color: Colors.primary,
            fontSize: 15,
        },
        results: {
            marginTop: 23
        }
    })
    const fetchProducts = ()=> {
        axios.get(`${baseUrl}/products`)
        .then((res)=>{
            setProducts(res.data.data);
            setSearchResults(res.data.data);
        })
        .catch((e)=>{
            console.log("Error occured while fetching products");
        })
    }
    useEffect(()=> {
        fetchProducts();
    }, [])


    // Filter Data
    useEffect(()=> {
        setSearchResults(()=>{
            const filtered = products.filter((product)=>{
                return (product.name.indexOf(keyword.key) != -1);
            })
            return(filtered)
        })
        if(keyword.key == ""){
            setSearchResults(products);
        }
    }, [keyword.key])
    
    const cards = searchResults.map((product)=>{
        return(
            <ResultCard key={product._id} name = {product.name} unitPrice={product.unitPrice} img = {product.img} quantity={product.quantity} />
        )
    })

    return(
        <View style={styles.container}>
            <View style={styles.heading}>
                <BackButton color={Colors.primary} navigation={navigation}/>
                <TextInput style={styles.input}
                placeholder = "Search ..."
                onChangeText={(text)=>{
                    setKeyword(prevKeyword => {
                        return(
                            {
                                ...prevKeyword, 
                                key: text
                            }
                        )
                    })
                }}
                />
            </View>
            <Text style={styles.title}>Available Products</Text>
            
            <ScrollView style={styles.results}
                refreshControl={
                    <RefreshControl refreshing={refreshing} 
                    onRefresh={onRefresh} />
                }
            >
            {cards}
            </ScrollView>
        </View>
    )
}

