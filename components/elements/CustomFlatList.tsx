import React from "react";
import {
  FlatList,
  FlatListProps,
  View
} from "react-native";

interface CustomFlatListProps<T> extends FlatListProps<T> {
  numColumns: number;
}

function CustomFlatList<T>(props: CustomFlatListProps<T>) {
  const { numColumns, data, renderItem, keyExtractor, ...restProps } = props;
  // Function to add padding items to the data
  const formatData = (data: T[], numColumns: number) => {
    if (!data) {
      return [];
    }
    const numberOfFullRows = Math.floor(data.length / numColumns);

    let numberOfElementsLastRow = data.length - numberOfFullRows * numColumns;
    const newData = [...data];
    while (
      numberOfElementsLastRow !== numColumns &&
      numberOfElementsLastRow !== 0
    ) {
      newData.push({} as T); // Add empty item
      numberOfElementsLastRow++;
    }

    return newData;
  };

  const renderFormattedItem = ({ item, index }: { item: T; index: number }) => {
    if (item === null) {
      return renderItem({ item, index });
    }
    if (Object.keys(item).length === 0) {
      return <View className="flex-1" />;
    }

    return renderItem({ item, index });
  };

  return (
    <FlatList
      {...restProps}
      data={formatData(data as T[], numColumns)}
      renderItem={renderFormattedItem}
      numColumns={numColumns}
      keyExtractor={keyExtractor}
    />
  );
}

export default CustomFlatList;
