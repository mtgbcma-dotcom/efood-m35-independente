import { useState } from 'react'
import { Link, Navigate, useParams } from 'react-router-dom'

import Footer from '../../components/Footer'
import MenuCard from '../../components/MenuCard'
import logo from '../../assets/logo.png'
import pattern from '../../assets/header-pattern.png'
import { profileRestaurant } from '../../data/restaurants'

import {
  ProfileHeader,
  HeaderContent,
  Back,
  Logo,
  CartCount,
  HeroImage,
  Main,
  MenuGrid
} from './styles'

const Restaurant = () => {
  const { id } = useParams()
  const [cartCount, setCartCount] = useState(0)

  if (!id) {
    return <Navigate to="/" replace />
  }

  return (
    <>
      <ProfileHeader $pattern={pattern}>
        <HeaderContent className="container">
          <Back to="/">Restaurantes</Back>
          <Logo src={logo} alt="efood" />

          <CartCount>
            {cartCount} produto(s) no carrinho
          </CartCount>
        </HeaderContent>
      </ProfileHeader>

      <HeroImage
        src={profileRestaurant.hero}
        alt="Italiana - La Dolce Vita Trattoria"
      />

      <Main>
        <MenuGrid className="container">
          {profileRestaurant.cardapio.map((item) => (
            <MenuCard
              key={item.id}
              item={item}
              onAdd={() => setCartCount((value) => value + 1)}
            />
          ))}
        </MenuGrid>
      </Main>

      <Footer />
    </>
  )
}

export default Restaurant
