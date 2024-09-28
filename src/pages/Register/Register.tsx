import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  Image,
  TouchableOpacity,
  TextInput,
} from "react-native";
import { StackNavigationProp } from "@react-navigation/stack";
import { RootStackParamList } from "../../../App";

type RegisterNavigationProp = StackNavigationProp<
  RootStackParamList,
  "Register"
>;

type Props = {
  navigation: RegisterNavigationProp;
};

const Register: React.FC<Props> = ({ navigation }) => {
  const [activeButton, setActiveButton] = useState<"iniciar" | "registrarse">(
    "iniciar"
  );

  const handlePressIniciar = () => setActiveButton("iniciar");
  const handlePressRegistrarse = () => setActiveButton("registrarse");

  return (
    <View style={styles.container}>
      <Image
        source={require("./../../../assets/logo.png")}
        style={styles.image}
      />
      <View style={styles.buttonContainer}>
        <TouchableOpacity
          onPress={handlePressIniciar}
          style={
            activeButton === "iniciar"
              ? styles.buttonActive
              : styles.buttonInactive
          }
        >
          <Text style={styles.buttonText}>LOGIN</Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={handlePressRegistrarse}
          style={
            activeButton === "registrarse"
              ? styles.buttonActive
              : styles.buttonInactive
          }
        >
          <Text style={styles.buttonText}>REGISTER</Text>
        </TouchableOpacity>
      </View>
      {activeButton === "registrarse" && (
        <View style={styles.formContainer}>
          <TextInput style={styles.input} placeholder="Full Name" />
          <TextInput style={styles.input} placeholder="E-Mail" />
          <TextInput style={styles.input} placeholder="Username" />
          <TextInput
            style={styles.input}
            placeholder="Password"
            secureTextEntry={true}
          />
          <TextInput
            style={styles.input}
            placeholder="Confirm Password"
            secureTextEntry={true}
          />
          <TouchableOpacity style={styles.button} onPress={() => {}}>
            <Text style={styles.buttonText}>REGISTER</Text>
          </TouchableOpacity>
        </View>
      )}
      {activeButton === "iniciar" && (
        <View style={styles.formContainer}>
          <TextInput style={styles.input} placeholder="E-Mail" />
          <TextInput
            style={styles.input}
            placeholder="Password"
            secureTextEntry={true}
          />
          <TouchableOpacity
            style={styles.button}
            onPress={() => navigation.navigate("DrawerNavigator")}
          >
            <Text style={styles.buttonText}>LOGIN</Text>
          </TouchableOpacity>
          <TouchableOpacity>
            <Text style={styles.forgotPasswordText}>Forgot your password?</Text>
          </TouchableOpacity>
        </View>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#F3E6D3",
    paddingHorizontal: 20,
  },
  image: {
    width: 200,
    height: 200,
    marginBottom: 20,
  },
  buttonContainer: {
    flexDirection: "row",
    marginBottom: 20,
  },
  buttonText: {
    color: "white",
    textAlign: "center",
    fontSize: 16,
    fontWeight: "bold",
  },
  buttonActive: {
    backgroundColor: "#13ABCB",
    paddingVertical: 12,
    paddingHorizontal: 20,
    borderRadius: 25,
    marginHorizontal: 10,
  },
  buttonInactive: {
    backgroundColor: "#215E83",
    paddingVertical: 12,
    paddingHorizontal: 20,
    borderRadius: 25,
    marginHorizontal: 10,
  },
  formContainer: {
    width: "100%",
  },
  input: {
    width: "100%",
    height: 40,
    borderWidth: 1,
    borderColor: "#CC4A36",
    borderRadius: 8,
    paddingHorizontal: 10,
    marginBottom: 10,
  },
  button: {
    backgroundColor: "#CC4A36",
    paddingVertical: 12,
    borderRadius: 25,
    marginTop: 10,
  },
  forgotPasswordText: {
    marginTop: 10,
    textAlign: "center",
    color: "#215E83",
  },
});

export default Register;
