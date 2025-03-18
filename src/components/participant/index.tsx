import { View, Text, TouchableOpacity, TouchableOpacityProps} from "react-native";
import { styles } from "./styles";

type Props = TouchableOpacityProps & {
    title: string;
    onRemove: () => void;
}
export function Participant({title, onRemove, ...rest}: Props){
    return (
        <View style={styles.container} {...rest}>
            <Text style={styles.title}>{title}</Text>
            <TouchableOpacity style={styles.button} onPress={onRemove}>
                <Text style={styles.titleButton}>-</Text>
            </TouchableOpacity>
        </View>
    )
}