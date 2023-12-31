import { useEffect, useState } from "react";
import { useLoaderData, useParams } from "react-router-dom";
import swal from "sweetalert";


const Donation = () => {
    
    const [cardDescript, setCardDescript] = useState({});

    const cards = useLoaderData();
    const param = useParams();

    useEffect(() => {
        const cardfind = cards?.find((card) => card.id == param.id);
        setCardDescript(cardfind);
    }, [param.id, cards])
    
   

    const handleAddDonation = () => {
        const additems = [];
        const get = JSON.parse(localStorage.getItem("DonatedCards"));

        if (!get) {
            additems.push(cardDescript);
            localStorage.setItem("DonatedCards", JSON.stringify(additems));

        }
        else {
            additems.push(...get, cardDescript);
            localStorage.setItem("DonatedCards", JSON.stringify(additems));
            
        }
        swal("Good job!", "Donation successfull", "success");


    }
    



    return (
      <div className="w-[85%] mx-auto">
        <div className="relative">
          <img
            className="w-full mx-auto h-[600px] bg-cover"
            src={cardDescript.picture}
            alt=""
          />
          <div className="absolute w-full h-[130px] bottom-[0px] bg-black opacity-50 "></div>
          <div className="absolute h-[130px] bottom-[0px] flex items-center">
            <button
              onClick={handleAddDonation}
              className={` ml-10 btn  border-none bg-[${cardDescript.text_button_bg_color}] text-white h-[56px] hover:bg-purple-700`}
              style={{ background: cardDescript.text_button_bg_color }}
            >
              Donate ${cardDescript.price}
            </button>
          </div>
        </div>
        <h1 className="text-4xl font-bold my-10">{cardDescript.title}</h1>
        <p className="text-base font-normal text-gray-500  mb-10">
          {cardDescript.description}
        </p>
      </div>
    );
};

export default Donation;