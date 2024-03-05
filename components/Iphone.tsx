import { Box, Center, Button, ButtonText, ButtonIcon, ButtonGroup, Icon, AddIcon, InfoIcon, ButtonSpinner, ArrowUpIcon, Heading, Text, HStack, VStack, ThreeDotsIcon, Input, InputField } from '@gluestack-ui/themed';
import { EditIcon, ArrowLeftIcon } from 'lucide-react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import React from "react";
import { RouteProp } from '@react-navigation/native';

const Button1 = () => {
    return <Button action={"primary"} variant={"solid"} size={"md"} isDisabled={true}>
        <ButtonText>
            Button
        </ButtonText>
    </Button>;
};
const Button2 = () => {
    return <Button action={"primary"} variant={"solid"} size={"md"} isDisabled={true}>
        <ButtonText>
            Button 2
        </ButtonText>
    </Button>;
};
interface Iuser {
  route: RouteProp<any, 'Iphone'>

}

const Tab = createBottomTabNavigator();

const Iphone: React.FC<Iuser> = ({ route }) => {
  const { email } = route.params;

  return (
    <>
      {console.log(email)}
      <Text>{email}</Text>
    </>
  );
};

export default Iphone;