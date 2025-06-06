import { useEffect, useState } from "react";
import { Text, View } from "react-native";
import NotificationCard from "../components/NotificationCard";
import { ScrollView } from "react-native-gesture-handler";
import axios from "axios";

export default function Notification() {
  const [notificationList, setNotificationList] = useState([]);
  const [loading, setLoading] = useState(false);

  async function getNotifications() {
    try {
      setLoading(true);
      const response = await axios.get(
        "http://192.168.0.14:8080/notifications"
      );

      setNotificationList(response.data);
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
          <Text style={{ textAlign: "center", marginTop: 20 }}>
            Nenhuma notificação disponível.
          </Text>
        )}

        {!loading &&
          notificationList.map((notification) => (
            <NotificationCard
              key={notification.id}
              notification={notification}
            />
          ))}
      </ScrollView>
    </View>
  );
}
