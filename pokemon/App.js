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
  const pikachuData = {
    name: "Pikachu",
    image: require("./assets/pikachu.png"),
    type: "Electric",
    hp: 35,
    moves: ["	Quick Attack", "Thunder Shock", "Spark", "Thunderbolt"],
    weaknesses: ["Water", "Ground"],
  };
  const golduckData = {
    name: "Golduck",
    image: require("./assets/golduck.png"),
    type: "Water",
    hp: 80,
    moves: ["Aqua Jet", "Confusion", "Water Gun", "Zen Headbutt"],
    weaknesses: ["Psychic", "Grass"],
  };
  const gyaradosData = {
    name: "Gyarados",
    image: require("./assets/gyarados.png"),
    type: "Water",
    hp: 95,
    moves: ["Twister", "Whirlpool", "Brine", "Waterfall"],
    weaknesses: ["Electric", "Grass"],
  };
  const vaporeonData = {
    name: "Vaporeon",
    image: require("./assets/vaporeon.png"),
    type: "Water",
    hp: 130,
    moves: ["Baton Pass", "	Charm", "Water Pulse", "Aurora Beam"],
    weaknesses: ["Electric", "Grass"],
  };
  const jolteonData = {
    name: "Jolteon",
    image: require("./assets/jolteon.png"),
    type: "Electric",
    hp: 65,
    moves: ["Thunder Wave", "Thunder Fang", "Discharge", "Thunder"],
    weaknesses: ["Water", "Ground"],
  };
  const flareonData = {
    name: "Flareon",
    image: require("./assets/flareon.png"),
    type: "Fire",
    hp: 95,
    moves: ["Baton Pass", "	Fire Fang", "Fire Spin", "Flare Blitz"],
    weaknesses: ["Water", "Electric"],
  };
  const torterraData = {
    name: "Torterra",
    image: require("./assets/torterra.png"),
    type: "Grass",
    hp: 95,
    moves: ["	Absorb", "Razor Leaf", "Wood Hammer", "Mega Drain"],
    weaknesses: ["Electric", "Fire"],
  };
  const incineroarData = {
    name: "Incineroar",
    image: require("./assets/incineroar.png"),
    type: "Fire",
    hp: 95,
    moves: ["Ember", "Fire Fang", "Flamethrower", "	Flare Blitz"],
    weaknesses: ["Water", "Electric"],
  };

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView>
        <Pokemon_Cards {...charizardData}/>
        <Pokemon_Cards {...blastoiseData}/>
        <Pokemon_Cards {...pikachuData}/>
        <Pokemon_Cards {...golduckData}/>
        <Pokemon_Cards {...gyaradosData}/>
        <Pokemon_Cards {...vaporeonData}/>
        <Pokemon_Cards {...jolteonData}/>
        <Pokemon_Cards {...flareonData}/>
        <Pokemon_Cards {...torterraData}/>
        <Pokemon_Cards {...incineroarData}/>
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
