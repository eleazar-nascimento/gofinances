import React from "react";
import { 
    Container,
    Header,
    Title,
    Icon,
    Footer,
    Amount,
    LastTransaction,
} from "./styles";

export function HighlightCard() {
  return (
    <Container>
      <Header>
        <Title>Entradas</Title>
        <Icon name="arrow-up-circle" />
      </Header>
      <Footer>
        <Amount>R$ 17.400,00</Amount>
        <LastTransaction>ultima entrada dia 14 de abril</LastTransaction>
      </Footer>
    </Container>
  );
}