import { View } from "react-native";
import React from "react";
import { Text } from "@/components/Themed";
import { Skeleton } from "../Skeleton";

type TProfileItemProps = {
  loading?: boolean;
  label: string;
  value: string;
};
const ProfileItem = ({ loading = true, label, value }: TProfileItemProps) => {
  return (
    <View className="bg-transparent flex flex-row items-center justify-between">
      {loading ? <Skeleton className="w-36 h-3 rounded-full" /> : <Text weight="Bold" className="text-white">{value}</Text>}
      <Text className="text-white">{label}</Text>
    </View>
  );
};

export default ProfileItem;
