import Header from '../../components/Header'
import Footer from '../../components/Footer'
import RestaurantCard from '../../components/RestaurantCard'
import { restaurants } from '../../data/restaurants'
import { Main,Grid } from './styles'
export default function Home(){return <><Header/><Main><Grid className="container">{restaurants.map(r=><RestaurantCard key={r.id} r={r}/>)}</Grid></Main><Footer/></>}
