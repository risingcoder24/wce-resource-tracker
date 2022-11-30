import React, { useEffect } from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableWithoutFeedback,
  TouchableWithoutFeedbackBase,
  Image,
  Alert,
} from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import * as ImagePicker from 'expo-image-picker';
import { colors } from "../../configs/variables";

export default function AppImagePicker({ imageUri, onChangeImage }) {
  useEffect(() => {
    // const requestPermission = async () => {
    //   const result = await ImagePicker.requestCameraPermissionsAsync();
    //   console.log(result.granted);
    //   if (!result.granted) {
    //     requestPermission();
    //   }
    // };
    // requestPermission();
  }, []);
  const handlePress = () => {
    if (!imageUri) {
      selectImage();
    } else {
      Alert.alert("Delete", "Are you sure you want to delete Image", [
        { text: "Yes", onPress: () => onChangeImage(null) },
        {
          text: "No",
        },
      ]);
    }
  };

  const selectImage = async () => {
    try {
      const result = await ImagePicker.launchCameraAsync({
        mediaTypes: ImagePicker.MediaTypeOptions.Images
      })
      if (!result.canceled) {
        onChangeImage(result.assets[0]);
      }
    } catch (error) {
      console.error("Error Reading Image");
    }
  };
  return (
    <View
      style={{
        flexDirection: "row",
        alignItems: "center",
      }}
    >

      {imageUri == null ? (
        <TouchableWithoutFeedback onPress={handlePress}>
          <View style={styles.attachment}>
            <MaterialCommunityIcons name="camera" size={35} />
          </View>
        </TouchableWithoutFeedback>

      ) : (
        <View style={styles.picker}>
          <TouchableWithoutFeedback onPress={handlePress}>
            <Image source={{ uri: imageUri }} style={styles.image} />
          </TouchableWithoutFeedback>
        </View>

      )}

      <View
        style={{
          marginHorizontal: 10,
        }}
      >
        {imageUri && (
          <TouchableWithoutFeedback onPress={handlePress}>
            <MaterialCommunityIcons name="delete" size={30} color="red" />
          </TouchableWithoutFeedback>
        )}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  imageContainer: {
    flexDirection: "row",
  },
  picker: {
    width: 100,
    height: 100,
    backgroundColor: colors.lightgrey,
    borderRadius: 10,
    marginVertical: 10,
    marginRight: 10,
    overflow: "hidden",
    alignItems: "center",
    justifyContent: "center",
  },
  image: {
    width: 100,
    height: 100,
    resizeMode: "cover",
  },
  attachment: {
    marginVertical: 5,
    paddingVertical: 5,
    paddingHorizontal: 5,
    backgroundColor: colors.lightgrey,
    width: 100,
    borderRadius: 5,
    alignItems: "center"
  }
});
