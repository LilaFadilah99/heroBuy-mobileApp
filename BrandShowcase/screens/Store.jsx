import { View, Text, StyleSheet, SafeAreaView, Image, FlatList } from "react-native";
import { GET_PRODUCT } from "../queries/index";
import { useQuery } from "@apollo/client";
import Card from "../components/Card";
import { Flex, NativeBaseProvider } from "native-base";
import Categories from "../components/Categories";

const Store = ({ route }) => {
  const category = route.params?.category;

  console.log(category);
  const { loading, error, data } = useQuery(GET_PRODUCT);

  if (loading) return <Text>Loading...</Text>;
  if (error) return <Text>{error.message}</Text>;
  let filter = category ? data.products.filter((el) => el.Category.name.toLowerCase() === category.toLowerCase()) : data.products;

  const renderItem = ({ item }) => <Card item={item} />;

  return (
    // <NativeBaseProvider>
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <Text style={[styles.title_text, styles.bold_text, { marginTop: 30 }]}>Find Your Best Style</Text>
        <View style={{ marginTop: 20 }}>
          <Flex direction="row">
            <Categories name={"Woman"} marginEndSize={6} backgroundColor={"black"} color={"white"} />
            <Categories name={"Man"} marginEndSize={6} backgroundColor={"black"} color={"white"} />
            <Categories name={"Children"} marginEndSize={6} backgroundColor={"black"} color={"white"} />
            <Categories name={"Baby"} marginEndSize={6} backgroundColor={"black"} color={"white"} />
          </Flex>
        </View>
        <Flex direction="row" style={{ marginTop: 30 }}>
          <FlatList data={filter} renderItem={renderItem} keyExtractor={(item) => item.id} />
        </Flex>
      </View>
    </SafeAreaView>
    // </NativeBaseProvider>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#e5e9ea",
  },
  header: {
    // marginTop: 30,
    marginHorizontal: 20,
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
export default Store;
