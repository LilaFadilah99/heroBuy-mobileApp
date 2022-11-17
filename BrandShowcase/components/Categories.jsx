import { useNavigation } from "@react-navigation/native";
import { Flex } from "native-base";
import { View, Text, Pressable } from "react-native";

const Categories = ({ name, marginEndSize, backgroundColor, color, productCategory }) => {
  const navigation = useNavigation();

  const handleCategory = () => {
    navigation.navigate("Items", { category: productCategory });
  };
  return (
    <View>
      <Pressable>
        {backgroundColor && color ? (
          <View style={{ borderWidth: 1, borderRadius: 50, paddingHorizontal: 18, paddingVertical: 10, marginEnd: marginEndSize, backgroundColor: backgroundColor }}>
            <Text style={{ fontSize: 11, color: color }}>{name}</Text>
          </View>
        ) : (
          <View style={{ borderWidth: 1, borderRadius: 50, paddingHorizontal: 14, paddingVertical: 6, marginEnd: marginEndSize }}>
            <Text style={{ fontSize: 11 }} onPress={handleCategory}>
              {name}
            </Text>
          </View>
        )}
      </Pressable>
    </View>
  );
};

export default Categories;
