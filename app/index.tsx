import React from "react";

import { Text, View } from "@/components/Themed";
import { Vertices } from "@/components/elements/Vertices";
import { Image, TouchableOpacity } from "react-native";
import { useActionSheet } from "@expo/react-native-action-sheet";
import { useNavigation } from "expo-router";
import Permission, { IPermission } from "@/utils/Permissions";
import useSelectedPermission from "@/hooks/useSelectedPermission";

const sepahLogo = require("@/assets/images/bank.jpg");
const mohajeratLogo = require("@/assets/images/mohajerat.jpg");

const index = () => {
  const permission = new Permission();
  const { showActionSheetWithOptions } = useActionSheet();
  const { setSelectedPermission } = useSelectedPermission();

  const { navigate } = useNavigation();

  const navigatePassingPermissions: (i: IPermission) => void = (
    selectedPermission
  ) => {
    setSelectedPermission(selectedPermission);
    navigate({ name: "QrCodeScanner" } as never);
  };

  const onPress = () => {
    const availabePermissions = permission.selectAll();

    const options = availabePermissions.map((item) => item.label);

    const cancelButtonIndex = 3;

    showActionSheetWithOptions(
      {
        options,
        cancelButtonIndex,
        title: "سطح دسترسی خود را انتخاب نمایید",
      },
      (selectedIndex) => {
        switch (selectedIndex) {
          case 0:
          case 1:
          case 2:
            navigatePassingPermissions(permission.selectById(selectedIndex));
            break;
          default:
            break;
        }
      }
    );
  };

  return (
    <View className="relative flex items-center justify-center">
      <Vertices />
      <View className="flex items-center justify-center gap-y-10 bg-transparent px-4 absolute right-0 left-0 top-0 bottom-0">
        <View className="w-full px-2 py-4 rounded-lg bg-white/10 gap-y-4">
          <Text className="text-lg text-center text-white">پنل مدیریتی سازمان ملی مهاجرت</Text>
          <Text weight="Light" className="text-sm text-center text-white">
            پس از ورود لطفا کارت تبعه مورد نظر را اسکن نمایید.
          </Text>
        </View>
        <View className="flex items-center justify-center p-8 w-10/12 max-h-[45%] rounded-lg bg-white space-y-10">
          <View className="flex flex-row items-center justify-between w-full space-x-3">
            <Image
              source={sepahLogo}
              resizeMode="center"
              className="w-24 h-full max-h-52 aspect-square"
            />
            <Image
              source={mohajeratLogo}
              resizeMode="center"
              className="w-28 h-full max-h-52 aspect-square"
            />
          </View>
          <TouchableOpacity
            activeOpacity={0.7}
            className="w-full bg-purple-600 p-2 rounded-full"
            onPress={onPress}
          >
            <Text className="text-sm text-center text-white">ورود</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

export default index;
