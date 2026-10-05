import { useParams,Navigate,Link } from 'react-router-dom'
import Footer from '../../components/Footer'
import { restaurants } from '../../data/restaurants'
import { Header,Hero,Menu,Card } from './styles'
export default function Restaurant(){
 const {id}=useParams(); const r=restaurants.find(x=>String(x.id)===id); if(!r)return <Navigate to="/" replace/>
 return <><Header><div className="container"><Link to="/">Restaurantes</Link><strong>efood</strong></div></Header><Hero $img={r.imagem}><div className="container"><span>{r.tipo}</span><h1>{r.nome}</h1></div></Hero><Menu className="container">{r.cardapio.map(d=><Card key={d.id}><img src={d.foto}/><h2>{d.nome}</h2><p>{d.descricao}</p><button>Adicionar ao carrinho</button></Card>)}</Menu><Footer/></>
}
