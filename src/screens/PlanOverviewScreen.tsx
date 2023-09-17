import {
  Image,
  ImageBackground,
  Platform,
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import React from "react";
import AppText from "../components/AppText";
import IconButton from "../components/IconButton";
import Spacing from "../constants/Spacing";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { BlurView } from "expo-blur";
import Font from "../constants/Font";
import Colors from "../constants/Colors";
import FontSize from "../constants/FontSize";
import { Ionicons } from "@expo/vector-icons";
import { LinearGradient } from "expo-linear-gradient";
import Button from "../components/Button";
import Screen from "../components/Screen";
import { RootStackParamList } from "../../types";

type Props = NativeStackScreenProps<RootStackParamList, "PlanOverview">;

const PlanOverviewScreen: React.FC<Props> = ({ route, navigation: { goBack },}) => {
  const workout = route.params.workout;
  return (
    <SafeAreaView style={{ flex: 1,  paddingTop: Platform.OS === "ios" ? 0 : StatusBar.currentHeight}}>
      <View style={{
        alignItems: 'center',
        paddingVertical: Spacing.padding.lg,
        paddingHorizontal: Spacing.padding.base,        
        justifyContent: "center",
        position: "relative"
      }}>
        <IconButton onPress={() => goBack()} name="chevron-back" style={{
          position: "absolute",
          left: 20,
        }} />
          <AppText>Plan Overview</AppText>
      </View>

      <ScrollView style={{
        paddingHorizontal: Spacing.padding.base
      }}>

        <ImageBackground
         source={workout?.image}
         style={{
          height: 250,
          marginVertical: Spacing.margin.lg,
          borderRadius: Spacing.borderRadius.base,
          overflow: "hidden",
          justifyContent: "space-between",
          paddingVertical: Spacing.padding.base
        }}>

          <View style={{
            padding: Spacing.padding.base,
            alignItems: 'flex-end',

          }}>
            <IconButton name="bookmark-outline" style={{
              backgroundColor: Colors.primary,
              borderWidth: 0,

            }}/>
          </View>
          <View style={{
            borderRadius: Spacing.borderRadius.base,
            overflow: "hidden",
            marginHorizontal: Spacing.margin.lg,
          }}>
            <BlurView intensity={Platform.OS === 'android' ? 100 : 80}
            tint="dark"
            style={{
              padding: Spacing.padding.base,
              flexDirection: "row",
              justifyContent: "space-between"
            }}>
              <View style={{
                flexDirection: "row",
                alignItems: "center"
              }}>
                <AppText style={{
                  fontFamily: Font['poppins-semiBold'],
                  color: Colors.accent,
                  marginRight: Spacing.margin.base,

                }}>
                  {workout?.minutes}
                </AppText>

                <AppText> minutes </AppText>
              </View>

              <View style={{
                flexDirection: "row",
                alignItems: "center"
              }}>
                <AppText style={{
                  fontFamily: Font['poppins-semiBold'],
                  color: Colors.accent,
                  marginRight: Spacing.margin.base,

                }}>
                  {workout?.minutes}
                  <AppText> minutes </AppText>
                </AppText>
              </View>

              <View style={{
                flexDirection: "row",
                alignItems: "center"
              }}>
                <AppText style={{
                  fontFamily: Font['poppins-semiBold'],
                  color: Colors.accent,
                  marginRight: Spacing.margin.base,

                }}>
                  {workout?.minutes}
                  <AppText> minutes </AppText>
                </AppText>
              </View>
            </BlurView>
          </View>

        </ImageBackground>
        <View style={{
          flexDirection: "row",
          alignItems: 'center',
          justifyContent: "space-between"
        }}>
           <AppText style={{
            fontSize: FontSize.lg,
            fontFamily: Font['poppins-semiBold']
           }}>
            {workout?.name}
           </AppText>

           <View style={{
            flexDirection: "row",
            alignItems: 'center',
            
           }}>
            <Ionicons name="star" size={20} color={Colors.yellow} />

            <AppText
              style={{
              marginLeft: Spacing.margin.sm
            }}>
              {workout?.rating}
            </AppText>


           </View>

        </View>

        <AppText
          style={{
          marginTop: Spacing.margin.sm
        }}>
          {workout?.coach}
        </AppText>

        <AppText
          style={{
          marginTop: Spacing.margin.base,
          fontFamily: Font['poppins-semiBold'],
        }}>
          Description 
        </AppText>

        <AppText
        numberOfLines={3}
          style={{
          marginTop: Spacing.margin.base,
          fontFamily: Font['poppins-regular'],
        }}>
          {workout?.description}
        </AppText>

        <AppText
        numberOfLines={3}
          style={{
          marginVertical: Spacing.margin.base,
          fontFamily: Font['poppins-semiBold'],
        }}>
          Exercises ({workout?.exercises?.length})
        </AppText>

        {
          workout?.exercises?.map((excercise) => (
            <TouchableOpacity 
              activeOpacity={0.8} 
              key={excercise?.id}
              style={{
                backgroundColor: Colors.primary,
                borderRadius: Spacing.borderRadius.base,
                marginBottom: Spacing.margin.lg,
                padding: Spacing.padding.base,
                flexDirection: "row",

              }}
            >
              <Image
              source={excercise?.image}
              style={{
                height: 100,
                width: 100,
                borderRadius: Spacing.borderRadius.base
              }}/>

              <View style={{
                marginLeft: Spacing.margin.base,
                justifyContent: "space-between",

              }}>

                <AppText style={{
                  fontFamily: Font['poppins-semiBold'],
                }}>
                  {excercise?.name}
                </AppText>

              <View style={{
                flexDirection: 'row',
                alignItems: 'center',

              }}>
                <Ionicons name="time-outline" size={14} color={Colors.text} />
                <AppText style={{
                  fontFamily: Font['poppins-regular'],
                  marginLeft: Spacing.margin.sm
                }}>{excercise?.time} / {excercise?.set} set 
                </AppText>
              </View>

              <View style={{
                flexDirection: "row",
                alignItems: "center"
              }}>
              <Ionicons name="play" size={14} color={Colors.accent} />
                <AppText style={{
                  fontFamily: Font['poppins-regular'],
                  marginLeft: Spacing.margin.sm
                }}>
                  Play
                </AppText>
              </View>

              </View>


            </TouchableOpacity>
          ))
        }

      </ScrollView>
      <LinearGradient colors={["rgba(0,0,0,0.1)", "black"]} style={{
        position: "absolute",
        width: "100%",
        paddingBottom: Spacing.padding.base,
        paddingTop: Spacing.padding.sm,
        
        bottom: 0,
        paddingHorizontal: Spacing.padding.base,

      }}>
        <Button onPress={() =>{}} textStyle={{ fontFamily: Font['poppins-semiBold'] }} >Start Workout</Button>
      </LinearGradient>
    </SafeAreaView>
  );
};

export default PlanOverviewScreen;

const styles = StyleSheet.create({});
