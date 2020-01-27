import Captain from "./images/captain2011.jpg"
import captainD from './images/captainDetail.jpg'
import CaptainMarvel from "./images/captainMarvel2019.jpg"
import marvelD from './images/captainMarvelDetail.jpg'
import Ironman1 from "./images/ironman2008.jpg"
import ironman1D from './images/ironman2008Detail.jpg'
import Hulk from "./images/Hulk.jpg"
import hulkD from './images/HulkDetail.jpg'
import Ironman2 from "./images/ironman2010.jpg"
import ironman2D from './images/ironman2010Detail.jpg'
import Thor1 from "./images/thor2011.jpg"
import thor1D from "./images/thorDetail.jpg"
import Avengers from "./images/avengers2012.jpg"
import avengersD from './images/avengers2012Detail.jpg'
import Ironman3 from "./images/ironman3.jpg"
import ironman3D from './images/ironman3Detail.jpg'
import Thor2 from "./images/thor2013.jpg"
import thor2D from './images/thor2013Detail.jpg'
import Wintersoldier from "./images/wintersoldier2014.jpg"
import wintersoldierD from './images/wintersoldier2014Detail.jpg'

export default function FilmDatas () {
    return [
      {id:'captain', title:"Captain America: The First Avenger", image: Captain, detailImg:captainD, rating:6.9, detail:'12A | 2h 4min '},
      {id:'captainmarvel', title:"Captain Marvel", image: CaptainMarvel, detailImg:marvelD, rating:6.9, detail:'' },
      {id:'ironman1', title:"Iron man", image: Ironman1, detailImg:ironman1D, rating:7.9, detail:'' },
      {id:'hulk', title:"The Incredible Hulk", image: Hulk, detailImg:hulkD, rating:6.7, detail:'' },
      {id:'ironman2', title:"Iron man 2", image: Ironman2, detailImg:ironman2D, rating:7.0, detail:'' },
      {id:'thor', title:"Thor", image: Thor1, detailImg:thor1D, rating:7.0, detail:'' },
      {id:'avengers', title:"Avengers Assemble", image: Avengers, detailImg:avengersD, rating:8.0, detail:'' },
      {id:'ironman3', title:"Iron man 3", image: Ironman3, detailImg:ironman3D, rating:7.2, detail:'' },
      {id:'thor2', title:"Thor: The Dark World", image: Thor2, detailImg:thor2D, rating:6.9, detail:'' },
      {id:'winstersoldier', title:"Captain America: The Winter Soldier", image: Wintersoldier, detailImg:wintersoldierD, rating:7.7, detail:'' }
    ]
  }
