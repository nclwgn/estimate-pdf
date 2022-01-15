import { StyleSheet, View, Text } from "@react-pdf/renderer";
import { HorizontalLine } from "../HorizontalLine";
import { SubItemProps } from "./types";

const styles = StyleSheet.create({
  root: {
    flexDirection: 'row'
  },
  content: {
    flexGrow: 10
  },
  title: {
    marginTop: '5px'
  },
  indent: {
    paddingLeft: '10px'
  },
  valueContainer: {
    flexDirection: 'column'
  },
  value: {
    flexGrow: 10
  }
})

const SubItem = ({ subItem, index, hasMany }: SubItemProps) => {
  return (
    <>
      <View style={styles.root}>
        <View style={styles.content}> 
          {hasMany && <Text style={styles.title}>Opção {index+1}</Text>}
          <Text style={[styles.title, styles.indent]}>{subItem.description}</Text>
        </View>
        <View style={styles.valueContainer}>
          <View style={styles.value} />
          <Text>R$ {subItem.value?.toLocaleString('pt-br', {minimumFractionDigits: 2})}</Text>
        </View>
      </View>
      <HorizontalLine />
    </>
  );
}

export { SubItem };