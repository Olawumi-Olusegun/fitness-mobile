import {
  Dimensions,
  ImageBackground,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import React from "react";
import { LinearGradient } from "expo-linear-gradient";

import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { RootStackParamList } from "../../types";
import Spacing from "../../constants/Spacing";
import Colors from "../../constants/Colors";
import FontSize from "../../constants/FontSize";
import Font from "../../constants/Font";


type Props = NativeStackScreenProps<RootStackParamList, "OnBoarding">;

const OnBoardingScreen: React.FC<Props> = ({ navigation: { navigate } }) => {
  const { height } = Dimensions.get("window");

  const handlePress = () => navigate("Home");

  return (
    <ImageBackground source={require('./../assets/images/onboarding.jpeg')} 
    style={{ flex: 1, justifyContent: 'flex-end'}}>
      <LinearGradient
      colors={["rgba(0,0,0,0.1)", "#000"]}
      style={{
        height: height / 2.5,
        paddingHorizontal: Spacing.padding.lg,
      }}>
        <Text style={{
          color: Colors.text,
          fontSize: FontSize.xxl, 
          fontFamily: Font['poppins-semiBold'],
          textAlign: "center",
        }}>
          Stay healthy even if you stay at home
        </Text>

        <Text style={{ 
          fontSize: FontSize.base, 
          fontFamily: Font['poppins-regular'],
          textAlign: "center",
          marginTop: Spacing.margin.base,
          color: Colors.text,
          marginBottom: Spacing.margin.xxl,
        }}>
          Staying fit to keep you in good condition can now go through mobile app
        </Text>

        <TouchableOpacity
        onPress={handlePress}
        activeOpacity={0.8}
        style={{
          backgroundColor: Colors.accent,
          paddingHorizontal: Spacing.padding.xl,
          paddingVertical: Spacing.padding.base,
          borderRadius: Spacing.borderRadius.base,
          alignItems: 'center',
        }}>
          <Text style={{
            fontFamily: Font['poppins-semiBold'],
            textAlign: "center",
            marginTop: Spacing.margin.base,
          }}>
            Get Started
          </Text>
        </TouchableOpacity>

      </LinearGradient>
    </ImageBackground>
  );
};

export default OnBoardingScreen;

const styles = StyleSheet.create({});
