import { StyleSheet, View, Text, Image } from 'react-native';
import shoppingIcon from "../assets/shoppingIcon.png";
import subscriptionIcon from "../assets/SubscriptionIcon.png";
import foodIcon from "../assets/FoodIcon.png";
import Expense from './Expense';
import Info from './Info';


export default function MaterialCard(props) {
  return (
    <View style={styles.container}>
        {(props.category=="Shopping")&&<Image
        source={shoppingIcon}
        style={styles.imageStyle}
      />}
        {(props.category=="Food")&&<Image
        source={foodIcon}
        style={styles.imageStyle}
      />}
        {(props.category=="Subscription")&&<Image
        source={subscriptionIcon}
        style={styles.imageStyle}
      />}
      <Info category={props.category} location={props.location}/>
      <Expense expense={props.expense} time={props.time}/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor:'#FCFCFC',
    borderRadius: 25,
    margin: 3,
    width: "90%",
    height: "13%",
    flexDirection: "row",
    justifyContent: 'space-between',
    alignItems: 'center'
  },

  imageStyle: {
    marginLeft: "5%",
    width: "20%",
    height: "85%"
  }
});
