import { useEffect, useState } from "react";
import { Text, TouchableOpacity, View } from "react-native";
import NotificationCard from "../components/NotificationCard";
import { ScrollView } from "react-native-gesture-handler";
import axios from "axios";
import AsyncStorage from "@react-native-async-storage/async-storage";

export default function Notification() {
  const [notificationList, setNotificationList] = useState([]);
  const [loading, setLoading] = useState(false);

  async function getNotifications() {
    try {
      setLoading(true);
      const token = await AsyncStorage.getItem("authToken");

      const response = await axios.get(
        "http://192.168.0.17:8080/notifications",
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );

      setNotificationList(response.data.content);
      setLoading(false);
    } catch (error) {
      console.error("Erro ao buscar notificações:", error);
      setLoading(false);
    }
  }

  useEffect(() => {
    getNotifications();
  }, []);

  return (
    <View
      style={{
        flex: 1,
        alignItems: "center",
        backgroundColor: "#fff",
      }}
    >
      <ScrollView style={{ width: "100%" }}>
        {loading && <Text>Carregando notificações...</Text>}

        {!loading && notificationList.length === 0 && (
          <View style={{ flex: 1, alignItems: "center", marginTop: 50 }}>
            <Text style={{ textAlign: "center", marginTop: 20 }}>
              Nenhuma notificação disponível.
            </Text>
            <TouchableOpacity
              style={{
                backgroundColor: "#004aab",
                padding: 10,
                borderRadius: 8,
                marginTop: 20,
                alignItems: "center",
                width: "50%",
              }}
              onPress={getNotifications}
            >
              <Text style={{ color: "#fff" }}>Recarregar</Text>
            </TouchableOpacity>
          </View>
        )}

        {!loading &&
          notificationList.map((notification) => (
            <NotificationCard
              key={notification.id}
              notification={notification}
              setNotificationList={setNotificationList}
            />
          ))}
      </ScrollView>
    </View>
  );
}
