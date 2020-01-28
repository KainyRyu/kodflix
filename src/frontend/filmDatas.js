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
      {id:'captain', title:"Captain America: The First Avenger", image: Captain, detailImg:captainD, rating:6.9, detail:'12A | 2h 4min | Action, Adventure, Sci-Fi | 29 July 2011 (UK)', synopsis:'Steve Rogers, a rejected military soldier transforms into Captain America after taking a dose of a "Super-Soldier serum". But being Captain America comes at a price as he attempts to take down a war monger and a terrorist organization.'},
      {id:'captainmarvel', title:"Captain Marvel", image: CaptainMarvel, detailImg:marvelD, rating:6.9, detail:'12A | 2h 3min | Action, Adventure, Sci-Fi | 8 March 2019 (UK)', synopsis:'Carol Danvers becomes one of the universe\'s most powerful heroes when Earth is caught in the middle of a galactic war between two alien races.'},
      {id:'ironman1', title:"Iron man", image: Ironman1, detailImg:ironman1D, rating:7.9, detail:'12A | 2h 6min | Action, Adventure, Sci-Fi | 2 May 2008 (UK)', synopsis:'After being held captive in an Afghan cave, billionaire engineer Tony Stark creates a unique weaponized suit of armor to fight evil.'},
      {id:'hulk', title:"The Incredible Hulk", image: Hulk, detailImg:hulkD, rating:6.7, detail:'12A | 1h 52min | Action, Adventure, Sci-Fi | 13 June 2008 (UK)', synopsis:'Bruce Banner, a scientist on the run from the U.S. Government, must find a cure for the monster he turns into, whenever he loses his temper.'},
      {id:'ironman2', title:"Iron man 2", image: Ironman2, detailImg:ironman2D, rating:7.0, detail:'12A | 2h 4min | Action, Adventure, Sci-Fi | 30 April 2010 (UK)', synopsis:'With the world now aware of his identity as Iron Man, Tony Stark must contend with both his declining health and a vengeful mad man with ties to his father\'s legacy.'},
      {id:'thor', title:"Thor", image: Thor1, detailImg:thor1D, rating:7.0, detail:'12A | 1h 55min | Action, Adventure, Fantasy | 27 April 2011 (UK)' , synopsis:'The powerful but arrogant god Thor is cast out of Asgard to live amongst humans in Midgard (Earth), where he soon becomes one of their finest defenders.'},
      {id:'avengers', title:"Avengers Assemble", image: Avengers, detailImg:avengersD, rating:8.0, detail:'12A | 2h 23min | Action, Adventure, Sci-Fi | 26 April 2012 (UK)', synopsis:'Earth\'s mightiest heroes must come together and learn to fight as a team if they are going to stop the mischievous Loki and his alien army from enslaving humanity.'},
      {id:'ironman3', title:"Iron man 3", image: Ironman3, detailImg:ironman3D, rating:7.2, detail:'12A | 2h 10min | Action, Adventure, Sci-Fi | 25 April 2013 (UK)', synopsis:'When Tony Stark\'s world is torn apart by a formidable terrorist called the Mandarin, he starts an odyssey of rebuilding and retribution.'},
      {id:'thor2', title:"Thor: The Dark World", image: Thor2, detailImg:thor2D, rating:6.9, detail:'12A | 1h 52min | Action, Adventure, Fantasy | 30 October 2013 (UK)', synopsis:'When the Dark Elves attempt to plunge the universe into darkness, Thor must embark on a perilous and personal journey that will reunite him with doctor Jane Foster.'},
      {id:'winstersoldier', title:"Captain America: The Winter Soldier", image: Wintersoldier, detailImg:wintersoldierD, rating:7.7, detail:'12A | 2h 16min | Action, Adventure, Sci-Fi | 26 March 2014 (UK)', synopsis:'As Steve Rogers struggles to embrace his role in the modern world, he teams up with a fellow Avenger and S.H.I.E.L.D agent, Black Widow, to battle a new threat from history: an assassin known as the Winter Soldier.' }
    ]
  }
