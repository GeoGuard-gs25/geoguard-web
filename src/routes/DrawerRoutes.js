import { Ionicons } from "@expo/vector-icons";
import { createDrawerNavigator } from "@react-navigation/drawer";
import Home from "../screens/Home";
import { Image, StyleSheet } from "react-native";
import logoIcon from "../assets/icon-logo.png";

const Drawer = createDrawerNavigator();

export default function DrawerRoutes() {
  return (
    <Drawer.Navigator
      initialRouteName="Home"
      screenOptions={{
        headerTitle: () => <Image source={logoIcon} style={styles.logo} />,
        headerStyle: {
          backgroundColor: "#fff",
        },
        headerTintColor: "#004aab",
        drawerStyle: {
          backgroundColor: "#fff",
        },
        drawerActiveBackgroundColor: "#004aab",
        drawerActiveTintColor: "#fff",
        drawerInactiveTintColor: "#004aab",
        drawerLabelStyle: {
          fontWeight: "bold",
        },
      }}
    >
      <Drawer.Screen
        name="Home"
        component={Home}
        options={{
          drawerIcon: ({ color }) => (
            <Ionicons name="home" size={20} color={color} />
          ),
          drawerLabel: "Home",
        }}
      />
    </Drawer.Navigator>
  );
}

const styles = StyleSheet.create({
  logo: {
    width: 30,
    height: 30,
  },
});
