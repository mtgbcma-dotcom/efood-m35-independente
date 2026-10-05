import sushiImage from '../assets/sushi-card.jpg'
import pastaImage from '../assets/pasta-card.jpg'
import pizzaImage from '../assets/pizza.jpg'
import profileHero from '../assets/hero-profile.jpg'

const sushiDescription =
  'Peça já o melhor da culinária japonesa no conforto da sua casa! Sushis frescos, sashimis deliciosos e pratos quentes irresistíveis. Entrega rápida, embalagens cuidadosas e qualidade garantida. Experimente o Japão sem sair do lar com nosso delivery!'

const italianDescription =
  'A La Dolce Vita Trattoria leva a autêntica cozinha italiana até você! Desfrute de massas caseiras, pizzas deliciosas e risotos incríveis, tudo no conforto do seu lar. Entrega rápida, pratos bem embalados e sabor inesquecível. Peça já!'

const pizzaDescription =
  'A clássica Marguerita: molho de tomate suculento, mussarela derretida, manjericão fresco e um toque de azeite. Sabor e simplicidade!'

export const restaurants = [
  {
    id: 1,
    nome: 'Hioki Sushi',
    avaliacao: 4.9,
    imagem: sushiImage,
    descricao: sushiDescription
  },
  ...Array.from({ length: 5 }, (_, index) => ({
    id: index + 2,
    nome: 'La Dolce Vita Trattoria',
    avaliacao: 4.6,
    imagem: pastaImage,
    descricao: italianDescription
  }))
]

export const profileRestaurant = {
  id: 2,
  nome: 'La Dolce Vita Trattoria',
  categoria: 'Italiana',
  hero: profileHero,
  cardapio: Array.from({ length: 6 }, (_, index) => ({
    id: index + 1,
    nome: 'Pizza Marguerita',
    descricao: pizzaDescription,
    imagem: pizzaImage
  }))
}
