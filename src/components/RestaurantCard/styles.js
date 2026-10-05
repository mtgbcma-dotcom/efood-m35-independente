import styled from 'styled-components'
import { Link } from 'react-router-dom'

import { colors } from '../../styles'

export const Card = styled.article`
  overflow: hidden;
  border: 1px solid ${colors.salmon};
  background: ${colors.white};
`

export const Image = styled.img`
  width: 100%;
  height: 217px;
  object-fit: cover;
`

export const Content = styled.div`
  min-height: 210px;
  display: flex;
  flex-direction: column;
  padding: 8px;
`

export const TopLine = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 12px;
`

export const Name = styled.h2`
  font-size: 18px;
  line-height: 1.2;
  font-weight: 700;
`

export const Rating = styled.span`
  display: flex;
  align-items: center;
  gap: 6px;
  font-size: 18px;
  font-weight: 700;
  white-space: nowrap;
`

export const Star = styled.span`
  color: #ffb800;
  font-size: 20px;
`

export const Description = styled.p`
  margin-top: 16px;
  color: ${colors.salmon};
  font-size: 14px;
  line-height: 1.55;
`

export const More = styled(Link)`
  width: fit-content;
  margin-top: auto;
  padding: 7px 10px;
  background: ${colors.salmon};
  color: ${colors.white};
  text-decoration: none;
  font-size: 14px;
  font-weight: 700;
`
