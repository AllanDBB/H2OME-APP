import React, { useState } from "react";
import {
  View,
  TextInput,
  StyleSheet,
  TouchableOpacity,
  Text,
} from "react-native";
import { Picker } from "@react-native-picker/picker";

const SearchComboBox: React.FC = () => {
  const [isFocused, setIsFocused] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState("all");

  const handleFocus = () => {
    setIsFocused(true);
  };

  const handleBlur = () => {
    setIsFocused(false);
  };

  const handleCategoryChange = (itemValue: string) => {
    setSelectedCategory(itemValue);
  };

  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={() => {}}>
        <Picker
          selectedValue={selectedCategory}
          style={styles.picker}
          onValueChange={handleCategoryChange}
        >
          <Picker.Item label="All" value="all" />
          <Picker.Item label="Category 1" value="category1" />
          <Picker.Item label="Category 2" value="category2" />
          {/* Agrega más categorías según sea necesario */}
        </Picker>
      </TouchableOpacity>
      <View style={styles.cardContainer}>
        <TailwindCard />
      </View>
    </View>
  );
};

const TailwindCard: React.FC = () => {
  return (
    <View style={styles.card}>
      <View style={styles.header}>
        {/* Este div se utiliza para el efecto de gradiente */}
        <View style={styles.gradient} />
      </View>
      <View style={styles.content}>
        <Text style={styles.title}>Tailwind card</Text>
        <Text style={styles.description}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc felis
          ligula.
        </Text>
      </View>
      <View style={styles.footer}>
        <TouchableOpacity
          onPress={() => {
            // Acción al presionar el botón
          }}
          style={styles.button}
        >
          <Text style={styles.buttonText}>Read More</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#E5E7EB", // Color de fondo para el contenedor principal
  },
  picker: {
    height: 40,
    width: 120,
    backgroundColor: "#f3f3f4",
    borderRadius: 8,
    marginBottom: 16,
    color: "#0d0c22",
  },
  input: {
    height: 40,
    width: 190,
    paddingLeft: 16,
    backgroundColor: "#f3f3f4",
    borderRadius: 8,
    color: "#0d0c22",
  },
  inputFocus: {
    borderColor: "rgba(0, 48, 73, 0.4)",
    backgroundColor: "#fff",
    shadowColor: "rgb(0 48 73 / 10%)",
    shadowOffset: { width: 0, height: 0 },
    shadowOpacity: 1,
    shadowRadius: 4,
  },
  cardContainer: {
    marginTop: 30, // Espacio entre el campo de búsqueda y la tarjeta
  },
  card: {
    width: "80%",
    backgroundColor: "white",
    borderRadius: 20,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  header: {
    marginTop: -30,
    marginHorizontal: 16,
    height: 120,
    overflow: "hidden",
    borderRadius: 20,
    backgroundColor: "#4B5563",
  },
  gradient: {
    flex: 1,
    backgroundColor: "transparent",
    borderRadius: 20,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 6,
    },
    shadowOpacity: 0.37,
    shadowRadius: 7.49,
    elevation: 12,
  },
  content: {
    padding: 24,
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
    marginBottom: 8,
    color: "#1A202C",
  },
  description: {
    fontSize: 16,
    color: "#4A5568",
  },
  footer: {
    paddingHorizontal: 24,
    paddingBottom: 16,
  },
  button: {
    backgroundColor: "#4299E1",
    paddingVertical: 12,
    paddingHorizontal: 24,
    borderRadius: 10,
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowOpacity: 0.29,
    shadowRadius: 4.65,
    elevation: 7,
  },
  buttonText: {
    fontSize: 12,
    fontWeight: "bold",
    textTransform: "uppercase",
    color: "white",
  },
});

export default SearchComboBox;
