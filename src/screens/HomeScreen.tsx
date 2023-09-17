import {
  Image,
  Platform,
  SafeAreaView,
  ScrollView,
  StatusBar,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import React, { useState } from "react";
import { NativeStackScreenProps } from "@react-navigation/native-stack";

import { Ionicons } from "@expo/vector-icons";

import Rating from "react-native-easy-rating";
import { RootStackParamList } from "../../types";
import Screen from "./../components/Screen";
import Spacing from "./../constants/Spacing";
import { categories, user, workoutPlans, workouts } from "./../data";
import AppText from "./../components/AppText";
import Font from "./../constants/Font";
import IconButton from "./../components/IconButton";
import Colors from "./../constants/Colors";
import FontSize from "./../constants/FontSize";
import SectionHeader from "./../components/SectionHeader";
import Workout from "./../components/Workout";
import CategoryList from "../components/CategoryList";

type Props = NativeStackScreenProps<RootStackParamList, "Home">;

const HomeScreen: React.FC<Props> = ({ navigation: { navigate } }) => {
  return (
    <SafeAreaView style={{ flex: 1,  paddingTop: Platform.OS === "ios" ? 0 : StatusBar.currentHeight}}>
      <View style={{
        flexDirection: "row",
        alignItems: 'center',
        justifyContent: 'space-between',
        padding: Spacing.padding.base
      }}>
        <View style={{ flexDirection: "row"}}>
          <Image 
          source={user.profile} 
          style={{
            height: 50,
            width: 50,
            borderRadius: 25,
          }}/>

          <View style={{
            marginLeft: Spacing.margin.base,
            
          }}>
            <AppText>
              Hello, Welcome
            </AppText>

            <AppText 
            style={{
              fontFamily: Font['poppins-regular'],
              textTransform: "capitalize"
            }}>
              {user.name}
            </AppText>
          </View>
        </View>

        <TouchableOpacity 
          activeOpacity={0.5}
          style={{
          height: 40,
          width: 40,
          borderWidth: 1,
          borderColor: Colors.border,
          alignItems: 'center',
          justifyContent: 'center',
          borderRadius: Spacing.borderRadius.sm,
        }}>
          <Ionicons name="notifications" size={24} color={Colors.text} />
        </TouchableOpacity>

      </View>
      
      <ScrollView style={{ flex: 1,  paddingHorizontal: Spacing.padding.base }}>
        
        <View style={{
          backgroundColor: Colors.primary,
          paddingVertical: 6,
          paddingHorizontal: Spacing.padding.sm,
          borderRadius: Spacing.borderRadius.base,
          marginVertical: Spacing.margin.xl,
          flexDirection: 'row',
          alignItems: 'center'
        }}>
          <Ionicons name="search-outline" size={24} color={Colors.text} />
          <TextInput placeholder="Search Workout" placeholderTextColor={Colors.text} style={{
            fontSize: FontSize.base,
            marginLeft: Spacing.margin.sm,
            flex: 1,
          }} />
           <IconButton name="options-outline" color={Colors.black} style={{
            backgroundColor: Colors.accent,
           }} />
        </View>

        <ScrollView horizontal showsHorizontalScrollIndicator={false}>
          <CategoryList />
        </ScrollView>

          <SectionHeader title="Featured Workout" />
        
          <ScrollView 
          horizontal 
          showsHorizontalScrollIndicator={false} 
          pagingEnabled
          snapToInterval={270+Spacing.margin.lg}
          decelerationRate='fast'
          >
            {workouts?.map((workout) => (
              <Workout
              key={workout?.id}
              workout={workout}
              onPress={() => navigate("PlanOverview", {workout: workout})}
              />
            ))}
          </ScrollView>

        <SectionHeader title="Trending" />

        {workoutPlans?.map((workplan) => (
          <TouchableOpacity key={workplan?.id} activeOpacity={0.8} style={{
            padding: Spacing.padding.base,
            marginBottom: Spacing.margin.base,
            backgroundColor: Colors.primary,
            borderRadius: Spacing.borderRadius.base,
            flexDirection: "row"
          }}>
            <Image source={workplan?.image} style={{
              width: 100,
              height: 100,
              borderRadius: Spacing.borderRadius.base,
            }} />
            <View style={{
              marginLeft: Spacing.margin.lg,
              justifyContent: "space-between",
              
            }}>
              <AppText 
              style={{ fontFamily: Font['poppins-semiBold']}}>
                {workplan.name}
              </AppText>
              <View style={{flexDirection: "row", alignItems: 'center'}}> 
                <Ionicons name="calendar-outline" size={16} color={Colors.text} />
                <AppText style={{
                  marginLeft: Spacing.margin.base,
                }}>
                  {workplan.duration} | {workplan.location}
                  </AppText>
              </View>
              <View style={{
                flexDirection: "row",
                alignItems: "center",
              }}>
                <Rating rating={workplan?.rating} max={5} iconWidth={20} iconHeight={20} />
                <AppText style={{ 
                  marginLeft: Spacing.margin.sm
                }}>
                  {workplan?.rating}
                </AppText>
              </View>
            </View>
          </TouchableOpacity>
        ))}

      </ScrollView>
    </SafeAreaView>
  );
};

export default HomeScreen;
