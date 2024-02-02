import { Center, Button, ButtonText, ButtonIcon, ButtonGroup, Icon, AddIcon, InfoIcon, ButtonSpinner, ArrowUpIcon, HStack, ThreeDotsIcon, Input, InputField } from '@gluestack-ui/themed';
import React from 'react'; import { EditIcon, ArrowLeftIcon } from 'lucide-react-native';
import { Box, GluestackUIProvider, Heading, Link, Text, VStack, Image } from '@gluestack-ui/themed';
import { ScrollView } from 'react-native';
import Gradient from './assets/Icons/Gradient';
import DocumentData from './assets/Icons/DocumentData';
import LightBulbPerson from './assets/Icons/LightbulbPerson';
import Rocket from './assets/Icons/Rocket';
import Logo from './assets/Icons/Logo';
import { config } from './config/gluestack-ui.config';
import Button_lg from "./components/Button_lg"



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
          <Text color="$white" fontWeight="$normal">
            Desarrollo de aplicaciones multidispositivos
          </Text>
          <Text color="$white" fontWeight="$medium" ml="$2">
            8vo semestre
          </Text>
        </Box>
        <Box justifyContent="center" alignItems="center">
          <Logo />
        </Box>
        <Box sx={{
          '@base': {
            flexDirection: 'column'
          },
          '@md': {
            flexDirection: 'row'
          }
        }}>
          <Box maxWidth="$64" borderColor="$indigo600" borderRadius="$lg" borderWidth="$1" my="$4" overflow="hidden" $base-mx="$5" $dark-bg="$backgroundDark900" $dark-borderColor="$borderDark800" bg="$amber100" >
            <Box>
              <Image h={150} width="100%" source={{
                uri: "https://images.unsplash.com/photo-1549888834-3ec93abae044?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2940&q=80"
              }} />
            </Box>
            <VStack px="$6" pt="$4" pb="$6">
              <Text $dark-color="$textLight200" fontSize="$sm" my="$1.5">
                August 16, 2023
              </Text>
              <Heading $dark-color="$textLight200" size="sm">
                Fresh Orange
              </Heading>
              <Text my="$1.5" $dark-color="$textLight200" fontSize="$xs">
                Oranges are a great source of vitamin C, which is essential for a
                healthy immune system. Oranges are a great source of vitamin C, which
                is important for maintaining a healthy immune system.
              </Text>
              <Text $dark-color="$textLight200" my="$1.5" fontSize="$xs" isTruncated="true">
                Vitamin C also helps with the absorption of iron and the production of
                collagen, which supports healthy skin, teeth, and bones.
              </Text>
              <Link href="https://gluestack.io/" isExternal>
                <Text fontSize="$sm" color="$pink600">
                  Find out more
                </Text>
                <br />

                <Button
                  size="lg"
                  p="$3"
                  bg="$green700"
                  $hover-bg="$green300"
                  $active-bg="$green900"
                  $_txt_hover_color="$white"
                  borderRadius={25}
                >
                  <ButtonText>
                    Button
                  </ButtonText>
                </Button>
                <br />
                <Button_lg />
                <br />
                <Button_lg />
                <br />
                <Button_lg />
              </Link>
            </VStack>
          </Box>


        </Box>
      </Box>
    </ScrollView>
  </Box>;
};