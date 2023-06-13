

import { useState } from "react";
import "./App.css";
import ListMovies from "./Components/ListMovies";
import MovieCard from "./Components/MovieCard";
import AddMovie from "./Components/AddMovie";
import { Button } from "bootstrap";
import Search from "./Components/Search";
import Rate from "./Components/Rate";
import { Routes, Route } from "react-router-dom";
import NavBar from "./Components/NavBar";
import Dashboard from "./Components/Dashboard";
import MovieDetails from "./Components/MovieDetails";

function App() {
  //******This is the Api *******/
  const [Movies, setMovies] = useState([
    {
      _id: "5fedeef47c0ffe00176db1ca",
      title: "kingdom of heaven",
      rate: 5,
      date: "2005",
      imgUrl:
        "https://resizing.flixster.com/Xe5VDhfnmDc_UHDYT_d_1QwIDZA=/206x305/v2/https://flxt.tmsimg.com/assets/p35756_p_v8_ap.jpg",
      description:
        "Quelque part dans le royaume de France en 1186, Balian, jeune forgeron accablé par l'existence, apprend qu'il est le fils de Godefroy d'Ibelin. Mais cette noble lignée le contraint de se rendre en Terre sainte pour défendre Jérusalem reconquise. Une fois en Palestine, il s'initie à l'art de la guerre et aux intrigues politiques, grâce à l'aide de Tiberias, le puissant conseiller militaire du roi.",
      category: "Guerre/Aventure",
      __v: 0,
    },
    {
      _id: "5fedefe47c0ffe00176db1cb",
      title: "braveheart",
      rate: 5,
      date: "1995",
      imgUrl:
        "https://fr.web.img4.acsta.net/medias/nmedia/18/73/51/89/19209164.jpg",
      description:
        "Au XIIIe siècle, le jeune William Wallace revient en Écosse après plusieurs années d'exil. Il épouse en secret sa bien-aimée Murron, pour éviter de se plier au droit de cuissage imposé par le roi d'Angleterre, Edward 1er. Leur ruse est cependant découverte et Murron est exécutée.",
      category: "Guerre/Drame",
      __v: 0,
    },
    {
      _id: "5fedf02d7c0ffe00176db1cc",
      title: "Pearl Harbor",
      rate: 4,
      date: "2001",
      imgUrl:
      "https://www.ecranlarge.com/media/cache/1600x1200/uploads/image/001/121/xp2df0rcgycm2pjssv4ebvrvhe9-849.jpg",
      description:
      "Amis depuis la plus tendre enfance, Rafe McCawley et Danny Walker sont deux brillants pilotes de l'armée de l'air américaine. La Seconde Guerre mondiale a commencé, mais les États-Unis n'ont pas encore engagé les hostilités. Rafe succombe bientôt au charme d'Evelyn Johnson, une jeune infirmière. C'est le coup de foudre, mais ce dernier part combattre aux côtés des Britanniques. Evelyn et Danny sont, quant à eux, transférés sur la base américaine de Pearl Harbor. ",
      category: "Guerre/Action ",
      __v: 0,
    },
    {
      _id: "5fedf0647c0ffe00176db1cd",
      title: "ocean's thirteen",
      rate: 4,
      date: "2007",
      imgUrl:
        "https://upload.wikimedia.org/wikipedia/en/c/c1/Oceans13Poster1.jpg",
      description:
        "Douce vengeance sous le ciel de Las Vegas. Danny Ocean et sa bande ne pouvaient avoir qu'un seul motif pour tenter leur braquage le plus audiacieux à ce jour : sauver un des leurs. Mais la chance ne suffit pas toujours lorsque l'on veut faire sauter The Bank. Le cruel propriétaire de casino Willy Bank ne s'attendait pas à une telle riposte lorsqu'il trahit en envoya l'ami et mentor de Danny, Reuben Tishkoff.",
      category: "Comédie/Policier",
      __v: 0,
    },
    {
      _id: "5fedf0947c0ffe00176db1ce",
      title: "game of thrones",
      rate: 3,
      date: "2011",
      imgUrl:
        "https://fr.web.img3.acsta.net/c_310_420/pictures/23/01/03/14/13/0717778.jpg",
      description:
        "Neuf familles nobles rivalisent pour le contrôle du Trône de Fer dans les sept royaumes de Westeros. Pendant ce temps, des anciennes créatures mythiques oubliées reviennent pour faire des ravages.",
      category: "Drama",
      __v: 0,
    },
    {
      _id: "5fedf0cf7c0ffe00176db1cf",
      title: "Vikings",
      rate: 1,
      date: "2013",
      imgUrl:
        "https://flxt.tmsimg.com/assets/p9155926_b_v10_au.jpg",
      description:
        "Scandinavie, à la fin du 8ème siècle. Ragnar Lodbrok, un jeune guerrier viking, est avide d'aventures et de nouvelles conquêtes. Lassé des pillages sur les terres de l'Est, il se met en tête d'explorer l'Ouest par la mer.",
      category: "Aventure",
      __v: 0,
    },
    {
      _id: "5fedf1067c0ffe00176db1d0",
      title: "troy",
      rate: 5,
      date: "2004",
      imgUrl:
        "https://fr.web.img5.acsta.net/medias/nmedia/18/35/23/55/18379045.jpg",
      description:
        "Dans la Grèce antique, l'enlèvement d'Hélène, reine de Sparte, par Paris, prince de Troie, est une insulte que le roi Ménélas ne peut supporter. L'honneur familial étant en jeu, Agamemnon, frère de Ménélas et puissant roi de Mycènes, réunit toutes les armées grecques afin de faire sortir Hélène de Troie. L'issue de la guerre de Troie dépendra notamment d'un homme, Achille. Arrogant, rebelle, et réputé invicible, celui-ci n'a d'attache pour rien ni personne si ce n'est sa propre gloire.",
      category: "Guerre/Aventure",
      __v: 0,
    },
  ]);
  //******** Show and Hide Function  *********/
  const [show, setShow] = useState(false);
  const handleShow = () => setShow(!show);

  const [showRate, setShowRate] = useState(false);
  const handleShowRate = () => {
    setSearchRate(0);
    setShowRate(!showRate);
  };

  //******** Search States*********/
  const [searchName, setSearchName] = useState("");
  const [searchRate, setSearchRate] = useState(5);

  //******** Add Movie  Function  *********/
  const AddToMovie = (Movie) => {
    setMovies([...Movies, Movie]);
  };

  return (
    <>
      <div className="App">
        <NavBar/>
        <Routes>
          <Route
            path="/movieList"
            element={
              <ListMovies
                Movies={Movies}
                searchName={searchName}
                searchRate={searchRate}
              />
            }
          />
          <Route path="/dashbord"
          element={
            <Dashboard/>
          }
          />
          <Route path="/addMovie" element={<AddMovie AddToMovie={AddToMovie}/>}/>
          <Route path="/search" element={<Search Movies={Movies} searchName={searchName}
                searchRate={searchRate} setSearchName={setSearchName} setSearchRate={setSearchRate} />} />
          <Route path="/movieDetails/:id" element ={<MovieDetails Movies={Movies}   />}/>
          
        </Routes>

        
      </div>
    </>
  );
}

export default App;
