import PropTypes from 'prop-types';
import {
  AiOutlineClockCircle,
  AiOutlinePieChart,
  AiOutlineBarChart,
  AiFillDelete,
  AiOutlineSearch,
} from 'react-icons/ai';
import {
  Badge,
  BadgeList,
  InfoBlock,
  Name,
  RecipeInfo,
  InfoButton,
} from './RecipeCard.styled';
import { RecipeDifficulty } from 'constants';

export const RecipeCard = ({
  item: { image, name, time, servings, calories, difficulty },
}) => {
  return (
    <div>
      <img src={image} alt={name} width={240} />
      <Name>{name}</Name>

      <RecipeInfo>
        <InfoBlock>
          <AiOutlineClockCircle />
          <span>{time} min</span>
        </InfoBlock>
        <InfoBlock>
          <AiOutlinePieChart />
          <span>{servings} servings</span>
        </InfoBlock>
        <InfoBlock>
          <AiOutlineBarChart />
          <span>{calories} calories</span>
        </InfoBlock>
      </RecipeInfo>

      <div>
        <h3>Difficulty</h3>
        <BadgeList>
          <Badge
            active={difficulty === RecipeDifficulty.easy}
            type={RecipeDifficulty.easy}
          >
            easy
          </Badge>
          <Badge
            active={difficulty === RecipeDifficulty.medium}
            type={RecipeDifficulty.medium}
          >
            medium
          </Badge>
          <Badge
            active={difficulty === RecipeDifficulty.hard}
            type={RecipeDifficulty.hard}
          >
            hard
          </Badge>
        </BadgeList>

        <>
          <InfoButton>
            <AiFillDelete />
          </InfoButton>
          <InfoButton>
            <AiOutlineSearch />
          </InfoButton>
        </>
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
