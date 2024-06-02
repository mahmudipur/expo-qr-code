import React from "react";

import { Text, View } from "@/components/Themed";
import { Vertices } from "@/components/elements/Vertices";
import { Image, TouchableOpacity } from "react-native";
import { useActionSheet } from "@expo/react-native-action-sheet";
import { useNavigation } from "expo-router";
import Permission, { IPermission } from "@/utils/Permissions";
import useSelectedPermission from "@/hooks/useSelectedPermission";

const qrcode = require("@/assets/images/qrcode.png");

const index = () => {
  const permission = new Permission()
  const { showActionSheetWithOptions } = useActionSheet();
  const {setSelectedPermission} = useSelectedPermission()

  const { navigate } = useNavigation();

  const navigatePassingPermissions: (i: IPermission) => void = (selectedPermission) => {
    setSelectedPermission(selectedPermission)
    navigate({name: "QrCodeScanner"} as never);
  }

  const onPress = () => {
    const availabePermissions = permission.selectAll();

    const options = availabePermissions.map(item => item.label)

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
          <Text className="text-xl text-center text-white">بارکدخوان</Text>
          <Text weight="Light" className="text-sm text-center text-white">
            پس از فشردن دکمه اسکن، لطفا دستگاه را نزدیک به بارکد مربوطه نمایید
          </Text>
        </View>
        <View className="flex items-center justify-center p-8 w-9/12 max-h-[45%] rounded-lg bg-white">
          <Image
            source={qrcode}
            resizeMode="center"
            className="w-full h-full max-h-52 aspect-square"
          />
          <TouchableOpacity
            activeOpacity={0.7}
            className="w-full bg-purple-600 p-2 rounded-full"
            onPress={onPress}
          >
            <Text className="text-sm text-center text-white">اسکن</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

export default index;
