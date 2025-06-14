import { StyleSheet } from "react-native";

export const stylesReports = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    backgroundColor: "#fff",
    gap: 20,
  },
  title: {
    alignItems: "center",
    padding: 15,
    borderRadius: 8,
    marginTop: 15,
    width: "90%",
    flexDirection: "row",
    justifyContent: "center",
    backgroundColor: "#d9d9d9",
    fontFamily: "JosefinSans_400Regular",
    fontSize: 24,
    textAlign: "center",
  },
  monthlyCostBox: {
    borderColor: "#0052cc",
    borderWidth: 2,
    borderRadius: 5,
    padding: 15,
    marginBottom: 20,
    width: "90%",
    alignItems: "center",
  },
  monthlyCostTitle: {
    fontWeight: "bold",
    fontSize: 26,
    marginBottom: 10,
    fontFamily: "JosefinSans_400Regular",
  },
  monthlyCostValue: {
    fontSize: 26,
    fontWeight: "bold",
    marginBottom: 15,
    fontFamily: "JosefinSans_400Regular",
  },
  changeBox: {
    padding: 10,
    borderRadius: 5,
    width: 180,
    flexDirection: "row",
    alignItems: "center",
    gap: 20,
    marginLeft: -130,
  },
  changePercentGreen: {
    fontWeight: "bold",
    fontSize: 14,
    color: "#007700",
    backgroundColor: "#ccffcc",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-around",
    padding: 10,
    borderRadius: 10,
  },

  changePercentRed: {
    fontWeight: "bold",
    fontSize: 14,
    backgroundColor: "#ffcccc",
  },
  changeText: {
    fontSize: 20,
    color: "#004400",
    marginTop: 3,
    fontFamily: "JosefinSans_400Regular",
  },
  historyBox: {
    borderColor: "#0052cc",
    borderWidth: 2,
    borderRadius: 5,
    flexDirection: "column",
    alignItems: "center",
    width: "90%",
    padding: 15,
  },
  historyItem: {
    width: 240,
    backgroundColor: "#f0f0f0",
    padding: 10,
  },
  historyMonth: {
    fontWeight: "bold",
    fontSize: 14,
    marginBottom: 10,
    textAlign: "center",
    fontFamily: "JosefinSans_400Regular",
  },
  historyValue: {
    fontSize: 20,
    fontWeight: "bold",
    marginBottom: 10,
    textAlign: "center",
    fontFamily: "JosefinSans_400Regular",
  },
  changeBoxGreenSmall: {
    backgroundColor: "#ccffcc",
    borderRadius: 5,
    padding: 6,
    marginBottom: 10,
    alignItems: "center",
  },
  changeBoxRedSmall: {
    backgroundColor: "#ffcccc",
    borderRadius: 5,
    padding: 6,
    marginBottom: 10,
    alignItems: "center",
  },
  changeTextSmall: {
    fontSize: 10,
    textAlign: "center",
  },
  historyTitle: {
    fontWeight: "bold",
    fontSize: 20,
    marginBottom: 10,
    fontFamily: "JosefinSans_400Regular",
  },
});
