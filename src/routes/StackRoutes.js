import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Login from "../screens/Login";
import DrawerRoutes from "./DrawerRoutes";
import SignUp from "../screens/SignUp";
import { useEffect, useState } from "react";

const Stack = createNativeStackNavigator();

const verificarLogin = async (setIsLogado) => {
  const dados = await AsyncStorage.getItem("authToken");
  if (dados) {
    return setIsLogado(true);
  } else {
    return setIsLogado(false);
  }
};

export default function StackRoutes() {
  const [isLogado, setIsLogado] = useState(false);

  useEffect(() => {
    verificarLogin(setIsLogado);
  }, []);
  return (
    <Stack.Navigator
      initialRouteName={isLogado ? "Drawer" : "Login"}
      screenOptions={{ headerShown: false }}
    >
      <Stack.Screen name="Login" component={Login} />
      <Stack.Screen name="SignUp" component={SignUp} />
      <Stack.Screen name="Drawer" component={DrawerRoutes} />
    </Stack.Navigator>
  );
}
