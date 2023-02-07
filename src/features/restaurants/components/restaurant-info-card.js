import React from "react";
import { Card } from "react-native-paper";
import styled from "styled-components/native";

const Title = styled.Text`
  font-family: ${(props) => props.theme.fonts.heading};
  font-size: ${(props) => props.theme.fontSizes.body};
`;

const Address = styled.Text`
  font-family: ${(props) => props.theme.fonts.body};
  font-size: ${(props) => props.theme.fontSizes.caption};
`;

const RestaurantCard = styled(Card)`
  background-color: ${(props) => props.theme.colors.bg.primary};
  border-radius: ${(props) => props.theme.space[1]};
`;
const RestaurantCardCover = styled(Card.Cover)`
  background-color: ${(props) => props.theme.colors.bg.primary};
  padding: ${(props) => props.theme.space[3]};
`;

export const RestaurantInfoCard = ({ restaurant = {} }) => {
  const {
    name = "Some Restaurant",
    icon = null,
    photos = [
      "https://www.wbcsd.org/var/site/storage/images/media/images/fresh_pa/80809-2-eng-GB/FRESH_PA_i1140.jpg",
    ],
    address = "12345 S Randome St",
    isOpenNow = true,
    rating = 4,
    isClosedTemporarily = false,
  } = restaurant;
  return (
    <RestaurantCard elevation={5}>
      <RestaurantCardCover key={name} source={{ uri: photos[0] }} />
      <Card.Content>
        <Title variant="titleLarge">{name}</Title>
        <Address variant="titleLarge">{address}</Address>
      </Card.Content>
    </RestaurantCard>
  );
};
