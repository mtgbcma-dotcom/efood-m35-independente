import {
  Card,
  Image,
  Content,
  TopLine,
  Name,
  Rating,
  Star,
  Description,
  More
} from './styles'

const RestaurantCard = ({ restaurant }) => (
  <Card>
    <Image src={restaurant.imagem} alt={restaurant.nome} />

    <Content>
      <TopLine>
        <Name>{restaurant.nome}</Name>

        <Rating>
          {restaurant.avaliacao.toFixed(1)}
          <Star>★</Star>
        </Rating>
      </TopLine>

      <Description>{restaurant.descricao}</Description>

      <More to="/restaurante/2">
        Saiba mais
      </More>
    </Content>
  </Card>
)

export default RestaurantCard
