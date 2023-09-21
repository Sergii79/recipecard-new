import styled from 'styled-components';

const Container = styled.div`
  /* display: flex;
  flex-direction: column;
  gap: 20px; */
  margin: 0 auto;
  padding: 0 16px;
`;

export const Layout = ({ children }) => {
  return (
    <Container>
      <header>Header</header>
      <main>{children}</main>
      <footer>Footer</footer>
    </Container>
  );
};
