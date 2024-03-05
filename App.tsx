import { FormControl, FormControlLabel, FormControlLabelText, FormControlHelper, FormControlHelperText, FormControlError, FormControlErrorIcon, FormControlErrorText, Input, InputField, Radio, RadioGroup, RadioIcon, RadioIndicator, RadioLabel, Button, ButtonText, Checkbox, CheckboxGroup, CheckboxIndicator, CheckboxIcon, CheckboxLabel, Textarea, TextareaInput, SelectTrigger, SelectInput, SelectIcon, SelectPortal, SelectBackdrop, SelectContent, SelectDragIndicatorWrapper, SelectDragIndicator, SelectItem, Slider, SliderTrack, SliderFilledTrack, SliderThumb, Switch, Modal, ModalBackdrop, ModalContent, ModalHeader, ModalCloseButton, ModalBody, ModalFooter, HStack, Center, Icon, CircleIcon, CheckIcon, AlertCircleIcon, ChevronDownIcon } from '@gluestack-ui/themed';
import { NavigationContainer, useNavigation } from '@react-navigation/native';
import { useState } from 'react';
//import { config } from '@gluestack-ui/config';
import { Box, GluestackUIProvider, Text, Image, VStack, Link, Heading, Select } from '@gluestack-ui/themed';
import { ScrollView } from 'react-native';
import Gradient from './assets/Icons/Gradient';
import DocumentData from './assets/Icons/DocumentData';
import LightBulbPerson from './assets/Icons/LightbulbPerson';
import Rocket from './assets/Icons/Rocket';
import Logo from './assets/Icons/Logo';
import { config } from './config/gluestack-ui.config';
import React from 'react';
import BackGround_green from './Components/BackGround_green';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Iphone from './Components/Iphone';
import { View } from 'react-native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import drawer1 from './Components/drawer1';


const Drawer = createDrawerNavigator();

export default function App() {
  return <NavigationContainer>
    <GluestackUIProvider config={config}>
      <Drawer.Navigator>
        <Drawer.Screen name="Home" component={Home} />
        <Drawer.Screen name="IPhone" component={Iphone}/>
      </Drawer.Navigator>
    </GluestackUIProvider>;
  </NavigationContainer>
}

const Home = () => {
  return <Container/>
}

const Container = () => {
  const navigation = useNavigation();
  const [formData, setData] = React.useState({});
  const [errors, setErrors] = React.useState({});

  let regex_email = /[a-zA-Z0-9_]+([.][a-zA-Z0-9_]+)@[a-zA-Z0-9_]+([.][a-zA-Z0-9_]+)[.][a-zA-Z]{2,5}$/;
  const digit = /[0-9]/;
  const upperCase = /[A-Z]/;
  const lowerCase = /[a-z]/;
  const nonAlphanumeric = /[^0-9A-Za-z]/;
  const isStrongPassword = password => [digit, upperCase, lowerCase, nonAlphanumeric].every(re => re.test(password)) && password.length >= 8 && password.length <= 32;
  const validate = () => {
    setErrors({});
    console.log('email', formData.email);
    console.log('password', formData.password);
    if (regex_email.test(formData.email) != false) {
      console.log('regex_email', formData.email);
      setErrors({
        ...errors,
        email: 'Email.is not valid'
      });
      return false;
    }
    if (!isStrongPassword(formData.password)) {
      setErrors({
        ...errors,
        password: 'Password is not valid'
      });
      return false;
    }
    return true;
  };
  const onSubmit = () => {
    if (validate()) {
      navigation.navigate('IPhone', { email: formData.email });
    } else {
      console.log('Validation Failed', errors);
    }
  };
  return <VStack>
    <Box>
      <FormControl isInvalid={false} size={"md"} isDisabled={false} isRequired={true}>
        <FormControlLabel>
          <FormControlLabelText>Email</FormControlLabelText>
        </FormControlLabel>
        <Input>
          <InputField type="text" defaultValue="andres@gmail.com" placeholder="email" onChangeText={value => setData({
            ...formData,
            email: value
          })} />
        </Input>

        <FormControlHelper>
          <FormControlHelperText>
            Must be atleast @ character.
          </FormControlHelperText>
        </FormControlHelper>

        <FormControlError>
          <FormControlErrorIcon as={AlertCircleIcon} />
          <FormControlErrorText>
            Email invalid.
          </FormControlErrorText>
        </FormControlError>
      </FormControl>

      <FormControl isInvalid={false} size={"md"} isDisabled={false} isRequired={true}>
        <FormControlLabel>
          <FormControlLabelText>Password</FormControlLabelText>
        </FormControlLabel>
        <Input>
          <InputField type="password" defaultValue="12345" placeholder="password" onChangeText={value => setData({
            ...formData,
            password: value
          })} />
        </Input>

        <FormControlHelper>
          <FormControlHelperText>
            Must be atleast 6 characters.
          </FormControlHelperText>
        </FormControlHelper>

        <FormControlError>
          <FormControlErrorIcon as={AlertCircleIcon} />
          <FormControlErrorText>
            Atleast 6 characters are required.
          </FormControlErrorText>
        </FormControlError>
      </FormControl>
    </Box>

    <Button action={"primary"} variant={"solid"} size={"lg"}
      isDisabled={false} bg="$blue" onPress={onSubmit}>
      <ButtonText>
        Button
      </ButtonText>
    </Button>

  </VStack>;
};