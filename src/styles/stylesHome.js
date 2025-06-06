import { StyleSheet } from "react-native";

export const stylesHome = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    backgroundColor: "#fff",
  },
  header: {
    width: "100%",
    alignItems: "center",
    flexDirection: "column",
  },
  notificationButton: {
    alignItems: "center",
    padding: 15,
    borderRadius: 8,
    marginTop: 15,
    width: "90%",
    flexDirection: "row",
    justifyContent: "center",
    gap: 15,
    backgroundColor: "#d9d9d9",
  },
  notificationText: {
    fontSize: 32,
    fontFamily: "JosefinSans_400Regular",
    marginRight: 6,
  },
  searchContainer: {
    width: "100%",
    alignItems: "center",
    flexDirection: "row",
  },
  input: {
    margin: 10,
    width: "75%",
  },
  button: {
    borderRadius: 8,
  },
  infoRow: {
    width: "100%",
    flexDirection: "row",
    justifyContent: "space-around",
  },
  card: {
    alignItems: "center",
    borderColor: "#004aab",
    borderWidth: 2,
    padding: 15,
    borderRadius: 8,
  },
  cardTitle: {
    fontSize: 18,
    fontFamily: "JosefinSans_400Regular",
  },
  temperatureRow: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    marginTop: 5,
  },
  temperatureText: {
    fontSize: 32,
    fontFamily: "JosefinSans_400Regular",
    marginRight: 6,
  },
  controlesText: {
    fontSize: 32,
    fontFamily: "JosefinSans_400Regular",
  },
  reportButton: {
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
  },
  relatoriosText: {
    fontSize: 32,
    fontFamily: "JosefinSans_400Regular",
    marginRight: 6,
  },
});
