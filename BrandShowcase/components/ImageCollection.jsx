import { useNavigation } from "@react-navigation/native";
import { View, Image, Text, StyleSheet, Pressable } from "react-native";

const ImageCollection = ({ imageUrl, title, description }) => {
  const navigation = useNavigation();
  const handleItems = () => {
    navigation.navigate("Items");
  };
  return (
    <Pressable onPress={handleItems}>
      <View style={{ marginTop: 20, position: "relative" }}>
        <Image source={{ uri: imageUrl }} style={{ width: 320, height: 220, borderRadius: 25 }} />
        <Text style={[styles.absolute_content, { fontSize: 20, fontWeight: "bold", marginTop: 150 }]}>{title}</Text>
        <Text style={[styles.absolute_content, { fontSize: 10, fontWeight: "bold", marginTop: 175, textAlign: "left", paddingEnd: 50 }]}>{description}</Text>
      </View>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  absolute_content: {
    position: "absolute",
    // transform: [{ rotateX: "0rad"}, { rotateZ: "0rad" }],
    textAlign: "center",
    color: "white",
    marginLeft: 20,
  },
});

export default ImageCollection;
