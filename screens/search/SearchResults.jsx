import { TextInput, Text, View, StyleSheet} from "react-native";
import BackButton from "../../components/buttons/BackButton";
import ResultCard from "../../components/cards/ResultCard";
import Colors from "../../constants/Colors";

export default function SearchResultsScreen({route, navigation}) {
    return(
        <View style={styles.container}>
            <View style={styles.heading}>
                <BackButton color={Colors.primary}/>
                <TextInput style={styles.input}
                placeholder = "Search ..."
                />
            </View>

            <Text style={styles.title}>Nearby Reastaurants</Text>
            <ResultCard />
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
        fontsize: 15,
    }
})