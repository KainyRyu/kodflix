import Captain from "./images/captain2011.jpg"
import CaptainMarvel from "./images/captainMarvel2019.jpg"
import Ironman1 from "./images/ironman2008.jpg"
import Hulk from "./images/incrediblehulk2008.jpg"
import Ironman2 from "./images/ironman2010.jpg"
import Thor1 from "./images/thor2011.jpg"
import Avengers from "./images/avengers2012.jpg"
import Ironman3 from "./images/ironman3.jpg"
import Thor2 from "./images/thor2013.jpg"
import Wintersoldier from "./images/wintersoldier2014.jpg"

export default function FilmDetails () {
    return [
      {titleUrl:'captain', title:"Captain America: The First Avenger", image: Captain, rating:6.9, detail:'12A | 2h 4min '},
      {titleUrl:'captainmarvel', title:"Captain Marvel", image: CaptainMarvel, rating:6.9, detail:'' },
      {titleUrl:'ironman1', title:"Iron man", image: Ironman1, rating:7.9, detail:'' },
      {titleUrl:'hulk', title:"The Incredible Hulk", image: Hulk, rating:6.7, detail:'' },
      {titleUrl:'ironman2', title:"Iron man 2", image: Ironman2, rating:7.0, detail:'' },
      {titleUrl:'thor', title:"Thor", image: Thor1, rating:7.0, detail:'' },
      {titleUrl:'avengers', title:"Avengers Assemble", image: Avengers, rating:8.0, detail:'' },
      {titleUrl:'ironman3', title:"Iron man 3", image: Ironman3, rating:7.2, detail:'' },
      {titleUrl:'thor2', title:"Thor: The Dark World", image: Thor2, rating:6.9, detail:'' },
      {titleUrl:'winstersoldier', title:"Captain America: The Winter Soldier", image: Wintersoldier, rating:7.7, detail:'' }
    ]
  }