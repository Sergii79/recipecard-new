import PropTypes from 'prop-types';
import {
  AiOutlineClockCircle,
  AiOutlinePieChart,
  AiOutlineBarChart,
} from 'react-icons/ai';
// AiOutlineClockCircle;

export const RecipeCard = ({
  item: { image, name, time, servings, calories, difficulty },
}) => {
  return (
    <div>
      <img src={image} alt={name} width={240} />
      <h2>{name}</h2>
      <div style={{ display: 'flex', gap: 8 }}>
        <p>
          <AiOutlineClockCircle size="24" />
          <span>{time} min</span>
        </p>
        <p>
          <AiOutlinePieChart size="24" />
          <span>{servings} servings</span>
        </p>
        <p>
          <AiOutlineBarChart size="24" />
          <span>{calories} calories</span>
        </p>
      </div>
      <div>
        <h3>Difficulty</h3>
        <div>
          <span>easy</span>
          <span>medium</span>
          <span>hard</span>
        </div>
      </div>
    </div>
  );
};

RecipeCard.propTypes = {
  item: PropTypes.shape({
    image: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    time: PropTypes.number.isRequired,
    servings: PropTypes.number.isRequired,
    calories: PropTypes.number.isRequired,
    difficulty: PropTypes.oneOf(['easy', 'medium', 'hard']).isRequired,
  }).isRequired,
};
