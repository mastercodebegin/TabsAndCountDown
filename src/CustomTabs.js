import React, { useEffect } from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import ActualSales from "./ActualSales";
export const CustomTabs = () => {
  const [activeTab, setActiveTab] = React.useState(0);
  useEffect(() => {
    console.log("tab----", activeTab);
  });
  const getComponent = () => {
    switch (activeTab) {
      case 1:
        return <Text>One</Text>;
      case 2:
        return <Text>Two</Text>;
      default:
        return <ActualSales />;
    }
  };
  return (
    <View style={{ flex: 1, left: 10 }}>
      <Text style={{ fontSize: 30 }}>Sales Goal</Text>
      <View style={{ flexDirection: "row", marginTop: 30 }}>
        <TouchableOpacity onPress={() => setActiveTab(0)}>
          <View
            style={
              activeTab == 0 ? styles.tabViewActive : styles.tabViewInActive
            }
          >
            <Text
              style={
                activeTab == 0 ? styles.tabLabelActive : styles.tabLabelInActive
              }
            >
              Today
            </Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => setActiveTab(1)}>
          <View
            style={[
              activeTab == 1 ? styles.tabViewActive : styles.tabViewInActive,
              { left: 20 }
            ]}
          >
            <Text
              style={
                activeTab == 1 ? styles.tabLabelActive : styles.tabLabelInActive
              }
            >
              Week
            </Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => setActiveTab(2)}>
          <View
            style={[
              activeTab == 2 ? styles.tabViewActive : styles.tabViewInActive,
              { left: 40 }
            ]}
          >
            <Text
              style={
                activeTab == 2 ? styles.tabLabelActive : styles.tabLabelInActive
              }
            >
              Month
            </Text>
          </View>
        </TouchableOpacity>
      </View>
      <View style={{ flex: 1, top: 20 }}>{getComponent()}</View>
    </View>
  );
};
export default CustomTabs;

const styles = StyleSheet.create({
  tabViewActive: {
    height: 26,
    width: 70,
    backgroundColor: "#c33034",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 30
  },
  tabViewInActive: {
    backgroundColor: "white",
    borderColor: "#abb0a3",
    borderWidth: 0.3,
    height: 26,
    width: 70,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 30
  },
  tabLabelActive: {
    color: "rgba(240,229,221,255)"
  },
  tabLabelInActive: {
    color: "black"
  }
});
