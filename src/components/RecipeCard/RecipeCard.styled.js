import styled from 'styled-components';

export const RecipeInfo = styled.div`
  display: flex;
  gap: 10 px;
`;

export const InfoBlock = styled.p`
  display: flex;
  align-items: center;
  gap: 5px;
  font-weight: 500;

  svg {
    color: ${props => props.theme.colors.accent};
  }
`;

export const Name = styled.h2`
  margin-top: 10px;
  margin-bottom: 15px;
`;

export const BadgeList = styled.div`
  display: flex;
  gap: 10px;
`;

export const Badge = styled.span`
  border: 1px solid ${p => p.theme.colors.black};
`;
