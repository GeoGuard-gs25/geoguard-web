import { View, Text, Dimensions, ActivityIndicator } from "react-native";
import { BarChart } from "react-native-chart-kit";

const screenWidth = Dimensions.get("window").width;

const configGrafico = {
  backgroundGradientFrom: "#e0f7fa",
  backgroundGradientTo: "#80deea",
  color: (opacity = 1) => `rgba(0, 96, 100, ${opacity})`,
  barPercentage: 0.5,
  decimalPlaces: 0,
};

export default function Graph({ city, data, loading, error }) {
  return (
    <View>
      {!data ? (
        <Text
          style={{
            textAlign: "center",
            fontSize: 16,
            marginVertical: 20,
            color: "#666",
            fontFamily: "JosefinSans_400Regular",
          }}
        >
          Informe uma cidade para exibir o gráfico de chuvas.
        </Text>
      ) : (
        <>
          <Text
            style={{
              textAlign: "center",
              fontSize: 18,
              marginVertical: 10,
              fontFamily: "JosefinSans_400Regular",
            }}
          >
            Chuva dos últimos 7 dias em {city}
          </Text>

          {loading && (
            <ActivityIndicator
              style={{ margin: 15 }}
              size="large"
              color="#006064"
            />
          )}

          {error !== "" && (
            <Text style={{ color: "red", textAlign: "center" }}>{error}</Text>
          )}

          {data && !loading && (
            <BarChart
              data={data}
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
          )}
        </>
      )}
    </View>
  );
}
