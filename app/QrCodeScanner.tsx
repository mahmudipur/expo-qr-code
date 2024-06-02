import React, { useState, useEffect } from "react";
import { View, StyleSheet, Pressable } from "react-native";
import { CameraView, Camera, BarcodeScanningResult } from "expo-camera";
import { Text } from "@/components/Themed";
import { useNavigation } from "expo-router";

type BarCodeScannedCallback =
  | ((scanningResult: BarcodeScanningResult) => void)
  | undefined;

export default function QrCodeScanner() {
  const [hasPermission, setHasPermission] = useState<Boolean | null>(null);
  const [scanned, setScanned] = useState(false);

  const { navigate } = useNavigation();

  useEffect(() => {
    const getCameraPermissions = async () => {
      const { status } = await Camera.requestCameraPermissionsAsync();
      setHasPermission(status === "granted");
    };

    getCameraPermissions();
  }, []);

  const handleBarCodeScanned: BarCodeScannedCallback = ({ type, data }) => {
    navigateToUserProfile();
    setScanned(true);
  };

  const navigateToUserProfile = () => {
    navigate({ name: "UserProfile" } as never);
  };

  if (hasPermission === null) {
    return <Text>Requesting for camera permission</Text>;
  }
  if (hasPermission === false) {
    return <Text>No access to camera</Text>;
  }

  return (
    <View style={styles.container}>
      <CameraView
        onBarcodeScanned={scanned ? undefined : handleBarCodeScanned}
        style={StyleSheet.absoluteFillObject}
      />
      {scanned && (
        <Pressable onPress={() => setScanned(false)}>
          <Text weight="Bold" className="text-center text-white text-lg">
            برای اسکن مجدد ضربه بزنید
          </Text>
        </Pressable>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "column",
    justifyContent: "center",
  },
});
