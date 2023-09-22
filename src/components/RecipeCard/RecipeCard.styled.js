import styled from 'styled-components';

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
    color: ${props => props.theme.colors.accent};
    width: ${props => props.theme.icon.md};
    height: ${props => props.theme.icon.md};
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
  border-radius: ${p => p.theme.radii.lg};
  padding: 4px 12px;

  background-color: ${p => {
    console.log(p);
    return p.active ? p.theme.colors.accent : p.theme.colors.white;
  }};
  color: ${p => {
    return p.active ? p.theme.colors.white : p.theme.colors.black;
  }};
`;
