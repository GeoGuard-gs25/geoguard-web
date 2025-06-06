import React, { useEffect } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { useNavigation } from "@react-navigation/native";
import { View, ActivityIndicator } from "react-native";

export default function LogoutScreen() {
  const navigation = useNavigation();

  useEffect(() => {
    const logout = async () => {
      await AsyncStorage.removeItem("authToken");
      navigation.reset({
        index: 0,
        routes: [{ name: "Login" }],
      });
    };

    logout();
  }, []);

  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <ActivityIndicator size="large" color="#004aab" />
    </View>
  );
}
