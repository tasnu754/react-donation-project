import PropTypes from "prop-types";

const Card = ({ card }) => {

    console.log(card);
    
    return (
      <div>

        <div
          className={`card card-compact w-[312px] h-[283px] bg-[${card.card_bg_color}] shadow-xl`}
        >
          <figure>
            <img src={card.picture} alt="Shoes" />
          </figure>
          <div className="card-body">
            <button
              className={`text-center w-[87px] h-[25px] text-[${card.text_button_bg_color}]  bg-[${card.category_bg_color}] rounded-md`}
            >
              <span className="text-sm font-medium">{card.category}</span>
            </button>
            <h1
              className={`text-[${card.text_button_bg_color}] font-bold text-xl`}
            >
              {card.title}
            </h1>
          </div>
        </div>
      </div>
    );
   };

Card.propTypes = {
  card: PropTypes.object.isRequired,
};

export default Card;
