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
        {/* <div className="w-[85%]  mx-auto grid grid-cols-1 md:grid-cols-2 gap-6">
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
        )} */}

        {addCards <= 0 ? (
          <div className="h-[500px]  pt-44 flex align-middle justify-center">
            <p className="text-4xl font-bold">No Donation yet</p>
          </div>
        ) : (
          <div>
            {" "}
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
                  className={`w-[110px] ${
                    isSeeAll && "hidden"
                  }   btn btn-active btn-secondary`}
                >
                  See All
                </button>
              </div>
            )}
          </div>
        )}
      </div>
    );
};

export default DonationAdd;