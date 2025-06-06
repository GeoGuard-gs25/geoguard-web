import { Text, TouchableOpacity, View } from "react-native";
import { stylesControl } from "../styles/stylesControl";

export default function Controls() {
  return (
    <View style={stylesControl.container}>
      <Text style={stylesControl.title}>Controles de Emergência</Text>

      <TouchableOpacity style={stylesControl.card}>
        <Text style={stylesControl.cardTitle}>Pré - Tragédia</Text>
        <Text style={stylesControl.cardDescription}>
          Monitora e garante que os geradores e baterias estejam carregados e
          operacionais. Simula falhas e inicia rotinas de teste preventivas.
        </Text>
      </TouchableOpacity>

      <TouchableOpacity style={stylesControl.card}>
        <Text style={stylesControl.cardTitle}>Durante Tragédia</Text>
        <Text style={stylesControl.cardDescription}>
          Ativa protocolos de emergência para fornecimento contínuo de energia a
          equipamentos críticos. Garante autonomia sem depender da rede
          elétrica.
        </Text>
      </TouchableOpacity>

      <TouchableOpacity style={stylesControl.card}>
        <Text style={stylesControl.cardTitle}>Pós - Tragédia</Text>
        <Text style={stylesControl.cardDescription}>
          Realiza desligamento seguro, registra consumo e orienta recarga da
          estação para futuras emergências.
        </Text>
      </TouchableOpacity>
    </View>
  );
}
