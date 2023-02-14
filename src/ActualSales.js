import React from "react";
import { Button, Image, StyleSheet, Text, View } from "react-native";

function ActualSales() {
  return (
    <View style={{ flex: 1 }}>
      <View
        style={{
          backgroundColor: "#fff",
          height: 100,
          shadowColor: "gray",
          shadowOffset: { width: 1, height: 1 },
          shadowOpacity: 0.4,
          shadowRadius: 2,
          elevation: 5
        }}
      >
        <Text style={{ color: "gray", fontSize: 10, fontWeight: "bold" }}>
          ACTUAL SALES
        </Text>
        <View style={{ flex: 1, flexDirection: "row" }}>
          <View style={{ flex: 1 }}>
            <Text
              style={{
                fontSize: 40,
                fontWeight: "bold",
                letterSpacing: 2,
                marginTop: 10
              }}
            >
              $11,535
            </Text>
            <View style={{ flexDirection: "row", marginTop: 10 }}>
              <Text style={{ fontSize: 12, color: "gray" }}>Daily Goal : </Text>
              <Text style={{ fontSize: 12, fontWeight: "bold" }}>$11,650</Text>
            </View>
          </View>
          <View style={{ flex: 1, backgroundColor: "yellow" }}></View>
        </View>
      </View>
    </View>
  );
}
export default ActualSales;
