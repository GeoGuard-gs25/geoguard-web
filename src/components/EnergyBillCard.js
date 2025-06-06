import React from "react";
import { View, Text } from "react-native";
import { stylesReports } from "../styles/stylesReports";

export default function EnergyBillCard({ date, value, changePercent }) {
  const isNegative = changePercent.trim().startsWith("-");

  return (
    <View style={stylesReports.historyItem}>
      <Text style={stylesReports.historyMonth}>{date}</Text>
      <Text style={stylesReports.historyValue}>{value}</Text>

      <View
        style={
          isNegative
            ? stylesReports.changeBoxGreenSmall
            : stylesReports.changeBoxRedSmall
        }
      >
        <Text>{changePercent}</Text>
        <Text style={stylesReports.changeTextSmall}>
          Em relação ao{"\n"}mês anterior
        </Text>
      </View>
    </View>
  );
}
