import {View, Text, StyleSheet, Image } from "react-native";

const getTypeDetails = (type) => {
    switch (type.toLowerCase()) {
        case "electric":
            return {borderColor: "#FFD700", emoji: "⚡"};
        case "water":
            return {borderColor: "#6493EA", emoji: "💧"};
        case "fire":
            return {borderColor: "#FF5733", emoji: "🔥"};
        case "grass":
            return {borderColor: "#66CC66", emoji: "🍃"};
        default:
            return {borderColor: "#A0A0A0", emoji: "❓"};
    }
}
export default function Pokemon_Cards ({
    name,
    image,
    type,
    hp,
    moves,
    weaknesses
}) {
    const { borderColor, emoji } = getTypeDetails(type);
    return (
        <View style={styles.card}>
            <View style={styles.nameContainer}>
                <Text style={styles.name}>{name}</Text>
                <Text style={styles.hp}>❤️{hp}</Text>
            </View>

            <Image source={image} style={styles.image} accesibilityLabel={`${name} pokemon`} />

            <View style ={styles.typeContainer}>
                <View style={[styles.badge, { borderColor }]}>
                    <Text style={styles.typeEmoji}>{emoji}</Text>
                    <Text style={styles.typeText}>{type}</Text>
                </View>
            </View>

            <View style={styles.movesContainer}>
                <Text style={styles.movesText}>Moves:</Text>
                <Text style={styles.movesText}>{moves.join(", ")}</Text>
            </View>

            <View style={styles.weaknessesContainer}>
                <Text style={styles.weaknessesText}>Weaknesses:</Text>
                <Text style={styles.weaknessesText}>{weaknesses.join(", ")}</Text>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    card: {
        backgroundColor: "white",
        borderRadius: 16,
        borderWidth:  2,
        padding: 16,
        margin: 16,
        elevation: 5,
    },
    nameContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginBottom: 35
    },
    name: {
        fontSize: 30,
        fontWeight: 'bold'
    },
    hp: {
        fontSize: 25
    },
    image: {
        width: '100%',
        height: 350,
        marginBottom: 15,
    },
    typeContainer: {
        alignItems: "center",
        marginBottom: 40,
    },
    badge: {
        flexDirection: "row",
        alignItems: "center",
        paddingVertical: 6,
        paddingHorizontal: 12,
        borderRadius: 20,
        borderWidth: 5,
    },
    typeEmoji: {
        fontSize: 20,
        marginRight: 10,
    },
    typeText: {
        fontSize: 20,
        fontWeight: "bold",
    },
    movesContainer: {
        marginBottom: 15,
    },
    movesText: {
        fontSize: 20,
        fontWeight: "bold",
    },
    weaknessesContainer: {
        marginBottom: 15,
    },
    weaknessesText: {
        fontSize: 20,
        fontWeight: "bold",
    },
})