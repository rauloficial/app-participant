import { View, Text, TouchableOpacity, TextInput } from "react-native";
import { styles } from "./styles";
import { Participant } from "@/components/participant";

export function Home() {
  function handleAddParticipant(){
    console.log("Você clicou em adicionar participante.")
  }
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Nome do Evento</Text>
      <Text style={styles.subTitle}>Sexta, 4 de Novembro de 2025</Text>

      <View style={styles.form}>
        <TextInput
          style={styles.input}
          placeholder="Nome do participante..."
          placeholderTextColor={"#6B6B6B"}
        />
        <TouchableOpacity style={styles.button} onPress={handleAddParticipant}>
            <Text style={styles.buttonText}>+</Text>
        </TouchableOpacity>
      </View>
      <Participant />
    </View>
  );
}
