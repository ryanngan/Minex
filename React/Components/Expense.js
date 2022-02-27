import { StyleSheet, View, Text } from 'react-native';


export default function Expense(props) {
  return (
    <View style={styles.container}>
        <Text style={styles.expense}>{"S"+"$" + props.expense}</Text>
        <Text style={styles.time}>{props.time}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor:'#FCFCFC',
    flexDirection: "column",
    justifyContent: 'space-between',
    marginLeft: "40%"
  },
  expense: {
    fontWeight: "bold",
    fontSize: 17,
    color: "#FD3C4A"
  },
  time: {
    marginTop: "15%",
    fontWeight: "100",
    color: "#808080"
  },

});
