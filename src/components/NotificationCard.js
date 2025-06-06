import { Ionicons } from "@expo/vector-icons";
import { Text, View } from "react-native";

export default function NotificationCard({ notification }) {
  return (
    <View
      style={{
        padding: 10,
        backgroundColor: "#f8f9fa",
        borderRadius: 8,
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
      <Text style={{ fontSize: 14, color: "#6c757d" }}>
        {notification.message}
      </Text>
    </View>
  );
}
