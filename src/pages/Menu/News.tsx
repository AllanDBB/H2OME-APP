import React, { useState } from "react";
import {
  View,
  TextInput,
  StyleSheet,
  TouchableOpacity,
  Text,
  ScrollView,
} from "react-native";
import { Picker } from "@react-native-picker/picker";

const SearchComboBox: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState("all");

  const handleCategoryChange = (itemValue: string) => {
    setSelectedCategory(itemValue);
  };

  return (
    <View style={styles.container}>
      {/* Contenedor del picker */}
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

      {/* Contenedor de las tarjetas */}
      <ScrollView contentContainerStyle={styles.cardContainer}>
        <TailwindCard />
        <TailwindCard />
        <TailwindCard />
      </ScrollView>
    </View>
  );
};

const TailwindCard: React.FC = () => {
  return (
    <View style={styles.card}>
      {/* Encabezado de la tarjeta */}
      <View style={styles.header} />
      {/* Contenido principal */}
      <View style={styles.content}>
        <Text style={styles.title}>Martian Card</Text>
        <Text style={styles.description}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc felis
          ligula.
        </Text>
      </View>
      {/* Pie de la tarjeta */}
      <View style={styles.footer}>
        <TouchableOpacity
          onPress={() => {
            // Acción al presionar el botón
          }}
          style={styles.button}
        >
          <Text style={styles.buttonText}>Explore</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#D8B4A0", // Color marrón rojizo de fondo marciano
    paddingVertical: 20,
  },
  picker: {
    height: 50,
    width: "90%",
    alignSelf: "center",
    backgroundColor: "#BF4F1E", // Color más oscuro para el picker
    borderRadius: 12,
    marginBottom: 20,
    borderColor: "#D89D8D",
    borderWidth: 1,
    color: "#FFFFFF", // Color del texto del picker en blanco
  },
  cardContainer: {
    alignItems: "center", // Centrar las tarjetas
    paddingBottom: 20, // Espacio inferior para el scroll
  },
  card: {
    width: "90%",
    backgroundColor: "#FFFAF0", // Fondo claro para las tarjetas
    borderRadius: 15,
    marginBottom: 20,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 5,
    },
    shadowOpacity: 0.2, // Aumentar la opacidad de la sombra
    shadowRadius: 10,
    elevation: 4, // Sombra para dar profundidad
    borderColor: "#BF4F1E", // Color de borde similar al picker
    borderWidth: 1, // Agregar borde
  },
  header: {
    height: 150,
    borderTopLeftRadius: 15,
    borderTopRightRadius: 15,
    backgroundColor: "#BF4F1E", // Color de fondo del encabezado
  },
  content: {
    padding: 20,
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
    color: "#1A202C", // Color del texto del título
    marginBottom: 10,
  },
  description: {
    fontSize: 16,
    color: "#4A5568", // Texto secundario
    lineHeight: 22,
  },
  footer: {
    paddingHorizontal: 20,
    paddingBottom: 20,
  },
  button: {
    backgroundColor: "#D89D8D", // Botón en tono claro
    paddingVertical: 12,
    paddingHorizontal: 24,
    borderRadius: 10,
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 5,
    },
    shadowOpacity: 0.29,
    shadowRadius: 6.65,
    elevation: 7, // Sombras para dar efecto de clic
  },
  buttonText: {
    fontSize: 16,
    fontWeight: "bold",
    color: "white", // Texto del botón en blanco
  },
});

export default SearchComboBox;
