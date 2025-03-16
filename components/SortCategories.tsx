import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { sortCategoryData } from "@/constants";
import { useState } from "react";

const SortCategories = () => {
  const [activeSort, setActiveSort] = useState("Popular");

  return (
    <View className="flex-row justify-around items-center mx-4 bg-neutral-100 rounded-full p-2 px-4 space-x-2">
      {sortCategoryData.map((item, index) => {
        let isActive = item === activeSort;
        let activeButtonClass = isActive ? "bg-white shadow" : "";
        return (
          <TouchableOpacity
            onPress={() => setActiveSort(item)}
            key={index}
            className={`p-3 px-4 rounded-full flex ${activeButtonClass}`}
          >
            <Text
              className={`font-semibold ${isActive ? "text-orange-500" : ""}`}
            >
              {item}
            </Text>
          </TouchableOpacity>
        );
      })}
    </View>
  );
};
export default SortCategories;
