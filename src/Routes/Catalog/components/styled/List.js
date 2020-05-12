import styled from 'styled-components'

const List = styled.ul`
  list-style: none;
  margin: 0;
  display: flex;
  flex-direction: row;
  padding: 3px;
  cursor: pointer;
  text-align: center;
  li {
    width: 90px;
    height: 110px;
    background-color: white;
    border: 1px solid;
    padding: 3px;
    margin: 3px;
  }
`

export default List
