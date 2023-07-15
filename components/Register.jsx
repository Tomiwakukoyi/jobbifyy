import { View, Text, TextInput, Alert } from "react-native";
import React, { useState } from "react";
import { getAuth } from "firebase/auth";
// import { auth } from "@react-native-firebase/auth";

// import { db } from "@react-native-firebase/database";
import { TouchableOpacity } from "react-native-gesture-handler";

const Register = () => {
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  const auth = getAuth();

  const createProfile = async (response) => {
    db().ref(`users/${response.user.uid}`).set({ name });
  };

  const registerAndGoToMainFlow = async () => {
    if (email && password) {
      try {
        const response = await auth().createUserWithEmailAndPassword(
          email,
          password
        );

        if (response.user) {
          await createProfile(response);
          console.log(response);
        }
      } catch (error) {
        Alert.alert("erro");
      }
    }
  };
  return (
    <View style={{ color: "black" }}>
      <TextInput
        placeholder="Email"
        value={name}
        onChangeText={setName}
        style={{ width: "100%", height: 50, backgroundColor: "black" }}
      />
      <TextInput
        style={{ width: "100%", height: 50, backgroundColor: "green" }}
        placeholder="Password"
        value={password}
        onChangeText={setPassword}
      />
      <TouchableOpacity>
        <Text style={{ color: "black" }}>SignUp</Text>
      </TouchableOpacity>
    </View>
  );
};

export default Register;
