import { Ionicons } from "@expo/vector-icons";
import { createDrawerNavigator } from "@react-navigation/drawer";
import Home from "../screens/Home";
import { Image, StyleSheet } from "react-native";
import logoIcon from "../assets/icon-logo.png";
import Notification from "../screens/Notification";
import Controls from "../screens/Controls";
import LogoutScreen from "../screens/Logout";
import Reports from "../screens/Reports";

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
      <Drawer.Screen
        name="Notification"
        component={Notification}
        options={{
          drawerIcon: ({ color }) => (
            <Ionicons name="notifications" size={20} color={color} />
          ),
          drawerLabel: "Notificações",
        }}
      />
      <Drawer.Screen
        name="Controls"
        component={Controls}
        options={{
          drawerIcon: ({ color }) => (
            <Ionicons name="options" size={20} color={color} />
          ),
          drawerLabel: "Controles",
        }}
      />
      <Drawer.Screen
        name="Reports"
        component={Reports}
        options={{
          drawerIcon: ({ color }) => (
            <Ionicons name="stats-chart" size={20} color={color} />
          ),
          drawerLabel: "Relatórios",
        }}
      />
      <Drawer.Screen
        name="Logout"
        component={LogoutScreen}
        options={{
          drawerIcon: ({ color }) => (
            <Ionicons name="log-out-outline" size={20} color={color} />
          ),
          drawerLabel: "Sair",
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
