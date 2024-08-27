import { StatusBar } from 'expo-status-bar';
import { StyleSheet, SafeAreaView, ScrollView } from 'react-native';
import Pokemon_Cards from './components/Pokemon_Cards';


export default function App() {
  const charizardData = {
    name: "Charizard",
    image: require("./assets/charizard.png"),
    type: "Fire",
    hp: 78,
    moves: ["Dragon Claw", "Ember", "Growl", "Inferno"],
    weaknesses: ["Water", "Electric"],
  };
  const blastoiseData = {
    name: "Blastoise",
    image: require("./assets/blastoise.png"),
    type: "Water",
    hp: 79,
    moves: ["Tackle", "Water Gun", "Tail Whip", "	Water Pulse"],
    weaknesses: ["Electric", "Grass"],
  };

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView>
        <Pokemon_Cards {...charizardData}/>
        <Pokemon_Cards {...blastoiseData}/>
      </ScrollView>
      <StatusBar style="auto" />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5',
    paddingTop: 30,
    elevation: 5,
  },
});
