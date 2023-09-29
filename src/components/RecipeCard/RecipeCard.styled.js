import { RecipeDifficulty } from 'constants';
import styled from 'styled-components';

export const ContaynerCard = styled.div`
  position: relative;
  border: 1px solid black;
  display: flex;
  flex-direction: column;
  height: 100%;
  border-radius: 4px;
  overflow: hidden;
`;

export const RecipeInfo = styled.div`
  display: flex;
  gap: 10px;
`;

export const InfoBlock = styled.p`
  display: flex;
  align-items: center;
  gap: 5px;
  font-weight: 10;

  svg {
    color: ${p => p.theme.colors.accent};
    width: ${p => p.theme.icon.md};
    height: ${p => p.theme.icon.md};
  }
`;

export const Name = styled.h2`
  margin-top: 10px;
  margin-bottom: 15px;

  pointer-events: none;

  :hover {
    color: orange;
    /* color: ${p => p.theme.colors.accent}; */
  }

  :hover {
    color: ${p => p.theme.colors.accent};
  }

  &.active {
  }
`;

export const BadgeList = styled.div`
  display: flex;
  gap: 10px;
`;

export const Badge = styled.span`
  border: 1px solid ${p => p.theme.colors.black};
  border-radius: ${p => p.theme.radii.lg};
  padding: 4px 12px;

  background-color: ${({ active, theme, type }) => {
    if (!active) {
      return theme.colors.white;
    }
    switch (type) {
      case RecipeDifficulty.easy:
        return 'green';
      case RecipeDifficulty.medium:
        return 'orange';
      case RecipeDifficulty.hard:
        return 'red';
      default:
        throw new Error(`Unknown badge type ${type}`);
    }
  }};
  color: ${p => {
    return p.active ? p.theme.colors.white : p.theme.colors.black;
  }};
`;

export const BoxButton = styled.div`
  position: absolute;
  top: 10px;
  right: 70px;
  display: flex;
  align-items: center;
  gap: 10px;
`;

export const InfoButton = styled.button`
  svg {
    color: ${p => p.theme.colors.black};
    width: ${p => p.theme.icon.md};
    height: ${p => p.theme.icon.md};
  }

  :hover {
    color: ${p => p.theme.colors.accent};
  }
`;

// export const Badge = styled.span`
//   border: 1px solid ${p => p.theme.colors.black};
//   border-radius: ${p => p.theme.radii.lg};
//   padding: 4px 12px;

//   background-color: ${p => {
//     return p.active ? p.theme.colors.accent : p.theme.colors.white;
//   }};
//   color: ${p => {
//     return p.active ? p.theme.colors.white : p.theme.colors.black;
//   }};
// `;
