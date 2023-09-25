import PropTypes from 'prop-types';
import Card from '../Card/Card';


const Cards = ({ cards }) => {
    

    
    return (
        <div className="w-[85%] mx-auto my-24 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
            {
                cards.map( card => <Card key={card.id} card={card}></Card>)

            }
        </div>
    );
};

Cards.propTypes = {
  cards: PropTypes.object.isRequired,
};

export default Cards;