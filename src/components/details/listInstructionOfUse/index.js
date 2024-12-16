import { Thermometer, Warning, Tag, CloudSun } from '@phosphor-icons/react'; // Supondo que você esteja usando ícones do Phosphor React

import { Container, Icon, Item, Text } from "./styles"


export function ListInstructionOfUse() {
    return (
      <Container>
        <Item>
          <Icon>
            <Tag size={24} weight="bold" />
          </Icon>
          <Text>Lavar cores escuras separadamente</Text>
        </Item>
        <Item>
          <Icon>
            <Thermometer size={24} weight="bold" />
          </Icon>
          <Text>Lavar à temperatura máxima de 30 graus</Text>
        </Item>
        <Item>
          <Icon>
            <Warning  size={24} weight="bold" />
          </Icon>
          <Text>Não usar alvejante a base de cloro</Text>
        </Item>
        <Item>
          <Icon>
            <Thermometer size={24} weight="bold" />
          </Icon>
          <Text>Passar a ferro com baixa temperatura</Text>
        </Item>
        <Item>
          <Icon>
            <CloudSun size={24} weight="bold" />
          </Icon>
          <Text>Secar à sombra</Text>
        </Item>
      </Container>
    );
  }