import React from "react";
import { AppRegistry, Image, View, Alert, Dimensions, AsyncStorage } from "react-native";

import {
  Text,
  Container,
  Card,
  CardItem,
  Body,
  Content,
  Header,
  Left,
  Right,
  Icon,
  Title,
  Button,
  H1,
  Col,
  Row,
  Grid,
  Thumbnail,
  Input,
  InputGroup,
  Item,
  Label,
  Form,
  Picker,
} from "native-base";

import { StackNavigator } from "react-navigation";
import { Dropdown } from 'react-native-material-dropdown';
import Barcode from 'react-native-barcode-builder';

//======Import Stylesheet

import styles from "../../css/style";

const deviceWidth = Dimensions.get("window").width;

const BarCodeImg = require("../../img/barcode.png");
const GymGirl = require("../../img/woman_work.jpg");
const GymGirl_2 = require("../../img/girl_img.jpg");


class Home extends React.Component{

  constructor(){
    super()
    this.state ={
      bookingLists:[]
    }
  }


displayData = async () =>{
  try{
    let userID= await  AsyncStorage.getItem('userId');
    let accountID= await  AsyncStorage.getItem('accountId');
  //  alert(userID);
     this.getData(userID,accountID);

  }
  catch(error)
  {
    alert(error);
  }
}



  getData(userID,accountID){
    return fetch('https://app.plumiq.com/index.php/Apis/get_bookings', {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({

        account_id: accountID,
        user_id: userID,


      })

    })
    .then((response) => response.json())

    .then((responseJson) => {

//alert("I am inside get_bookings");
       this.setState({
        bookingLists: responseJson.booking_details
       });
    })
    .catch((error) => {
      alert("error12345");
    })
  }


   renderList() {
    if(this.state.bookingLists.length){
      return this.state.bookingLists.map((lists) => {
        return(

          <Card key={lists.booking_id} style={styles.Card_margin_border}>

              <CardItem>
                <Left>
                  <Thumbnail source={GymGirl} />
                  <Body>
                    <Text note>{lists.instructor_name}</Text>
                    <Text note>{lists.type}</Text>
                  </Body>
                </Left>
              </CardItem>
              <View style={styles.devider_top}></View>

              <CardItem>
                <Left>
                  <Thumbnail square large source={GymGirl_2} style={styles.mb10} />
                  <Body>
                    <Text note style={styles.heading_h1}>{lists.name}</Text>
                    <Text note>{lists.date}</Text>
                    <Text note>Single Class cost : ${lists.cost}</Text>
                    <Text note>{lists.time} - {lists.duration} Hr.</Text>
                  </Body>
                </Left>
              </CardItem>
            </Card>
            )
      });

    }

  }


  componentDidMount(){
    this.displayData();
  }




  render(){


    let data = [{
      value: 'Pure Austin Fitness',
    }, {
      value: 'Austin Fitness',
    }];


    return (
        <Container style={styles.Container}>

          <Header>
            <Body>
              <View style={{ width: 200, marginTop: -15, justifyContent: 'flex-start',}}>
                <Dropdown
                  label=''
                  value="Pure Austin Fitness"
                  data={data}
                  baseColor="#fff"
                  textColor="#fff"
                  itemColor="#000"
                  selectedItemColor="#000"
                  fontSize={18}
                  dropdownPosition={0}
                />
              </View>
            </Body>
            <Right>
              <Button transparent>
                <Icon name="search" />
              </Button>
            </Right>
          </Header>

          <Content>

            <Card style={styles.Card_margin_border}>
              <CardItem style={styles.Card_background}>
                <Body style={{ height: 150,}}>
                  <Text style={styles.Scaner_Text}>
                    Scan this code at the gate
                  </Text>
                  {/*<Image
                    style={{
                      alignSelf: "center",
                      height: 80,
                      resizeMode: "contain",
                      width: deviceWidth / 1.24,
                      marginVertical: 5,
                      flex: 1,
                    }}
                    source={BarCodeImg}
                  />*/}
                  <View
                    style={{
                      alignSelf: "center",
                      flex: 1,
                      justifyContent: 'center',
                    }}
                  >
                    <Barcode value="Plumiq" format="CODE128" />
                  </View>
                </Body>
              </CardItem>

            </Card>

            <View style={styles.Other_Location}>
              <Grid style={styles.padding_15}>
                <Col size={100}>
                  <Text style={styles.Upcoming_text}>Upcoming</Text>
                </Col>
              </Grid>
            </View>

            {this.renderList()}
            {/*<Card style={styles.Card_margin_border}>
              <CardItem>
                <Left>
                  <Thumbnail source={GymGirl} />
                  <Body>
                    <Text>Stephen Mills</Text>
                    <Text note>Yoga Instructor</Text>
                  </Body>
                </Left>
              </CardItem>

              <View style={styles.devider_top}></View>

              <CardItem>
                <Left>
                  <Thumbnail square large source={GymGirl_2} style={styles.mb10} />
                  <Body>
                    <Text style={styles.heading_h1}>Yoga</Text>
                    <Text note>07 Sep 2017</Text>
                    <Text note>Single Class cost : $25</Text>
                    <Text note>8:30AM - 9:30AM - 1 Hr.</Text>
                  </Body>
                </Left>
              </CardItem>

            </Card>*/}



            <View style={styles.Other_Location}>
              <Grid style={styles.padding_15}>
                <Col size={100}>
                  <Button
                    full
                    warning
                    style={{ marginTop: 10 }}
                    onPress={() => this.props.navigation.navigate("Schedule")}
                  >
                    <Label style={styles.color_font}>Schedule Another Class</Label>
                  </Button>
                </Col>
              </Grid>
            </View>

        </Content>

        </Container>


      );
  }

}

export default Home;
