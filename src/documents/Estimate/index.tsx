import { Document, Page, Text, View } from "@react-pdf/renderer";
import { EstimateProps } from "./types";

const Estimate = ({ estimate } : EstimateProps) => (
  <Document>
    <Page size='A4'>
      <Text>{estimate.clientName}</Text>
      {estimate.items.map(item => (
        <View>
          <Text>{ item.title }</Text>
          <Text>Teste 123</Text>
        </View>
      ))}
    </Page>
  </Document>
);

export { Estimate };