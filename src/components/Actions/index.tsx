import React from "react";
import {
  Pressable,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from "react-native";

import { AntDesign } from "@expo/vector-icons";

import colors from "../../theme/colors";

export default function Actions({navigation}) {

  const handleAddRecord = () => {
    navigation.navigate('Entradas');
  };

  return (
    <ScrollView
      style={styles.container}
      horizontal={true}
      showsHorizontalScrollIndicator={false}
    >
      <Pressable style={styles.actionButton} onPress={handleAddRecord}>
        <View style={styles.areaButton}>
          <AntDesign name="addfolder" size={26} color={colors.blue} />
        </View>
        <Text style={styles.labelButton}>Entrada</Text>
      </Pressable>
      
      <Pressable style={styles.actionButton}>
        <View style={styles.areaButton}>
          <AntDesign name="tagso" size={26} color={colors.blue} />
        </View>
        <Text style={styles.labelButton}>Saídas</Text>
      </Pressable>

      <Pressable style={styles.actionButton}>
        <View style={styles.areaButton}>
          <AntDesign name="creditcard" size={26} color={colors.blue} />
        </View>
        <Text style={styles.labelButton}>Carteira</Text>
      </Pressable>

      <Pressable style={styles.actionButton}>
        <View style={styles.areaButton}>
          <AntDesign name="barcode" size={26} color={colors.blue} />
        </View>
        <Text style={styles.labelButton}>Boletos</Text>
      </Pressable>

      <Pressable style={styles.actionButton}>
        <View style={styles.areaButton}>
          <AntDesign name="setting" size={26} color={colors.blue} />
        </View>
        <Text style={styles.labelButton}>Conta</Text>
      </Pressable>

    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    maxHeight: 84,
    marginBottom: 14,
    marginTop: 18,
    paddingStart: 14,
    paddingEnd: 14,
  },

  actionButton: {
    alignItems: "center",
    marginRight: 28,
  },

  areaButton: {
    backgroundColor: colors.opacity_black,
    height: 60,
    width: 60,
    borderRadius: 60 / 2,
    justifyContent: "center",
    alignItems: "center",
  },

  labelButton: {
    marginTop: 4,
    textAlign: "center",
    fontWeight: "bold",
  },
});