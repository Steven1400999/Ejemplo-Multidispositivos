import { FormControlLabel, FormControlLabelText, FormControlHelper, FormControlHelperText, FormControlError, FormControlErrorIcon, FormControlErrorText, Radio, RadioGroup, RadioIcon, RadioIndicator, RadioLabel, Checkbox, CheckboxGroup, CheckboxIndicator, CheckboxIcon, CheckboxLabel, Textarea, TextareaInput, Select, SelectTrigger, SelectInput, SelectIcon, SelectPortal, SelectBackdrop, SelectContent, SelectDragIndicatorWrapper, SelectDragIndicator, SelectItem, Slider, SliderTrack, SliderFilledTrack, SliderThumb, Switch, Modal, ModalBackdrop, ModalContent, ModalHeader, ModalCloseButton, ModalBody, ModalFooter, CircleIcon, CheckIcon, AlertCircleIcon, ChevronDownIcon } from '@gluestack-ui/themed';


import { Center, Button, ButtonText, ButtonIcon, ButtonGroup, Icon, AddIcon, InfoIcon, ButtonSpinner, ArrowUpIcon, HStack, ThreeDotsIcon, Input, InputField } from '@gluestack-ui/themed';
import React from 'react';
import { EditIcon, ArrowLeftIcon } from 'lucide-react-native';
import { Box, GluestackUIProvider, Heading, Link, Text, VStack, Image } from '@gluestack-ui/themed';
import { ScrollView } from 'react-native';
import Gradient from './assets/Icons/Gradient';
import DocumentData from './assets/Icons/DocumentData';
import LightBulbPerson from './assets/Icons/LightbulbPerson';
import Rocket from './assets/Icons/Rocket';
import Logo from './assets/Icons/Logo';
import { config } from './config/gluestack-ui.config';
import Button_lg from "./components/Button_lg";
import { FormControl } from '@gluestack-ui/themed';
export default function App() {
  return <GluestackUIProvider config={config}>
    <Home />
  </GluestackUIProvider>;
}
const Home = () => {
  return <Container />;
};
const FeatureCard = ({
  iconSvg: IconSvg,
  name,
  desc
}: any) => {
  return <Box flexDirection="column" borderWidth={1} borderColor="$borderDark700" sx={{
    _web: {
      flex: 1
    }
  }} m="$2" p="$4" rounded="$md">
    <Box alignItems="center" display="flex" flexDirection="row">
      {/* <Image source={iconSvg} alt="document" width={22} height={22} /> */}
      <Text>
        <IconSvg />
      </Text>
      <Text fontSize={22} color="$white" fontWeight="500" ml="$2">
        {name}
      </Text>
    </Box>
    <Text color="$textDark400" mt="$2">
      {desc}
    </Text>
  </Box>;
};
const Container = () => {
  return <Box flex={1} backgroundColor="$black">
    <ScrollView style={{
      height: '100%'
    }} contentContainerStyle={{
      flexGrow: 1
    }}>
      <Box position="absolute" sx={{
        '@base': {
          h: 500,
          w: 500
        },
        '@lg': {
          h: 700,
          w: 700
        }
      }}>
        <Gradient />
      </Box>
      <Box height="60%" sx={{
        '@base': {
          my: '$16',
          mx: '$5',
          height: '80%'
        },
        '@lg': {
          my: '$24',
          mx: '$32'
        }
      }} justifyContent="space-between" alignItems="center">
        <Box bg="#64748B33" py="$2" px="$6" rounded="$full" alignItems="center" marginTop={20} sx={{
          '@base': {
            flexDirection: 'column'
          },
          '@sm': {
            flexDirection: 'row'
          },
          '@md': {
            alignSelf: 'flex-start'
          }
        }}>

          <VStack space={"lg"} sx={{
            justifyContent: 'center',
            alignItems: 'center'
          }} reversed={false} space={"lg"}>

            <Box>

              <FormControl isInvalid={false} size={"lg"} isDisabled={false} isRequired={false}>
                <FormControlLabel>
                  <FormControlLabelText color='$white'>Email</FormControlLabelText>
                </FormControlLabel>
                <Input  $focus-borderColor='$green500'  >
                  <InputField type="text" defaultValue="12345" placeholder="email" />
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

            <Box sx={{
              w: 100,
              h: 100,
              rounded: '$sm',
              bg: '$blue300'
            }} />
            <Box sx={{
              w: 100,
              h: 100,
              rounded: '$sm',
              bg: '$blue400'
            }} />
            <Box sx={{
              w: 100,
              h: 100,
              rounded: '$sm',
              bg: '$blue500'
            }} />
            <Box sx={{
              w: 100,
              h: 100,
              rounded: '$sm',
              bg: '$blue600'
            }} />
          </VStack>

          <br />


        </Box>
      </Box>
    </ScrollView>
  </Box>;
};