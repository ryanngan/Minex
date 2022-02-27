import { StyleSheet, View, Text, Image } from 'react-native';


export default function Info(props) {
  return (
    <View style={styles.container}>
        <Text style={styles.catg}>{props.category}</Text>
        <Text style={styles.loc}>{props.location}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor:'#FCFCFC',
    flexDirection: "column",
    justifyContent: 'space-between',
    marginLeft: "3%"
  },
  catg: {
    fontWeight: "bold",
    fontSize: 17
  },
  loc: {
    marginTop: "15%",
    fontWeight: "100",
    color: "#808080"
  },

});
