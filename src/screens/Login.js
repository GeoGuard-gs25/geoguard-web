import {
  JosefinSans_400Regular,
  useFonts,
} from "@expo-google-fonts/josefin-sans";
import {
  Image,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  Alert,
} from "react-native";
import logo from "../assets/logo-without-bg.png";
import { TextInput } from "react-native-paper";
import { useState } from "react";
import { useNavigation } from "@react-navigation/native";
import axios from "axios";
import AsyncStorage from "@react-native-async-storage/async-storage";

export default async function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const navigation = useNavigation();
  const [loading, setLoading] = useState(false);
  const [fontsLoaded] = useFonts({
    JosefinSans_400Regular,
  });
  const token = await AsyncStorage.getItem("authToken");
  if (token) {
    navigation.navigate("Drawer");
  }

  const handleLogin = async () => {
    if (!email || !password) {
      Alert.alert("Erro", "Preencha todos os campos!");
      return;
    }

    try {
      setLoading(true);
      const response = await axios.post("http://192.168.0.14:8080/login", {
        email,
        password,
      });

      const token = response.data.token;

      await AsyncStorage.setItem("authToken", token);

      navigation.navigate("Drawer");
      setLoading(false);
    } catch (error) {
      setLoading(false);
      if (axios.isAxiosError(error)) {
        if (error.response?.status === 401) {
          Alert.alert("Erro", "Credenciais inválidas!");
        } else {
          Alert.alert("Erro", "Erro ao realizar login.");
        }
      } else {
        Alert.alert("Erro", "Erro inesperado.");
      }
      console.error("Erro no login:", error);
    }
  };

  if (!fontsLoaded) {
    return null;
  }

  return (
    <View style={styles.container}>
      <View style={styles.firstHalf}>
        <Text style={styles.title}>Login</Text>
      </View>
      <View style={styles.secondHalf}>
        <Image style={styles.styleImage} source={logo} />
        <View style={{ width: "100%", alignItems: "center", gap: 20 }}>
          <TextInput
            mode="outlined"
            label="Email"
            value={email}
            onChangeText={setEmail}
            style={styles.input}
            activeOutlineColor="#004AAB"
            placeholder="Digite seu email cadastrado"
          />
          <TextInput
            mode="outlined"
            label="Senha"
            value={password}
            onChangeText={setPassword}
            style={styles.input}
            activeOutlineColor="#004AAB"
            placeholder="Digite sua senha"
            secureTextEntry={!showPassword}
            right={
              <TextInput.Icon
                icon={showPassword ? "eye-off" : "eye"}
                onPress={() => setShowPassword(!showPassword)}
              />
            }
          />
          <TouchableOpacity style={styles.button} onPress={handleLogin}>
            <Text style={styles.buttonText}>
              {loading ? "Carregando..." : "Enviar"}
            </Text>
          </TouchableOpacity>
          <Text style={{ color: "#000", fontSize: 16 }}>
            Não possui uma conta?{" "}
            <Text
              style={{ color: "#004AAB", fontWeight: "bold" }}
              onPress={() => navigation.navigate("SignUp")}
            >
              Cadastre-se Já
            </Text>
          </Text>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    justifyContent: "center",
    alignItems: "center",
  },
  firstHalf: {
    width: "100%",
    flex: 3,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#004AAB",
    borderBottomEndRadius: 50,
    borderBottomStartRadius: 50,
  },
  secondHalf: {
    width: "100%",
    flex: 7,
    flexDirection: "column",
    justifyContent: "flex-start",
    alignItems: "center",
    backgroundColor: "#fff",
  },
  title: {
    fontFamily: "JosefinSans_400Regular",
    fontSize: 32,
    color: "#FFF",
    marginTop: 80,
  },
  styleImage: {
    width: 200,
    resizeMode: "contain",
  },
  input: {
    width: "80%",
  },
  button: {
    backgroundColor: "#004AAB",
    paddingVertical: 12,
    paddingHorizontal: 32,
    borderRadius: 25,
    marginTop: 10,
    width: "80%",
    alignItems: "center",
  },
  buttonText: {
    color: "#fff",
    fontSize: 16,
    fontFamily: "JosefinSans_400Regular",
  },
});
