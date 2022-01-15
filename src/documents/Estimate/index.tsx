import { Document, Font, Page, StyleSheet, Text, View } from "@react-pdf/renderer";
import { Header } from "./components/Header";
import { Item } from "./components/Item";
import { Total } from "./components/Total";
import { EstimateProps } from "./types";

Font.register({ family: 'Roboto', fonts: [
  { src: './assets/fonts/Roboto-Light.ttf' },
  { src: './assets/fonts/Roboto-Regular.ttf', fontWeight: 'bold' }
]});

const styles = StyleSheet.create({
  page: {
    flexDirection: 'column',
    fontSize: '12px',
    fontFamily: 'Roboto'
  },
  content: {
    paddingHorizontal: '10%',
    paddingVertical: '5%'
  },
  extraInformation: {
    fontSize: '10px'
  }
})

const Estimate = ({ estimate } : EstimateProps) => {
  const getTotalValue = () => {
    let sum = 0;

    estimate.items.forEach(item => {
      sum += item.subItems[0].value ?? 0;
    });

    return sum;
  }

  return (
    <Document>
      <Page size='A4' style={styles.page}>
        <Header clientName={estimate.clientName} />
        <View style={styles.content}>
          {estimate.items.map((item, index) => (
            <Item item={item} key={index} />
          ))}
          {estimate.items.every(item => item.subItems.length == 1) &&
            <>
              <Total description='Valor Total' value={getTotalValue()} />
              {estimate.hasDiscount &&
                <Total
                  description={`À vista com ${estimate.discountPercentage}% de desconto`}
                  value={Math.round(getTotalValue()*(1-estimate.discountPercentage/100)*100)/100}
                />
              }
            </>
          }
          <Text style={styles.extraInformation}>{estimate.extraInformation}</Text>
        </View>
      </Page>
    </Document>
  );
};

export { Estimate };