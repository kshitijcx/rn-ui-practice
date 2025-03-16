import { Image, Text, TouchableOpacity, View } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { useNavigation } from "expo-router";

export default function Index() {
  const navigation = useNavigation();
  return (
    <View className="flex-1 flex justify-end">
      <Image
        source={require("../assets/images/welcome.png")}
        className="h-full w-full absolute"
      />
      <View className="p-5 pb-10 gap-8">
        <LinearGradient
          colors={["transparent", "rgba(3,105,161,0.8)"]}
          className="h-[500px] w-screen absolute bottom-0"
          start={{ x: 0.5, y: 0 }}
          end={{ x: 0.5, y: 1 }}
        />
        <View className="space-y-3">
          <Text className="text-white font-bold text-[2.75rem]">
            Travelling made easy
          </Text>
          <Text className="text-neutral-200 font-medium text-[1.2rem]">
            Experience the world's best adventure around the world with us
          </Text>
        </View>
        <TouchableOpacity
          className="bg-orange-500 mx-auto p-3 px-12 rounded-full"
          onPress={() => navigation.navigate("home")}
        >
          <Text className="text-white font-bold">Let's Go</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}
