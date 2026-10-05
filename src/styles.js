import { createGlobalStyle } from 'styled-components'
export const colors={salmon:'#E66767',cream:'#FFF8F2',soft:'#FFEBD9',white:'#FFF'}
export const GlobalStyle=createGlobalStyle`
*{margin:0;padding:0;box-sizing:border-box}
body{background:${colors.cream};color:${colors.salmon};font-family:Arial,sans-serif}
a{color:inherit}.container{width:min(1024px,calc(100% - 32px));margin:0 auto}
`
