import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import Graph from "../components/BarChart";
import { Button, IconButton, TextInput } from "react-native-paper";
import { useState } from "react";
import { Ionicons } from "@expo/vector-icons";

export default function Home() {
  const [city, setCity] = useState("");
  return (
    <View style={styles.container}>
      <View
        style={{ width: "100%", alignItems: "center", flexDirection: "row" }}
      >
        <TextInput
          mode="outlined"
          label="Sua cidade"
          value={city}
          onChangeText={setCity}
          style={styles.input}
          activeOutlineColor="#004AAB"
          placeholder="Digite a cidade em que reside"
        />
        <IconButton
          icon="magnify"
          iconColor="#fff"
          size={26}
          style={styles.button}
          containerColor="#004AAB"
        />
      </View>
      <Graph city={city} />
      <View
        style={{
          width: "100%",
          flexDirection: "row",
          justifyContent: "space-around",
        }}
      >
        <View
          style={{
            alignItems: "center",
            borderColor: "#004aab",
            borderWidth: 2,
            padding: 15,
            borderRadius: 8,
          }}
        >
          <Text
            style={{
              fontSize: 18,
              fontFamily: "JosefinSans_400Regular",
            }}
          >
            Temperatura
          </Text>

          <View
            style={{
              flexDirection: "row",
              alignItems: "center",
              justifyContent: "center",
              marginTop: 5,
            }}
          >
            <Text
              style={{
                fontSize: 32,
                fontFamily: "JosefinSans_400Regular",
                marginRight: 6,
              }}
            >
              25°C
            </Text>
            <Ionicons name="sunny" size={41} color="#ffa600" />
          </View>
        </View>
        <TouchableOpacity
          style={{
            alignItems: "center",
            justifyContent: "center",
            borderColor: "#004aab",
            borderWidth: 2,
            padding: 15,
            borderRadius: 8,
          }}
        >
          <Text
            style={{
              fontSize: 32,
              fontFamily: "JosefinSans_400Regular",
              marginRight: 6,
            }}
          >
            Controles
          </Text>
        </TouchableOpacity>
      </View>
      <TouchableOpacity
        style={{
          alignItems: "center",
          borderColor: "#004aab",
          borderWidth: 2,
          padding: 20,
          borderRadius: 8,
          marginTop: 15,
          width: "90%",
          flexDirection: "row",
          justifyContent: "center",
          gap: 15,
        }}
      >
        <Text
          style={{
            fontSize: 32,
            fontFamily: "JosefinSans_400Regular",
            marginRight: 6,
          }}
        >
          Relatórios
        </Text>
        <Ionicons name="stats-chart" size={65} color="#004aab" />
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    backgroundColor: "#f0f0f0",
  },
  input: {
    margin: 10,
    width: "75%",
  },
  button: {
    borderRadius: 8,
  },
});
