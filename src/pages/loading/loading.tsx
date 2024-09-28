// LoadingScreen.tsx

import React from "react";
import { View, ActivityIndicator, StyleSheet, Image } from "react-native";

const LoadingScreen: React.FC = () => {
  return (
    <View style={styles.container}>
      <View style={styles.content}>
        <Image
          source={require("./../../../assets/logo.png")}
          style={styles.image}
        />
        <ActivityIndicator
          size="large"
          color="#0000ff"
          style={styles.loadingIndicator}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  content: {
    justifyContent: "center",
    alignItems: "center",
  },
  image: {
    width: 200,
    height: 200,
    marginBottom: 20, // Espacio opcional para separar la imagen del indicador de carga
  },
  loadingIndicator: {
    marginTop: 20, // Espacio opcional arriba del indicador de carga
  },
});

export default LoadingScreen;
