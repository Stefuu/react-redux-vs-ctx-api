import styled from 'styled-components'

const List = styled.ul`
  list-style: none;
  margin: 0 0 300px 0;
  padding: 3px;
  display: flex;
  flex-wrap: wrap;
  width: 100%;
  text-align: center;
  justify-content: center;
  li {
    justify-content: center;
    align-items: center;
    border: 1px solid;
    display: flex;
    flex-direction: column;
    flex-grow: 1;
    width: 33%;
    text-align: center;
    img {
      width: 90px;
    }
    span {
      max-width: 1000px; 
    }
    button {
      margin-top: 3px;
      margin-bottom: 3px;
      cursor: pointer;
    }
  }
`

export default List
