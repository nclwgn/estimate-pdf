import { View, Image, StyleSheet, Text } from "@react-pdf/renderer";
import { Company } from "../../../../models/Company";
import { HeaderProps } from "./types";

const styles = StyleSheet.create({
  root: {
    backgroundColor: '#FFF4E4',
    paddingVertical: '10px',
    paddingHorizontal: '10%',
    fontSize: '16px',
    color: '#048A81'
  },
  organization: {
    flexDirection: 'row',
    marginBottom: '5px'
  },
  logo: {
    width: '80px',
    height: '80px',
    margin: '20px'
  },
  company: {
    flexDirection: 'column',
    justifyContent: 'center',
    textOverflow: 'ellipsis'
  },
  address: {
    fontSize: '10px'
  },
  client: {
    flexDirection: 'row'
  },
  clientName: {
    fontWeight: 'bold'
  },
  issueDate: {
    fontSize: '11px'
  }
})

const Header = ({ clientName, companyName }: HeaderProps) => {
  const getCompany = (): Company => {
    return {
      "Atelier Vânia Wagner": {
        name: 'Atelier Vânia H. Wagner',
        address: 'Rua Dorval Luz, 183\nBairro Santa Terezinha\nBrusque/SC',
        logo: 'https://i.imgur.com/zoGjCWp.png'
      },
      "Atear Persianas": {
        name: 'Atear Persianas',
        address: 'Rua Dorval Luz, 183\nBairro Santa Terezinha\nBrusque/SC',
        logo: 'https://i.imgur.com/lNCOvyl.png'
      }
    }[companyName];
  }

  return (
    <View style={styles.root}>
      <View style={styles.organization}>
        <Image style={styles.logo} src={ getCompany().logo } />
        <View style={styles.company}>
          <Text>{ getCompany().name }</Text>
          <Text style={styles.address}>{ getCompany().address }</Text>
        </View>
      </View>
      <View>
        <View style={styles.client}>
          <Text>Cliente: </Text>
          <Text style={styles.clientName}>{clientName}</Text>
        </View>
        <Text style={styles.issueDate}>
          Pedido válido por 15 dias. Emissão: {new Date().toLocaleDateString()}
        </Text>
      </View>
    </View>
  );
}

export { Header };