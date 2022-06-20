import { TextInput, Text, View} from "react-native";

export default function SearchResultsScreen({route, navigation}) {
    return(
        <View>
            <TextInput
            placeholder = "Search ..."
            />
            <Text>Search Results Here</Text>
        </View>
    )
}
