import { Card,Image,Content,Button } from './styles'
export default function RestaurantCard({r}){return <Card><Image src={r.imagem} alt={r.nome}/><Content><h2>{r.nome}</h2><strong>{r.avaliacao.toFixed(1)} ★</strong><p>{r.descricao}</p><Button to={`/restaurante/${r.id}`}>Saiba mais</Button></Content></Card>}
