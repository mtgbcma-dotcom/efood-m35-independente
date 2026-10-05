import styled from 'styled-components'
import { Link } from 'react-router-dom'
import { colors } from '../../styles'
export const Hero=styled.header`background:${colors.soft};min-height:360px`
export const Brand=styled(Link)`display:block;padding-top:40px;text-align:center;text-decoration:none;font-size:42px;font-weight:900;letter-spacing:-3px`
export const Title=styled.h1`margin-top:180px;text-align:center;font-size:36px`
