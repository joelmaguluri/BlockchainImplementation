import styled from "styled-components";

export const Card = styled.div`
  margin-top: 150px;
  margin-left: auto;
  margin-right: auto;
  margin-bottom: 27px;
  border-radius: 10px;
  padding-top: 10px;
  padding-left: 8px;
  padding-right: 8px;
  max-width: -webkit-fit-content;
  max-width: fit-content;
  display: flex;
  flex-wrap: nowrap;
  flex-direction: column;
  box-shadow: 0 10px 30px -5px rgba(10, 16, 34, 0.2);
  border: none;
  .card-body {
    padding: 24px;
  }
  background-color: white;
`;

export const CardWrapper = styled.div`
  font-family: "Alegreya Sans", sans-serif;
  display: flex;
  flex-wrap: nowrap;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  .add-info {
    margin-top: 3px;
    display: block;
    margin-left: auto;
    margin-right: auto;
  }
`;
