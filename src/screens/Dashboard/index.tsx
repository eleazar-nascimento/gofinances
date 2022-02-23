import React from "react";
import { getBottomSpace } from "react-native-iphone-x-helper";
import { HighlightCard } from "../../components/HighlightCard";
import { TransactionsCard } from "../../components/TransactionCard";

import {
  Container,
  Header,
  UserWrapper,
  UserInfo,
  Photo,
  User,
  UserGretting,
  UserName,
  Icon,
  HighlightCards,
  Transactions,
  Title,
  TransactionsList,
} from "./styles";

export function Dashboard() {
  const data = [
    {
      title: "Desenvolvimento de site",
      amount: "R$ 12.000,00",
      category: {
        name: "Vendas",
        icon: "dolar-sign",
      },
      date: "23/02/2022",
    },
    {
      title: "Desenvolvimento de site",
      amount: "R$ 12.000,00",
      category: {
        name: "Vendas",
        icon: "dolar-sign",
      },
      date: "23/02/2022",
    },
    {
      title: "Desenvolvimento de site",
      amount: "R$ 12.000,00",
      category: {
        name: "Vendas",
        icon: "dolar-sign",
      },
      date: "23/02/2022",
    },
  ];

  return (
    <Container>
      <Header>
        <UserWrapper>
          <UserInfo>
            <Photo
              source={{ uri: "https://github.com/eleazar-nascimento.png" }}
            />
            <User>
              <UserGretting>Olá,</UserGretting>
              <UserName>Eleazar</UserName>
            </User>
          </UserInfo>
          <Icon name="power" />
        </UserWrapper>
      </Header>
      <HighlightCards>
        <HighlightCard
          type="up"
          title="Entradas"
          amount="R$ 17.400,00"
          lastTransaction="Última entrada dia 13 de abril"
        />
        <HighlightCard
          type="down"
          title="Saídas"
          amount="R$ 1.259,00"
          lastTransaction="Última saída dia 03 de abril"
        />
        <HighlightCard
          type="total"
          title="Total"
          amount="R$ 16.141,00"
          lastTransaction="01 à 16 de abril"
        />
      </HighlightCards>

      <Transactions>
        <Title>Listagem</Title>
        <TransactionsList 
          data={data}
          renderItem={({ item }) => 
          <TransactionsCard data={item} />}
          showsVerticalScrollIndicator={false}
          contentContainerStyle={{
            paddingBottom: getBottomSpace()
          }}
        />

      </Transactions>
    </Container>
  );
}
