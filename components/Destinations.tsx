import { destinationData } from "@/constants";
import { LinearGradient } from "expo-linear-gradient";
import { useNavigation } from "expo-router";
import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";

const Destinations = () => {
  const navigation = useNavigation();

  return (
    <View className="mx-7 flex-row justify-between flex-wrap">
      {destinationData.map((dest, index) => (
        <DestinationCard dest={dest} key={index} navigation={navigation} />
      ))}
    </View>
  );
};
export default Destinations;

const DestinationCard = ({ dest, navigation }) => {
  return (
    <TouchableOpacity
      onPress={() => navigation.navigate("/destination", { ...dest })}
      className="h-60 w-[12rem] relative flex justify-end p-4 py-6 space-y-2 mb-5"
    >
      <Image
        source={dest.image}
        className="absolute h-60 w-[12rem] rounded-3xl"
      />
      <LinearGradient
        colors={["transparent", "rgba(0,0,0,1)"]}
        className="h-[10rem] w-[12rem] absolute bottom-0"
        start={{ x: 0.5, y: 0 }}
        end={{ x: 0.5, y: 1 }}
        style={{ borderBottomLeftRadius: 25, borderBottomRightRadius: 25 }}
      />
      <Text className="text-[1.15rem] text-white font-bold mb-3">
        {dest.title}
      </Text>
      <Text className="text-white text-[10px] leading-tight">
        {dest.shortDescription}
      </Text>
    </TouchableOpacity>
  );
};
