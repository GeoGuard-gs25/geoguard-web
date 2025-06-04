import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import Graph from "../components/BarChart";
import { Button, IconButton, TextInput } from "react-native-paper";
import { useState } from "react";
import { Ionicons } from "@expo/vector-icons";
import axios from "axios"; // <-- lembre-se de importar o axios

export default function Home() {
  const [city, setCity] = useState("");
  const [dadosChuva, setDadosChuva] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setErro] = useState("");
  const [temperatura, setTemperatura] = useState(null); // <-- novo estado

  async function buscarDados() {
    try {
      setLoading(true);
      setErro("");
      setDadosChuva(null);
      setTemperatura(null);

      const geoResponse = await axios.get(
        `https://geocoding-api.open-meteo.com/v1/search`,
        { params: { name: city, count: 1 } }
      );

      const geoData = geoResponse.data;
      if (!geoData.results || geoData.results.length === 0) {
        setErro("Cidade não encontrada.");
        setLoading(false);
        return;
      }

      const { latitude, longitude, timezone } = geoData.results[0];

      // Calcular intervalo de datas
      const hoje = new Date();
      const fim = hoje.toISOString().split("T")[0];
      const inicio = new Date();
      inicio.setDate(hoje.getDate() - 6);
      const inicioStr = inicio.toISOString().split("T")[0];

      // Buscar dados históricos de chuva
      const climaResponse = await axios.get(
        `https://archive-api.open-meteo.com/v1/archive`,
        {
          params: {
            latitude,
            longitude,
            start_date: inicioStr,
            end_date: fim,
            daily: "precipitation_sum",
            timezone,
          },
        }
      );

      const climaData = climaResponse.data;
      const labels = climaData.daily.time.map((data) => {
        const dia = new Date(data).getDay();
        return ["Dom", "Seg", "Ter", "Qua", "Qui", "Sex", "Sáb"][dia];
      });

      setDadosChuva({
        labels,
        datasets: [{ data: climaData.daily.precipitation_sum }],
      });

      // Buscar temperatura atual
      const climaAtualResponse = await axios.get(
        "https://api.open-meteo.com/v1/forecast",
        {
          params: {
            latitude,
            longitude,
            current_weather: true,
          },
        }
      );

      const temperaturaAtual =
        climaAtualResponse.data.current_weather.temperature;
      setTemperatura(temperaturaAtual);

      setLoading(false);
    } catch (err) {
      setErro("Erro ao carregar dados.");
      setLoading(false);
    }
  }

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
          onPress={buscarDados}
        />
      </View>

      <Graph city={city} data={dadosChuva} error={error} loading={loading} />

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
              {temperatura !== null ? `${temperatura}°C` : "--"}
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
