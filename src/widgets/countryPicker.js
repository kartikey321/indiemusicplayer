import React from 'react';
import {StyleSheet, Text, View, Modal, FlatList} from 'react-native';

const countryPicker = ({clicked, data}) => {
  const renderItemView = item => {
    return (
      <View style={{height: 40, justifyContent: 'center',flexDirection:'row'}}>
          
        <Text>{item.name}</Text>
      </View>
    );
  };
  return (
    <View>
      <Modal visible={clicked}>
        <View style={{flex: 1}}>
          <FlatList
            data={data}
            renderItem={({item, index}) => renderItemView(item)}
          />
        </View>
      </Modal>
    </View>
  );
};

export default countryPicker;

const styles = StyleSheet.create({});
