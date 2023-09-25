import { useEffect, useState } from "react";
import DonateCartAdd from "../DonateCartAdd/DonateCartAdd";


const DonationAdd = () => {

    const [addCards, setAddCards] = useState([]);
    const [isSeeAll, setIsSeeAll] = useState(false);

    useEffect(() => {
        const getCards = JSON.parse(localStorage.getItem("DonatedCards"));
        setAddCards(getCards);

    }, [])
    
    const handleSeeAll = () => {
        setIsSeeAll(!isSeeAll);
        
    }

    return (
      <div>
        <div className="w-[85%]  mx-auto grid grid-cols-1 md:grid-cols-2 gap-6">
          {isSeeAll
            ? addCards.map((donateCards, idx) => (
                <DonateCartAdd
                  key={idx}
                  donateCards={donateCards}
                ></DonateCartAdd>
              ))
            : addCards
                .slice(0, 4)
                .map((donateCards, idx) => (
                  <DonateCartAdd
                    key={idx}
                    donateCards={donateCards}
                  ></DonateCartAdd>
                ))}
        </div>

        {addCards.length > 4 && (
          <div className="w-[85%]  mx-auto flex justify-center my-10">
            <button
              onClick={handleSeeAll}
              className={`w-[110px] ${isSeeAll && 'hidden'}   btn btn-active btn-secondary`}
            >
              See All
            </button>
          </div>
        )}
      </div>
    );
};

export default DonationAdd;