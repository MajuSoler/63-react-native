import { Button, Text, View } from "react-native";

export default function Favorites({ navigation }) {
  return (
    <View>
      <Text
        style={{
          fontWeight: "bold",
          fontSize: 30,
          textAlign: "center",
        }}
      >
        This is the favorites page
      </Text>
      <Button
        title="Go back to profile"
        onPress={() => {
          navigation.navigate("Profile");
        }}
      />
    </View>
  );
}
