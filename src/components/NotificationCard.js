import { Ionicons } from "@expo/vector-icons";
import AsyncStorage from "@react-native-async-storage/async-storage";
import axios from "axios";
import { Alert, Text, TouchableOpacity, View } from "react-native";

const baseURL = "http://192.168.0.17:8080/notifications";

export default function NotificationCard({
  notification,
  setNotificationList,
}) {
  async function deleteNotification() {
    try {
      const token = await AsyncStorage.getItem("authToken");
      await axios.delete(`${baseURL}/${notification.id}`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      setNotificationList((prevList) =>
        prevList.filter((item) => item.id !== notification.id)
      );
      Alert.alert("Notificação excluída");
    } catch (error) {
      Alert.alert("Erro ao excluir notificação");
      console.error(`Erro ao excluir notificação`, error);
    }
  }

  async function updateNotification() {
    try {
      const token = await AsyncStorage.getItem("authToken");
      await axios.put(
        `${baseURL}/${notification.id}`,
        {
          title: notification.title,
          message: notification.message,
          dataEnvio: notification.dataEnvio,
          lida: true,
        },
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      setNotificationList((prevList) =>
        prevList.map((item) =>
          item.id === notification.id ? { ...item, lida: true } : item
        )
      );
      Alert.alert("Notificação marcada como lida");
    } catch (error) {
      console.error(`Erro ao atualizar notificação ${notification.id}:`, error);
      Alert.alert("Erro ao atualizar notificação");
    }
  }

  return (
    <View
      style={{
        padding: 10,
        backgroundColor: "#f8f9fa",
        borderRadius: 8,
        marginBottom: 10,
      }}
    >
      <View
        style={{
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "space-between",
          marginBottom: 5,
        }}
      >
        <Text
          style={{
            fontSize: 16,
            fontWeight: "bold",
            flexDirection: "row",
            alignItems: "center",
            gap: 10,
          }}
        >
          {notification.title}
          {notification.lida ? null : (
            <Ionicons name="alert-circle" color="#e10000" size={20} />
          )}
        </Text>
        <Text style={{ fontSize: 12, color: "#adb5bd", marginTop: 5 }}>
          {new Date(notification.dataEnvio).toLocaleDateString()}
        </Text>
      </View>
      <Text style={{ fontSize: 14, color: "#6c757d", marginBottom: 10 }}>
        {notification.message}
      </Text>

      <View
        style={{ flexDirection: "row", justifyContent: "flex-end", gap: 15 }}
      >
        <TouchableOpacity
          onPress={updateNotification}
          style={{
            backgroundColor: "#28a745",
            paddingVertical: 6,
            paddingHorizontal: 12,
            borderRadius: 6,
          }}
        >
          <Text style={{ color: "#fff" }}>Marcar como lida</Text>
        </TouchableOpacity>

        <TouchableOpacity
          onPress={deleteNotification}
          style={{
            backgroundColor: "#dc3545",
            paddingVertical: 6,
            paddingHorizontal: 12,
            borderRadius: 6,
          }}
        >
          <Text style={{ color: "#fff" }}>Excluir</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}
