import React, { useRef } from "react";
import { Text, View, Dimensions } from "react-native";
import { stylesReports } from "../styles/stylesReports";
import Carousel from "react-native-reanimated-carousel";
import { Ionicons } from "@expo/vector-icons";
import EnergyBillCard from "../components/EnergyBillCard";

const { width: screenWidth } = Dimensions.get("window");

const energyBills = [
  {
    date: "Janeiro - 2025",
    value: "R$ 150,21",
    changePercent: "+ 8,3%",
  },
  {
    date: "Fevereiro - 2025",
    value: "R$ 137,98",
    changePercent: "- 8,1%",
  },
  {
    date: "Março - 2025",
    value: "R$ 145,50",
    changePercent: "+ 5,5%",
  },
  {
    date: "Abril - 2025",
    value: "R$ 138,70",
    changePercent: "- 4,7%",
  },
  {
    date: "Maio - 2025",
    value: "R$ 130,25",
    changePercent: "- 6,1%",
  },
  {
    date: "Junho - 2025",
    value: "R$ 125,10",
    changePercent: "- 3,9%",
  },
];

export default function Reports() {
  return (
    <View style={stylesReports.container}>
      <Text style={stylesReports.title}>Relatórios</Text>

      <View style={stylesReports.monthlyCostBox}>
        <Text style={stylesReports.monthlyCostTitle}>Custo mensal - Atual</Text>
        <Text style={stylesReports.monthlyCostValue}>R$ 50,21</Text>

        <View style={stylesReports.changeBox}>
          <View style={stylesReports.changePercentGreen}>
            <Ionicons name="chevron-down-circle" color="#007700" size={34} />
            <Text style={stylesReports.changePercentGreen}>- 42,4%</Text>
          </View>
          <Text style={stylesReports.changeText}>
            Em relação ao{"\n"}mês anterior
          </Text>
        </View>
      </View>

      <View style={stylesReports.historyBox}>
        <Text style={stylesReports.historyTitle}>Histórico de Custos</Text>

        <Carousel
          width={screenWidth * 0.8}
          height={180}
          data={energyBills}
          scrollAnimationDuration={1000}
          renderItem={({ item }) => (
            <EnergyBillCard
              date={item.date}
              value={item.value}
              changePercent={item.changePercent}
            />
          )}
          mode="parallax"
          modeConfig={{
            parallaxScrollingScale: 0.9,
            parallaxScrollingOffset: 10,
          }}
        />
      </View>
    </View>
  );
}
