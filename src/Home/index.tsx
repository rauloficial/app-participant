import {
  View,
  Text,
  TouchableOpacity,
  TextInput,
  FlatList,
  Alert,
} from "react-native";
import { styles } from "./styles";
import { Participant } from "@/components/participant";
import { useState } from "react";

export function Home() {
  const [participantName, setParticipant] = useState("");
  const [participants, setParticipants] = useState<string[]>([]);

  function handleAddParticipant() {
    const trimmedName = participantName.trim();
    if(!trimmedName){
      Alert.alert("Atenção", "O nome do participante não pode estar vazio.");
      return;
    }
    if(participants.includes(trimmedName)){
      Alert.alert("Atenção", "Este participante já está adicionado.");
      return;
    }
    setParticipants([...participants, trimmedName]);
    setParticipant("");
  }
  function handleParticipantRemove(name: string) {
    Alert.alert("Remover", `Remover o participante ${name}?`, [
      {
        text: "Sim",
        onPress: () =>
          setParticipants((prevState) =>
            prevState.filter((participant) => participant !== name)
          ),
      },
      {
        text: "Não",
        style: "cancel",
      },
    ]);
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
          onChangeText={setParticipant}
          value={participantName}
        />
        <TouchableOpacity style={styles.button} onPress={handleAddParticipant}>
          <Text style={styles.buttonText}>+</Text>
        </TouchableOpacity>
      </View>
      <FlatList
        data={participants}
        keyExtractor={(item) => item}
        renderItem={({ item }) => (
          <Participant
            title={item}
            onRemove={() => handleParticipantRemove(item)}
          />
        )}
        showsVerticalScrollIndicator={false}
        ListEmptyComponent={() => (
          <Text style={styles.listEmptyText}>Ninguém chegou no evento ainda? Adicione participantes a sua lista de presença.</Text>
        )}
      />
    </View>
  );
}
