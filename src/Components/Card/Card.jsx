import PropTypes from "prop-types";
import { Link } from "react-router-dom";

const Card = ({ card }) => {

   
    
    return (
      <div>
        <Link to={`/cardsDetails/${card.id}`}>
          <div
            className={`card card-compact w-[312px] h-[283px] bg-[${card.card_bg_color}] shadow-xl`}
            style={{ background: card.card_bg_color }}
          >
            <figure>
              <img src={card.picture} alt="Shoes" />
            </figure>
            <div className="card-body">
              <button
                className={`text-center w-[87px] h-[25px] text-[${card.text_button_bg_color}]  bg-[${card.category_bg_color}] rounded-md`}
                style={{
                  color: card.text_button_bg_color,
                  background: card.category_bg_color,
                }}
              >
                <span className="text-sm font-medium">{card.category}</span>
              </button>
              <h1
                className={`text-[${card.text_button_bg_color}] font-bold text-xl`}
                style={{ color: card.text_button_bg_color }}
              >
                {card.title}
              </h1>
            </div>
          </div>
        </Link>
      </div>
    );
   };

Card.propTypes = {
  card: PropTypes.object.isRequired,
};

export default Card;
