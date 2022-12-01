import styled from 'styled-components';

export const NavbarContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const ImgContainer = styled.div``;

export const Img = styled.img`
  max-width: 200px;
`;

export const List = styled.ul`
  display: flex;
  margin-right: 2rem;
`;

export const ListItem = styled.li`
  margin-left: 3rem;
  text-transform: uppercase;
  border: 1px solid #000;
  font-size: 1.5rem;
  padding: 0.5rem 2rem;
  transition: 0.3s;
  cursor: pointer;

  &:hover {
    background-color: #000;
    color: #fff;
  }
`;
