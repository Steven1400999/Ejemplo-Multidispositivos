import { Button, ButtonText } from '@gluestack-ui/themed';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import React from 'react';
import RouteProp from 


const Button1 () => {
  return (
    <Button
      size="lg"
      p="$3"
      bg="$green700"
      $hover-bg="$green300"
      $active-bg="$green900"
      $_txt_hover_color="$white"
      borderRadius={25} >
      <ButtonText>
        Button
      </ButtonText>
    </Button>

  )
};


const Button2 () => {
  return (
    <Button
      size="lg"
      p="$3"
      bg="$green700"
      $hover-bg="$green300"
      $active-bg="$green900"
      $_txt_hover_color="$white"
      borderRadius={25}>
      <ButtonText>
        Button2
      </ButtonText>
    </Button>
  )
};



interface Iuser {
  route: RouteProp<any, 'Iphone'>

}

const Tab = createBottomTabNavigator();

const Iphone: React.FC<Iuser>= ({route}) => {
const {email}=route.params

  return<>
   {console.log(email)}
   <Text>{email}</Text>
  
   {/* // <Tab.Navigation>
  //   <Tab.Screen name="Home" component={Home} />
  //   <Tab.Screen name="Iphone" component={Iphone} />
  // </Tab.Navigator> */


}


