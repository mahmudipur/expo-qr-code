import {
  Animated,
  FlatList,
  Image,
  ListRenderItem,
  TouchableOpacity,
  View,
} from "react-native";
import React, { useEffect, useRef, useState } from "react";
import { Vertices } from "@/components/elements/Vertices";
import ProfileItem from "@/components/elements/ProfileItem";
import Profile, { TProfile } from "@/utils/Profile";
import {
  person_four,
  person_one,
  person_three,
  person_two,
} from "@/constants/profiles";
import useSelectedPermission from "@/hooks/useSelectedPermission";
import { Skeleton } from "@/components/Skeleton";
import { cn } from "@/utils/common";

const profile = require("@/assets/images/profile.jpg");
const UserProfile = () => {
  const [loading, setLoading] = useState(true);
  const { selectedPermission } = useSelectedPermission();

  const translateY = useRef(new Animated.Value(100)).current;
  const opacity = useRef(new Animated.Value(0)).current;

  const person = new Profile(person_one);
  const person_2 = new Profile(person_two);
  const person_3 = new Profile(person_three);
  const person_4 = new Profile(person_four);

  const _renderItem: ListRenderItem<TProfile> = ({ item }) => {
    return (
      <ProfileItem label={item.label} value={item.value} loading={loading} />
    );
  };
  useEffect(() => {
    Animated.parallel([
      Animated.spring(translateY, {
        toValue: 0,
        friction: 2,
        useNativeDriver: true,
      }),
      Animated.timing(opacity, {
        toValue: 1,
        duration: 1500,
        useNativeDriver: true,
      }),
    ]).start();
  }, [translateY, opacity]);

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 2500);
  }, []);
  return (
    <View className="relative flex items-center justify-center">
      <Vertices />
      <Animated.View
        style={{ transform: [{ translateY }] }}
        className={cn(
          "flex items-center justify-center bg-transparent px-4 absolute right-0 left-0 top-0 bottom-0",
          {
            "gap-y-10": selectedPermission!.id !== 0,
            "gap-y-5": selectedPermission!.id === 0,
          }
        )}
      >
        {selectedPermission?.id === 0 ? (
          <>
            <View className="w-full px-2 py-4 rounded-lg bg-white/10 space-y-3">
              {loading ? (
                <Skeleton className="h-20 w-20 mx-auto rounded-lg -mt-12" />
              ) : (
                <Image
                  className="aspect-square h-20 w-20 mx-auto border-2 border-white rounded-lg -mt-12"
                  source={profile}
                  resizeMode="cover"
                />
              )}
              <FlatList
                data={person_2.getProfile()}
                ItemSeparatorComponent={() => <View className="h-4" />}
                renderItem={_renderItem}
              />
            </View>
            <View className="w-full px-2 py-4 rounded-lg bg-white/10 space-y-3">
              <FlatList
                data={person_3.getProfile()}
                ItemSeparatorComponent={() => <View className="h-4" />}
                renderItem={_renderItem}
              />
            </View>
            <View className="w-full px-2 py-4 rounded-lg bg-white/10 space-y-3">
              <FlatList
                data={person_4.getProfile()}
                ItemSeparatorComponent={() => <View className="h-4" />}
                renderItem={_renderItem}
              />
            </View>
          </>
        ) : (
          <View className="w-full px-2 py-4 rounded-lg bg-white/10 space-y-7">
            {loading ? (
              <Skeleton className="h-20 w-20 mx-auto rounded-lg -mt-12" />
            ) : (
              <Image
                className="aspect-square h-20 w-20 mx-auto border-2 border-white rounded-lg -mt-12"
                source={profile}
                resizeMode="cover"
              />
            )}
            <FlatList
              data={person.getProfileWithPermission(selectedPermission!.id)}
              ItemSeparatorComponent={() => <View className="h-4" />}
              renderItem={_renderItem}
            />
          </View>
        )}
      </Animated.View>
    </View>
  );
};

export default UserProfile;
