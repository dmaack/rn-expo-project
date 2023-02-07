import styled from "styled-components/native";
import { View, Image } from "react-native";
import { Card } from "react-native-paper";

export const RestaurantCard = styled(Card)`
  background-color: ${(props) => props.theme.colors.bg.primary};
  border-radius: ${(props) => props.theme.space[1]};
`;
export const RestaurantCardCover = styled(Card.Cover)`
  background-color: ${(props) => props.theme.colors.bg.primary};
  padding: ${(props) => props.theme.space[3]};
`;

export const RatingContainer = styled(View)`
  flex-direction: row;
  padding-top: ${(props) => props.theme.space[1]};
  padding-bottom: ${(props) => props.theme.space[1]};
`;

export const RatingAndOpenContainer = styled(View)`
  flex-direction: row;
  align-items: center;
`;
export const SectionEnd = styled(View)`
  flex: 1;
  justify-content: flex-end;
  flex-direction: row;
`;

export const Icon = styled(Image)`
  width: 15px
  height: 15px;
`;
