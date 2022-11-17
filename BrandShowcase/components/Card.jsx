import React from "react";
import { Text, View, Image, StyleSheet, Pressable } from "react-native";
import { Center, NativeBaseProvider } from "native-base";
import { useNavigation } from "@react-navigation/native";

const Card = ({ item }) => {
  const navigation = useNavigation();
  const handleDetail = () => {
    navigation.navigate("Detail", { id: item.id });
  };

  return (
    <Center>
      <Pressable onPress={handleDetail}>
        <View style={{ marginBottom: 20 }} size={16}>
          <Image source={{ uri: item.mainImg }} style={{ width: 150, height: 200, borderRadius: 35 }} />
          <View style={{ marginLeft: 10 }}>
            <Text style={[{ fontWeight: "bold", marginTop: 10 }, styles.custom_title_font]}>{item.name}</Text>
            <Text style={styles.custom_title_font}>Rp.{item.price}</Text>
          </View>
        </View>
      </Pressable>
    </Center>
  );
};

export default Card;
const styles = StyleSheet.create({
  custom_title_font: {
    fontSize: 12,
  },
});
