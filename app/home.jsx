import {
  Text,
  View,
  SafeAreaView,
  ScrollView,
  TouchableOpacity,
  Image,
  TextInput,
} from "react-native";
import Feather from "@expo/vector-icons/Feather";
import Categories from "../components/Categories";

const home = () => {
  return (
    <SafeAreaView className="flex-1 bg-white">
      <ScrollView
        showsVerticalScrollIndicator={false}
        className="space-y-6 mt-10"
      >
        <View className="mx-5 flex-row justify-between items-center mb-10">
          <Text className="font-bold neutral-700 text-[2rem]">
            Let's Discover
          </Text>
          <TouchableOpacity>
            <Image
              source={require("../assets/images/avatar.png")}
              className="h-16 w-16"
            />
          </TouchableOpacity>
        </View>
        <View className="mx-5 mb-4">
          <View className="flex-row items-center bg-neutral-100 rounded-full px-4 py-2 space-x-2 pl-6">
            <Feather name="search" size={20} color="gray" />
            <TextInput
              placeholder="Search Destination"
              placeholderTextColor={"gray"}
              className="flex-1 text-base ml-1 tracking-wider"
            />
          </View>
        </View>
        <View className="mb-4">
          <Categories />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};
export default home;
