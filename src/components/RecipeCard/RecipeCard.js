import { Component } from 'react';
import PropTypes from 'prop-types';
import { RecipeDifficulty } from 'constants';
import {
  AiOutlineClockCircle,
  AiOutlinePieChart,
  AiOutlineBarChart,
  AiFillDelete,
  AiOutlineSearch,
} from 'react-icons/ai';
import {
  ContaynerCard,
  Badge,
  BadgeList,
  InfoBlock,
  Name,
  RecipeInfo,
  BoxButton,
  InfoButton,
} from './RecipeCard.styled';
import { ImageModal } from 'components/ImageModal/ImageModal';

export class RecipeCard extends Component {
  static propTypes = {
    onDelete: PropTypes.func.isRequired,
    item: PropTypes.shape({
      image: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      time: PropTypes.number.isRequired,
      servings: PropTypes.number.isRequired,
      calories: PropTypes.number.isRequired,
      difficulty: PropTypes.oneOf(['easy', 'medium', 'hard']).isRequired,
    }).isRequired,
  };
  state = {
    selectedImg: null,
  };

  setSelectImage = () => {
    this.setState({
      selectedImg: this.props.item.image,
    });
    console.log(this.props.item.image);
  };

  closeModal = () => {
    this.setState({
      selectedImg: null,
    });
  };

  render() {
    const { selectedImg } = this.state;
    const {
      item: { id, image, name, time, servings, calories, difficulty },
      onDelete,
    } = this.props;
    return (
      <ContaynerCard>
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
        </div>
        <BoxButton>
          <InfoButton aria-label="Delete" onClick={() => onDelete(id)}>
            <AiFillDelete />
          </InfoButton>
          <InfoButton aria-label="Zoom" onClick={this.setSelectImage}>
            <AiOutlineSearch />
          </InfoButton>
        </BoxButton>
        <ImageModal
          isOpen={selectedImg !== null}
          onClose={this.closeModal}
          image={selectedImg}
        />
      </ContaynerCard>
    );
  }
}
