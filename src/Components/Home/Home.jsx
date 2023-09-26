
import { useLoaderData } from "react-router-dom";
import Header from "../Header/Header";
import Cards from "../Cards/Cards";
import { useEffect, useState } from "react";


const Home = () => {
  const cardsIni = useLoaderData();
  const [cards, setCards] = useState([]);

  const [inputText, setInputText] = useState("");
  const [btnClick, setBtnClick] = useState("");


  const handleInput = (e) => {
      setInputText(e.target.value);
  }
  
  const handleBtnClick = () => {
    setBtnClick(inputText);
  }

  useEffect(() => {
    if (btnClick === "") {
      setCards(cardsIni);
    }
    else {
      if (btnClick === "Health" || btnClick === "health") {
        const clickCard = cardsIni.filter((card) => card.category == "Health");
        setCards(clickCard);
      } else if (btnClick === "Education" || btnClick === "education") {
        const clickCard = cardsIni.filter(
          (card) => card.category == "Education"
        );
        setCards(clickCard);
      } else if (btnClick === "Clothing" || btnClick === "clothing") {
        const clickCard = cardsIni.filter(
          (card) => card.category == "Clothing"
        );
        setCards(clickCard);
      } else if (btnClick === "Food" || btnClick === "food") {
        const clickCard = cardsIni.filter((card) => card.category == "Food");
        setCards(clickCard);
      }
    }
  }, [cards, cardsIni, btnClick]);
    
    return (
      <div>
        <Header
          handleInput={handleInput}
          handleBtnClick={handleBtnClick}
        ></Header>
        <Cards cards={cards}></Cards>
      </div>
    );
};

export default Home;