import HeaderCustom from "./HeaderCustom.js";
import {View, Text} from 'react-native';
import MaterialCard from "../Components/MaterialCard"

export default function HomeScreen(props) {

    return (
      <View style={{flexDirection: "column", flex: 1, justifyContent: 'flex-start', alignItems: 'center', marginTop: 20, backgroundColor : "#d9d9d9" }}>
        <HeaderCustom></HeaderCustom>
        <MaterialCard category={"Shopping"} location={"@NTUC"} time={"10:00 AM"} expense={120}/>
        <MaterialCard category={"Subscription"} location={"Disney+"} time={"03:30 PM"} expense={80}/>
        <MaterialCard category={"Food"} location={"@Koufu"} time={"07:30 PM"} expense={32}/>

      </View>
    );
  }