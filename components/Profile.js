import { Button, Text, View } from "react-native";

export default function Profile({ navigation }) {
  return (
    <View>
      <Text
        style={{
          fontWeight: "bold",
          fontSize: 30,
          textAlign: "center",
        }}
      >
        This is the profile page
      </Text>
      <Button
        title="Go to Favorites page"
        onPress={() => {
          navigation.navigate("Favorites");
        }}
      />
    </View>
  );
}
