import styled from 'styled-components'
import { colors } from '../../styles'
export const Header=styled.header`background:${colors.soft};>div{min-height:140px;display:flex;justify-content:space-between;align-items:center}a{text-decoration:none;font-weight:900}strong{font-size:38px}`
export const Hero=styled.section`height:280px;background:linear-gradient(#0008,#0008),url('${p=>p.$img}') center/cover;color:white;>div{height:100%;padding:24px 0;display:flex;flex-direction:column;justify-content:space-between}`
export const Menu=styled.section`padding-top:56px;display:grid;grid-template-columns:repeat(3,1fr);gap:32px;@media(max-width:800px){grid-template-columns:1fr}`
export const Card=styled.article`padding:8px;background:${colors.salmon};color:white;display:flex;flex-direction:column;min-height:390px;img{height:170px;object-fit:cover}h2,p{margin-top:10px}button{margin-top:auto;padding:10px;border:0}`
