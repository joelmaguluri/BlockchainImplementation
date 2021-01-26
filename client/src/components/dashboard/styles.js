import styled from "styled-components";

export const BlockWrapper = styled.div`
  font-family: "Alegreya Sans", sans-serif;
  transition: all 0.3s;
  :hover {
    box-shadow: 0 10px 30px -5px rgba(10, 16, 34, 0.2);
  }
  box-shadow: 0 1px 1px 0 rgba(10, 16, 34, 0.2);
  margin-left: auto;
  margin-right: auto;
  margin-bottom: 27px;
  border-radius: 10px;
  padding-top: 10px;
  padding-left: 8px;
  padding-right: 8px;
  max-width: fit-content;
  display: flex;
  flex-wrap: nowrap;
  flex-direction: column;
  border: none;
  line-height: 1.5;
  color: rgba(0, 0, 0, 0.65);
  box-sizing: border-box;
  padding: 0;
  list-style: none;
  background: #fff;
  position: relative;
  align-content: center;
  .card-body {
    padding: 24px;
    zoom: 1;
  }
`;

export const InputWrapper = styled.div`
  font-size: 14px;
  line-height: 1.5;
  color: rgba(0, 0, 0, 0.65);
  box-sizing: border-box;
  margin: 0;
  padding: 0;
  list-style: none;
  position: relative;
  display: table;
  border-collapse: separate;
  border-spacing: 0;
  width: 100%;
`;
export const Data = styled.div`
  display: inline-block;
  vertical-align: top;
  width: 100%;
  margin-bottom: 20px;
`;

export const SpanTitle = styled.div`
  width: 1px;
  white-space: nowrap;
  vertical-align: middle;
  padding: 4px 11px;
  font-size: 14px;
  font-weight: 400;
  line-height: 1;
  color: rgba(0, 0, 0, 0.65);
  text-align: center;
  background-color: #fafafa;
  border: 1px solid #d9d9d9;
  border-radius: 4px;
  position: relative;
  transition: all 0.3s;
  display: table-cell;
  border-right: 0;
  border-bottom-right-radius: 0px;
  border-top-right-radius: 0px;
  .text {
    margin-right: 7px;
    margin-left: 7px;
  }
`;
export const InputSpan = styled.span`
  font-size: 14px;
  line-height: 1.5;
  color: rgba(0, 0, 0, 0.65);
  box-sizing: border-box;
  margin: 0;
  padding: 0;
  list-style: none;
  position: relative;
  display: inline-block;
  width: 100%;
  border-collapse: separate;
  border-spacing: 0;

  .prefix {
    position: absolute;
    top: 50%;
    -webkit-transform: translateY(-50%);
    -ms-transform: translateY(-50%);
    transform: translateY(-50%);
    z-index: 2;
    line-height: 0;
    color: rgba(0, 0, 0, 0.65);
    left: 12px;
    .icon {
      display: inline-block;
      font-style: normal;
      vertical-align: baseline;
      text-align: center;
      text-transform: none;
      line-height: 1;
      text-rendering: optimizeLegibility;
    }
  }
  .box-input {
    list-style: none;
    position: relative;
    display: inline-block;
    padding: 4px 11px;
    width: 100%;
    height: 32px;
    font-size: 14px;
    line-height: 1.5;
    background-color: #fff;
    background-image: none;
    border: 1px solid #d9d9d9;
    border-radius: 4px;
    transition: all 0.3s;
    border-collapse: separate;
    border-spacing: 0;
    border-bottom-left-radius: 0px;
    border-top-left-radius: 0px;
    padding-left: 30px;
  }
`;


export const Tag = styled.div`
 border: 1px solid #d9d9d9;
 line-height: 20px;
 height: 22px;
 padding: 0 7px;
 border-radius: 4px;
 ${(props) =>
    props.validity === "valid"
      ? `
  color: #52c41a;
  background: #f6ffed;
  border-color: #b7eb8f;`
      : `
  color: #f5222d;
  background: #fff1f0;
  border-color: #ffa39e;`
  }
`;

export const Nonce=styled.div`
    cursor:default;
    list-style: none;
    display: inline-block;
    line-height: 20px;
    height: 22px;
    padding: 0 7px;
    border-radius: 4px;
    border: 1px solid #d9d9d9;
    background: #fafafa;
`;

export const PreviousHash=styled.div`

  margin-bottom: 7px;
  display: flex;
  justify-content: flex-start;
  flex-wrap: nowrap;
  max-width: 100%;
  overflow: auto;
  .previous-hash-block{
    font-size: 8pt;
    font-family:Courier New;
    float: right;
    cursor: default;
    display: block;
    background: none;
    border-color: transparent;
    margin-top: auto;
    margin-bottom: auto;
    margin-left: 8px;
  }
`;


export const Hash=styled.div`
  display: flex;
  justify-content: flex-start;
  flex-wrap: nowrap;
  max-width: 100%;
  overflow: auto;
  .mr-15{
      margin-right:15px;
  }
  .hash-block
  {    
      
    display: block;
    font-size: 9pt;
    font-family:Courier New;
    cursor: default;
    max-width: 100%;
    overflow: auto;

  }
  `;

export const InfoBlock=styled.div`
    margin-top: 27px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    flex-wrap: nowrap;
    text-overflow: ellipsis;
    .wrapper {
        font-size: 24px;
        white-space: nowrap;
        overflow: auto;
        .name{
            letter-spacing:1px;
        }
        .timestamp{
            letter-spacing:1px;
            margin-left:4px;
            span{
                font-weight:300;
                font-size:11pt;
            }
        }
    }
`;

export const DownArrow=styled.i`
    display: block; 
    font-size: 24pt; 
    margin-bottom: 27px;
    text-align:center;
`;