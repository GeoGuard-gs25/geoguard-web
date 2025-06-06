import React from "react";
import { ScrollView, StyleSheet, Text, View, Image, Linking, TouchableOpacity } from "react-native";
import { Ionicons } from "@expo/vector-icons";

const membros = [
    {
        nome: "João Vitor da Silva",
        imagem: require("../assets/jv-perfil.png"),
        github: "https://github.com/joaosilvaz",
        insta: "https://www.instagram.com/joaovitoor._/",
        linkedin: "https://www.linkedin.com/in/jo%C3%A3o-vitor-da-silva-5677202b1/",
    },
    {
        nome: "Guilherme Alves Pedroso",
        imagem: require("../assets/gui-perfil.png"),
        github: "https://github.com/guialvesped",
        insta: "https://www.instagram.com/g__alves_/",
        linkedin: "https://www.linkedin.com/in/guialvesped/",
    },
    {
        nome: "Rafael Souza Bezerra",
        imagem: require("../assets/rafa-perfil.png"),
        github: "https://github.com/Rafazls",
        insta: "https://www.instagram.com/raffsz.__/",
        linkedin: "https://www.linkedin.com/in/rafa-bezerra/",
    },
];

export default function About() {
    return (
        <View style={styles.container}>
            <ScrollView contentContainerStyle={styles.content}>
                <Text style={styles.title}>Sobre Nós</Text>
                <Text style={styles.description}>
                    Este projeto, com o objetivo de promover a segurança da população em situações de chuva intensa, foi desenvolvido por nós com dedicação e responsabilidade social.
                </Text>

                {membros.map((membro, index) => (
                    <View key={index} style={styles.card}>
                        <Image source={membro.imagem} style={styles.image} />
                        <Text style={styles.nome}>{membro.nome}</Text>
                        <View style={styles.social}>
                            <TouchableOpacity onPress={() => Linking.openURL(membro.github)}>
                                <Ionicons name="logo-github" size={28} color="#004aab" />
                            </TouchableOpacity>
                            <TouchableOpacity onPress={() => Linking.openURL(membro.insta)}>
                                <Ionicons name="logo-instagram" size={28} color="#E1306C" />
                            </TouchableOpacity>
                            <TouchableOpacity onPress={() => Linking.openURL(membro.linkedin)}>
                                <Ionicons name="logo-linkedin" size={28} color="#0077B5" />
                            </TouchableOpacity>
                        </View>
                    </View>
                ))}
            </ScrollView>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#f0f0f0",
    },
    content: {
        padding: 20,
        alignItems: "center",
    },
    title: {
        fontSize: 28,
        color: "#004aab",
        fontFamily: "JosefinSans_700Bold",
        marginBottom: 10,
    },
    description: {
        textAlign: "center",
        color: "#333",
        fontSize: 16,
        marginBottom: 20,
        fontFamily: "JosefinSans_400Regular",
    },
    card: {
        width: "100%",
        backgroundColor: "#fff",
        padding: 20,
        borderRadius: 10,
        marginBottom: 20,
        alignItems: "center",
        shadowColor: "#000",
        shadowOpacity: 0.1,
        shadowOffset: { width: 0, height: 3 },
        shadowRadius: 6,
        elevation: 4,
    },
    image: {
        width: 100,
        height: 100,
        borderRadius: 50,
        marginBottom: 10,
    },
    nome: {
        fontSize: 18,
        fontFamily: "JosefinSans_600SemiBold",
        marginBottom: 8,
        color: "#004aab",
    },
    social: {
        flexDirection: "row",
        justifyContent: "center",
        gap: 20,
    },
});
