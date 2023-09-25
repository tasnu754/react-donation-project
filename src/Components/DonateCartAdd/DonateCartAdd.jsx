import PropTypes from "prop-types";

const DonateCartAdd = ({donateCards}) => {
  console.log(donateCards);
  return (
    <div className="">
      <div className={`w-full card card-side bg-[${donateCards.card_bg_color}] shadow-xl`}>
        <figure>
          <img
            className="w-[220px] h-full "
            src={donateCards.picture}
            alt="Movie"
          />
        </figure>
        <div className="card-body">
          <button
            className={`text-center w-[87px] h-[25px] text-[${donateCards.text_button_bg_color}]  bg-[${donateCards.category_bg_color}] rounded-md`}
          >
            <span className="text-sm font-medium">{donateCards.category}</span>
          </button>
          <h2 className="card-title text-2xl font-bold">{donateCards.title}</h2>
          <p
            className={`text-base font-bold text-[${donateCards.text_button_bg_color}]`}
          >
            ${donateCards.price}
          </p>
          <div className="card-actions justify-start ">
            <button
              className={`btn bg-[${donateCards.text_button_bg_color}] text-white`}
            >
              View Details
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

DonateCartAdd.propTypes = {
  donateCards: PropTypes.object,
};

export default DonateCartAdd;
