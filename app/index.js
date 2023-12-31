import {
  View,
  Text,
  ScrollView,
  SafeAreaView,
  TouchableOpacity,
} from "react-native";
import { Stack, useRouter } from "expo-router";
import { useEffect, useState } from "react";
import { COLORS, icons, images, SIZES } from "../constants";
import {
  Nearbyjobs,
  Popularjobs,
  ScreenHeaderBtn,
  Welcome,
} from "../components";

const Home = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const router = useRouter();

  const handleNavigateToHome = () => {
    router.push("/");
  };

  return (
    <SafeAreaView style={{ fles: 1, backgroundColor: COLORS.lightWhite }}>
      <TouchableOpacity onPress>
        <Text>Login</Text>
      </TouchableOpacity>
      <Stack.Screen
        options={{
          headerStyle: { backgroundColor: COLORS.lightWhite },
          headerShadowVisible: false,
          headerLeft: () => (
            <TouchableOpacity onPress={handleNavigateToHome}>
              <Text style={{ fontSize: 20, fontWeight: 800, color: "purple" }}>
                Jobbifyy
              </Text>
            </TouchableOpacity>
          ),
          headerRight: () => (
            <ScreenHeaderBtn iconUrl={images.profile} dimension="100%" />
          ),
          headerTitle: "",
        }}
      />

      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={{ flex: 1, padding: SIZES.medium }}>
          <Welcome
            searchTerm={searchTerm}
            setSearchTerm={setSearchTerm}
            handleClick={() => {
              if (searchTerm) {
                router.push(`/search/${searchTerm}`);
              }
            }}
          />

          <Popularjobs />
          <Nearbyjobs />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default Home;
