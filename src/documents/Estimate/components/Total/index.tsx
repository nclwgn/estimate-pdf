import { View, Text, StyleSheet } from "@react-pdf/renderer";
import { TotalProps } from "./types";

const styles = StyleSheet.create({
  root: {
    flexDirection: 'row',
    fontSize: '14px',
    marginBottom: '5px'
  },
  description: {
    flexGrow: 10,
    fontWeight: 'bold'
  },
})

const Total = ({ description, value }: TotalProps) => {
  return (
    <View style={styles.root}>
      <Text style={styles.description}>{ description }</Text>
      <Text>R$ {value.toLocaleString('pt-br', {minimumFractionDigits: 2})}</Text>
    </View>
  );
}

export { Total };