import { View, StyleSheet, Text, SafeAreaView, Image, Pressable } from "react-native";
import { Flex, Center, Heading, ScrollView, VStack, Divider, Box, useColorModeValue, NativeBaseProvider, Container, Button } from "native-base";
import DetailImg from "../assets/detailImg.jpg";
import Ionicons from "@expo/vector-icons/Ionicons";
import { GET_PRODUCT_DETAIL } from "../queries/index";
import { useQuery } from "@apollo/client";
import { useNavigation } from "@react-navigation/native";

const Detail = ({ route }) => {
  const { id } = route.params;
  const navigation = useNavigation();

  const { loading, error, data } = useQuery(GET_PRODUCT_DETAIL, {
    variables: { productDetailId: id },
  });

  if (loading) return <Text>Loading...</Text>;
  if (error) return <Text>{error.message}</Text>;
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView>
        <View style={styles.header}>
          <Center>
            <Image source={{ uri: data.productDetail.mainImg }} style={{ width: 300, height: 400, borderRadius: 30 }} />
          </Center>
          <View style={{ marginTop: 30 }}>
            <Text style={{ fontWeight: "bold", fontSize: 20 }}>{data.productDetail.name}</Text>
            <Flex direction="row" style={{ marginTop: 10 }}>
              <View style={{ paddingEnd: 140 }}>
                <Flex direction="row">
                  <Ionicons name="star" style={{ fontSize: 18, color: "orange" }} />
                  <Ionicons name="star" style={{ fontSize: 18, color: "orange" }} />
                  <Ionicons name="star" style={{ fontSize: 18, color: "orange" }} />
                  <Ionicons name="star" style={{ fontSize: 18, color: "orange" }} />
                  <Ionicons name="star" style={{ fontSize: 18, color: "orange" }} />
                </Flex>
              </View>
              <Text style={{ fontWeight: "bold", fontSize: 15 }}>Rp.{data.productDetail.price}</Text>
            </Flex>
          </View>
          <Text style={{ marginTop: 40, fontWeight: "bold", fontSize: 12 }}>Description</Text>
          <Text style={{ fontSize: 12, marginTop: 10 }}>{data.productDetail.description}</Text>
          <Text style={{ fontSize: 12, marginTop: 10, fontWeight: "bold" }}>Product by: {data.productDetail.user.username}</Text>
          <Text style={{ fontSize: 12, fontWeight: "bold" }}>Contact: {data.productDetail.user.phoneNumber}</Text>

          {/* button */}
          <Pressable>
            <Flex direction="row" style={{ marginTop: 40, alignItems: "center" }}>
              <View style={{ backgroundColor: "black", paddingVertical: 20, paddingHorizontal: 90, borderRadius: 20, marginRight: 10 }}>
                <Text style={{ color: "white" }}>Buy Now</Text>
              </View>
              <View style={{ borderWidth: 0.7, width: 55, height: 50, borderRadius: 20, justifyContent: "center", alignItems: "center" }}>
                <Ionicons name="heart" style={{ fontSize: 18 }} />
              </View>
            </Flex>
          </Pressable>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  header: {
    marginTop: 30,
    paddingHorizontal: 25,
    paddingVertical: 20,
  },
  subtitle_text: {
    fontSize: 18,
  },
  title_text: {
    fontSize: 22,
  },
  text_grey: {
    color: "#73777B",
  },
  normal_text: {
    fontSize: 12,
  },
  bold_text: {
    fontWeight: "900",
  },
});

export default Detail;
