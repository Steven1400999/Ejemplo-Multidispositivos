import { Center, Button, ButtonText, ButtonIcon, ButtonGroup, Icon, AddIcon, InfoIcon, ButtonSpinner, ArrowUpIcon, HStack, ThreeDotsIcon, Input, InputField } from '@gluestack-ui/themed';
import React from 'react';


export default function Boton() {
    return (
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

    )
      
  }