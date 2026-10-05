import styled from 'styled-components'
import { Link } from 'react-router-dom'
import { colors } from '../../styles'
export const Card=styled.article`border:1px solid ${colors.salmon};background:white`
export const Image=styled.img`width:100%;height:220px;object-fit:cover`
export const Content=styled.div`padding:12px;min-height:190px;display:flex;flex-direction:column;gap:12px`
export const Button=styled(Link)`margin-top:auto;width:max-content;padding:8px 12px;background:${colors.salmon};color:white;text-decoration:none`
