import { Text, TouchableOpacity, View } from "react-native";
import Graph from "../components/BarChart";
import { IconButton, TextInput } from "react-native-paper";
import { useState } from "react";
import { Ionicons } from "@expo/vector-icons";
import axios from "axios";
import { stylesHome } from "../styles/stylesHome";
import { useNavigation } from "@react-navigation/native";

export default function Home() {
  const [city, setCity] = useState("");
  const [dadosChuva, setDadosChuva] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setErro] = useState("");
  const [temperatura, setTemperatura] = useState(null);
  const navigation = useNavigation();

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

      const hoje = new Date();
      const fim = hoje.toISOString().split("T")[0];
      const inicio = new Date();
      inicio.setDate(hoje.getDate() - 6);
      const inicioStr = inicio.toISOString().split("T")[0];

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
    <View style={stylesHome.container}>
      <View style={stylesHome.header}>
        <TouchableOpacity
          style={stylesHome.notificationButton}
          onPress={() => navigation.navigate("Notification")}
        >
          <Ionicons name="notifications" size={34} color="#e10000" />
          <Text style={stylesHome.notificationText}>Notificações</Text>
        </TouchableOpacity>

        <View style={stylesHome.searchContainer}>
          <TextInput
            mode="outlined"
            label="Sua cidade"
            value={city}
            onChangeText={setCity}
            style={stylesHome.input}
            activeOutlineColor="#004AAB"
            placeholder="Digite a cidade em que reside"
          />
          <IconButton
            icon="magnify"
            iconColor="#fff"
            size={26}
            style={stylesHome.button}
            containerColor="#004AAB"
            onPress={buscarDados}
          />
        </View>
      </View>

      <Graph city={city} data={dadosChuva} error={error} loading={loading} />

      <View style={stylesHome.infoRow}>
        <View style={stylesHome.card}>
          <Text style={stylesHome.cardTitle}>Temperatura</Text>
          <View style={stylesHome.temperatureRow}>
            <Text style={stylesHome.temperatureText}>
              {temperatura !== null ? `${temperatura}°C` : "--"}
            </Text>
            <Ionicons name="sunny" size={41} color="#ffa600" />
          </View>
        </View>

        <TouchableOpacity
          style={stylesHome.card}
          onPress={() => navigation.navigate("Controls")}
        >
          <Text style={stylesHome.controlesText}>Controles</Text>
        </TouchableOpacity>
      </View>

      <TouchableOpacity style={stylesHome.reportButton}>
        <Text style={stylesHome.relatoriosText}>Relatórios</Text>
        <Ionicons name="stats-chart" size={65} color="#004aab" />
      </TouchableOpacity>
    </View>
  );
}
