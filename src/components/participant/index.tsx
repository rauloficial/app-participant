import { View, Text, TouchableOpacity} from "react-native";
import { styles } from "./styles";

export function Participant(){
    return (
        <View style={styles.container}>
            <Text style={styles.title}>Rodrigo Gomes</Text>
            <TouchableOpacity style={styles.button}>

            </TouchableOpacity>
        </View>
    )
}