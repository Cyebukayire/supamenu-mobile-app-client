import axios from "axios";
import { useEffect, useState } from "react";
import { ScrollView, TextInput, Text, View, StyleSheet} from "react-native";
import BackButton from "../../components/buttons/BackButton";
import ResultCard from "../../components/cards/ResultCard";
import Colors from "../../constants/Colors";
import { baseUrl } from "../../utils/baseUrl";


export default function SearchResultsScreen({route, navigation}) {
    const [products, setProducts] = useState([]);
    useEffect(()=> {
        axios.get(`${baseUrl}/products`)
        .then((res)=>{
            setProducts(res.data.data)
        })
        .catch((e)=>{
            console.log("Error occured while fetching products");
        })
    }, [])
    
    const cards = products.map((product)=>{
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
                />
            </View>
            <Text style={styles.title}>Nearby Reastaurants</Text>
            <ScrollView style={styles.results}>
            {cards}
            </ScrollView>
        </View>
    )
}

const styles = StyleSheet.create({
    container:{
        backgroundColor: 'white',
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