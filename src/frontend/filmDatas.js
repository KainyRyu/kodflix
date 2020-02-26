import Captain from "./images/captain2011.jpg"
import CaptainMarvel from "./images/captainMarvel2019.jpg"
import Ironman1 from "./images/ironman2008.jpg"
import Hulk from "./images/Hulk.jpg"
import Ironman2 from "./images/ironman2010.jpg"
import Thor1 from "./images/thor2011.jpg"
import Avengers from "./images/avengers2012.jpg"
import Ironman3 from "./images/ironman3.jpg"
import Thor2 from "./images/thor2013.jpg"
import Wintersoldier from "./images/wintersoldier2014.jpg"

export default function FilmDatas () {
    return [
      {id:'captain', title:"Captain America: The First Avenger", 
      image: Captain, rating:6.9, 
      detail:'12A | 2h 4min | Action, Adventure, Sci-Fi | 29 July 2011 (UK)', 
      },
      {id:'captainmarvel', title:"Captain Marvel", image: CaptainMarvel, rating:6.9, 
      detail:'12A | 2h 3min | Action, Adventure, Sci-Fi | 8 March 2019 (UK)', 
      },
      {id:'ironman1', title:"Iron man", image: Ironman1, rating:7.9, 
      detail:'12A | 2h 6min | Action, Adventure, Sci-Fi | 2 May 2008 (UK)', 
      },
      {id:'hulk', title:"The Incredible Hulk", image: Hulk,  rating:6.7, 
      detail:'12A | 1h 52min | Action, Adventure, Sci-Fi | 13 June 2008 (UK)', 
      },
      {id:'ironman2', title:"Iron man 2", image: Ironman2, rating:7.0, 
      detail:'12A | 2h 4min | Action, Adventure, Sci-Fi | 30 April 2010 (UK)', 
      },
      {id:'thor', title:"Thor", image: Thor1, rating:7.0, 
      detail:'12A | 1h 55min | Action, Adventure, Fantasy | 27 April 2011 (UK)' , 
      },
      {id:'avengers', title:"Avengers Assemble", image: Avengers, rating:8.0, 
      detail:'12A | 2h 23min | Action, Adventure, Sci-Fi | 26 April 2012 (UK)', 
      },
      {id:'ironman3', title:"Iron man 3", image: Ironman3, rating:7.2, 
      detail:'12A | 2h 10min | Action, Adventure, Sci-Fi | 25 April 2013 (UK)', 
      },
      {id:'thor2', title:"Thor: The Dark World", image: Thor2, rating:6.9, 
      detail:'12A | 1h 52min | Action, Adventure, Fantasy | 30 October 2013 (UK)', 
      },
      {id:'wintersoldier', title:"Captain America: The Winter Soldier", image: Wintersoldier, rating:7.7
      }
    ]
  }
