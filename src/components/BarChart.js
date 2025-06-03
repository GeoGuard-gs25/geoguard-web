import { View, Text, Dimensions } from "react-native";
import { BarChart } from "react-native-chart-kit";

const screenWidth = Dimensions.get("window").width;

const dadosChuva = {
  labels: ["Seg", "Ter", "Qua", "Qui", "Sex", "Sáb", "Dom"],
  datasets: [
    {
      data: [12, 25, 8, 18, 5, 10, 20],
    },
  ],
};

const configGrafico = {
  backgroundGradientFrom: "#e0f7fa",
  backgroundGradientTo: "#80deea",
  color: (opacity = 1) => `rgba(0, 96, 100, ${opacity})`,
  barPercentage: 0.5,
  decimalPlaces: 0,
};

export default function Graph({ city }) {
  return (
    <View>
      <Text
        style={{
          textAlign: "center",
          fontSize: 18,
          marginVertical: 10,
          fontFamily: "JosefinSans_400Regular",
        }}
      >
        Chuva dos últimos 7 dias {city && `em ${city}`}
      </Text>
      <BarChart
        data={dadosChuva}
        width={screenWidth - 16}
        height={220}
        yAxisSuffix=" mm"
        chartConfig={configGrafico}
        verticalLabelRotation={30}
        style={{
          marginVertical: 8,
          borderRadius: 8,
          alignSelf: "center",
        }}
      />
    </View>
  );
}
