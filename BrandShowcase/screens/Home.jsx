import { View, StyleSheet, Text, SafeAreaView, Image, ScrollView } from "react-native";
import { Flex, NativeBaseProvider } from "native-base";
// import ShoppingImg from "../assets/shopping.png";
import Model from "../assets/model.png";
// import Ionicons from "@expo/vector-icons/Ionicons";
import Categories from "../components/Categories";
import ImageCollection from "../components/ImageCollection";

const Home = () => {
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView>
        <View style={styles.header}>
          <View>
            <Text style={[styles.text_grey, styles.bold_text]}>Hi Dila !</Text>
          </View>
          <Text style={[styles.bold_text, { fontSize: 19 }]}>What is your outfit Today?</Text>
          {/* card */}
          <View style={{ backgroundColor: "black", marginTop: 20, paddingHorizontal: 25, borderRadius: 30, paddingVertical: 20 }}>
            <Text style={{ color: "white", fontSize: 17, fontWeight: "bold" }}>Last Discount</Text>
            <Text style={{ color: "#c8d569", fontSize: 17, fontWeight: "bold" }}>up to 70%</Text>
            <Flex direction="row">
              <View style={{ paddingRight: 5 }}>
                <Text style={[{ color: "white", marginTop: 10 }, styles.normal_text]}>Shop Now & Get Free</Text>
                <Text style={[{ color: "white" }, styles.normal_text]}>shopping from your house</Text>
              </View>
              <Image source={Model} style={{ width: 80, height: 100, marginTop: -40 }} />
            </Flex>
          </View>
          {/* end card */}

          {/* categories */}
          <View style={{ marginTop: 30 }}>
            <Text style={{ fontSize: 15, fontWeight: "bold" }}>Categories</Text>
            <Flex direction="row" style={{ marginTop: 20 }}>
              <Categories name={"All"} marginEndSize={6} productCategory={""} />
              <Categories name={"Woman"} marginEndSize={6} productCategory={"wanita"} />
              <Categories name={"Man"} marginEndSize={6} productCategory={"pria"} />
              <Categories name={"Children"} marginEndSize={6} productCategory={"anak-anak"} />
              <Categories name={"Baby"} marginEndSize={6} productCategory={"bayi"} />
            </Flex>
          </View>

          {/* top product */}
          <View style={{ marginTop: 30 }}>
            <Text style={{ fontSize: 15, fontWeight: "bold" }}>Top Collection</Text>
            <ImageCollection
              imageUrl={"https://www.dior.com/couture/var/dior/storage/images/pushs-editos/folder-winter-femme-22/kci780veas900/34351264-1-eng-GB/kci780veas900_1440_1200.jpg"}
              title={"Autmn Up Your Style"}
              description={"Go into the autumn mood with our updated selection of on-trend attries"}
            />
            <ImageCollection
              imageUrl={"https://www.dior.com/couture/var/dior/storage/images/pushs-editos/folder-winter-22-men/folder-campagne2/023m550at099c185/37979160-1-eng-GB/023m550at099c185_1440_1200.jpg"}
              title={"Autmn Up Your Style"}
              description={"Go into the autumn mood with our updated selection of on-trend attries"}
            />
            <ImageCollection
              imageUrl={"https://www.dior.com/couture/var/dior/storage/images/pushs-editos/folder-baby-pe-fw22/2wbs11shory900/35818906-1-eng-GB/2wbs11shory900_1440_1200.jpg"}
              title={"Autmn Up Your Style"}
              description={"Go into the autumn mood with our updated selection of on-trend attries"}
            />
            <ImageCollection
              imageUrl={"https://www.dior.com/couture/var/dior/storage/images/pushs-editos/folder-baby-fw21/folder-cannage/1wbp53kdocy353/24248303-1-eng-GB/1wbp53kdocy353_1440_1200.jpg"}
              title={"Autmn Up Your Style"}
              description={"Go into the autumn mood with our updated selection of on-trend attries"}
            />
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // backgroundColor: "#e5e9ea",
    // alignItems: "center",
    // justifyContent: "center",
    // padding: 10,
  },
  header: {
    // marginTop: 10,
    // backgroundColor: "blue",
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
  absolute_content: {
    position: "absolute",
    // transform: [{ rotateX: "0rad"}, { rotateZ: "0rad" }],
    textAlign: "center",
    color: "white",
    marginLeft: 20,
  },
});

export default Home;
