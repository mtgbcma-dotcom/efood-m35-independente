import {
  Card,
  Image,
  Title,
  Description,
  AddButton
} from './styles'

const MenuCard = ({ item, onAdd }) => (
  <Card>
    <Image src={item.imagem} alt={item.nome} />
    <Title>{item.nome}</Title>
    <Description>{item.descricao}</Description>

    <AddButton type="button" onClick={onAdd}>
      Adicionar ao carrinho
    </AddButton>
  </Card>
)

export default MenuCard
