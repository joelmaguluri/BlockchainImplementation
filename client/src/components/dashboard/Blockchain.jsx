import React from "react";
import AddBlock from "./AddBlock";
import { Block } from "./Block";
import { useSelector, useDispatch } from "react-redux";
import { ADDBLOCK, ADJUSTHASH, MUTATEBLOCK } from "../../constants";
import { DownArrow } from "./styles";

const Blockchain = () => {
  const dispatch = useDispatch();
  let { blockchain } = useSelector((state) => ({
    blockchain: state.blockchain.chain,
  }));

  const addBlock = (timestamp, data) => {
    dispatch({
      type: ADDBLOCK,
      payload: {
        timestamp: timestamp,
        data: data,
      },
    });
  };

  const mutateBlock = (data, index) => {
    dispatch({
      type: MUTATEBLOCK,
      payload: {
        data: data,
        index: index,
      },
    });
  };

  const generateValidHash = (hash, nonce, index) => {
    dispatch({
      type: ADJUSTHASH,
      payload: {
        hash: hash,
        nonce: nonce,
        index: index,
      },
    });
  };

  return (
    <>
      {blockchain.map((block, index) => {
        return (
          <>
            <Block
              {...block}
              defaultValue={block.data}
              index={index}
              mutateBlock={mutateBlock}
              generateValidHash={generateValidHash}
              previousBlockstatus={
                index !== 0 ? blockchain[index - 1].status : "valid"
              }
            />
            {index !== blockchain.length - 1 ? (
              <DownArrow className="fa fa-angle-down" />
            ) : null}
          </>
        );
      })}
      <AddBlock addBlock={addBlock} />
    </>
  );
};

export default Blockchain;
