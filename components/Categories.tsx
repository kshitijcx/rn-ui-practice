import { Image, ScrollView, Text, TouchableOpacity, View } from "react-native";
import { categoriesData } from "../constants/index";

export default function Categories() {
  return (
    <View className="space-y-6">
      <View className=" mx-5 flex-row justify-between items-center mb-4">
        <Text className="font-semibold text-neutral-700 text-xl">
          Categories
        </Text>
        <TouchableOpacity>
          <Text className="text-lg text-orange-500">See all</Text>
        </TouchableOpacity>
      </View>
      <ScrollView
        horizontal
        contentContainerStyle={{ paddingHorizontal: 15, gap: 20 }}
        showsHorizontalScrollIndicator={false}
      >
        {categoriesData.map((cat, index) => (
          <TouchableOpacity key={index} className="flex items-center space-y-2">
            <Image
              source={cat.image}
              className="rounded-3xl h-[5.75rem] w-[5.75rem]"
            />
            <Text className="text-neutral-700 font-medium">{cat.title}</Text>
          </TouchableOpacity>
        ))}
      </ScrollView>
    </View>
  );
}
