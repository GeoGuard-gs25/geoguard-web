import { Ionicons } from "@expo/vector-icons";
import { createDrawerNavigator } from "@react-navigation/drawer";

const Drawer = createDrawerNavigator();

export default function DrawerRoutes(){
  return (
    <Drawer.Navigator initialRouteName="Home" screenOptions={{
      headerTitle: () => (
        <Ionicons name="navigate" size={28} color="#00A431" />
      ),
      headerStyle: {
        backgroundColor: "#000",
      },
      headerTintColor: "#00A431",
      drawerStyle: {
        backgroundColor: "#000",
      },
      drawerActiveBackgroundColor: "#00A431",
      drawerActiveTintColor: "#000",
      drawerInactiveTintColor: "#fff",
      drawerLabelStyle: {
        fontWeight: "bold",
      },
    }}>
    </Drawer.Navigator>
  );
};