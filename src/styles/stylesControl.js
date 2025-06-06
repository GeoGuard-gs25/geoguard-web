import { StyleSheet } from "react-native";

export const stylesControl = StyleSheet.create({
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
  card: {
    backgroundColor: "#004aab",
    borderRadius: 12,
    padding: 16,
    marginBottom: 16,
    borderWidth: 1,
    borderColor: "#004aab",
    alignItems: "center",
    width: "90%",
  },
  cardTitle: {
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 8,
    color: "#fff",
    fontFamily: "JosefinSans_400Regular",
  },
  cardDescription: {
    fontSize: 14,
    color: "#fff",
    lineHeight: 20,
    fontFamily: "JosefinSans_400Regular",
  },
});
