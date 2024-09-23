import { Text } from "@/components/Themed";
import FlatList from "@/components/elements/CustomFlatList";
import { Vertices } from "@/components/elements/Vertices";
import useSelectedPermission from "@/hooks/useSelectedPermission";
import Permission, { IPermission } from "@/utils/Permissions";
import { useNavigation } from "expo-router";
import React from "react";
import { Image, Pressable, View } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";

const Organizations = () => {
  const { top } = useSafeAreaInsets();

  const { setSelectedPermission } = useSelectedPermission();

  const { navigate } = useNavigation();

  const permissions = new Permission();

  const navigatePassingPermissions: (i: IPermission) => void = (
    selectedPermission
  ) => {
    setSelectedPermission(selectedPermission);
    navigate({ name: "QrCodeScanner" } as never);
  };
  return (
    <View className="relative flex items-center justify-center">
      <Vertices />
      <View className="flex gap-y-10 bg-transparent px-4 absolute right-0 left-0 top-0 bottom-0">
        <FlatList
          data={permissions.selectAll()}
          ListHeaderComponent={<View style={{ marginTop: top + 20 }} />}
          renderItem={({ item }) => (
            <Pressable
              onPress={() =>
                navigatePassingPermissions(permissions.selectById(item.id))
              }
              className="flex-1 items-center justify-center bg-white rounded-2xl py-7 mb-5"
            >
              <Image
                source={item.logo}
                resizeMode="center"
                className="w-20 h-full aspect-square"
              />
              <Text className="text-sm text-center mt-3">{item.label}</Text>
            </Pressable>
          )}
          numColumns={2}
          columnWrapperStyle={{ flex: 1, gap: 20 }}
        />
      </View>
    </View>
  );
};

export default Organizations;
