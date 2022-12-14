import React, {useEffect, useState} from "react";
import { StyleSheet, Text, View } from "react-native";

import { Switch } from 'react-native-gesture-handler';

export default function Notification({
  notificationToggle,
  setNotificationToggle,
}) {

    const toggleSwitch = () => {
      setNotificationToggle((previousState) => !previousState);
    };

  return (
    <>
      <View style={styles.container}>
          <Text style={styles.title}>Notificação</Text>
          <Switch
              trackColor={{false: "#FF0044", true: "#2DBE56"}}
              thumbColor={"#FFFFFF"}
              ios_backgroundColor="#FF0044"
              onValueChange={toggleSwitch}
              value={notificationToggle}
          />
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 20,
  },
  titleDisabled: {
    color: '#BBBBBB',
    fontSize: 20,
    marginRight: 10,
  },
  title: {
    color: '#FFFFFF',
    fontSize: 20,
    marginRight: 10,
  },
});