import { View, Text, StyleSheet } from "@react-pdf/renderer";
import { SubItem } from "../SubItem";
import { ItemProps } from "./types";

const styles = StyleSheet.create({
  root: {
    marginBottom: '15px',
    fontSize: '12px'
  },
  title: {
    fontSize: '14px',
    fontWeight: 'bold'
  }
})

const Item = ({ item }: ItemProps) => {
  const hasManyChildren = item.subItems.length >= 2;

  return (
    <View style={styles.root}>
      <Text style={styles.title}>{ item.title }</Text>
      {item.subItems.map((subItem, index) => (
        <SubItem key={index} subItem={subItem} index={index} hasMany={hasManyChildren} />
      ))}
    </View>
  );
}

export { Item };