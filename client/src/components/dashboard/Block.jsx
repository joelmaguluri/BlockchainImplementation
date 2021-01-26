import React from "react";
import { SettingsButton } from "../widgets/Button";
import { calculateHashAndNonce } from "./helpers";
import {
  BlockWrapper,
  Data,
  InputWrapper,
  SpanTitle,
  InputSpan,
  Tag,
  Nonce,
  PreviousHash,
  Hash,
  InfoBlock,
} from "./styles";

export function Block(props) {
  const {
    previousHash,
    hash,
    timestamp,
    nonce,
    name,
    index,
    status,
    generateValidHash,
    previousBlockstatus,
  } = props;

  const getValidHash = () => {
    const { hash, nonce } = calculateHashAndNonce({
      index,
      previousHash,
      timestamp,
      data: props.data,
      nonce: 0,
    });
    generateValidHash(hash, nonce, index);
  };

  const onBlockChange = (e) => {
    let blockindex = index;
    props.mutateBlock(e.target.value, blockindex);
  };

  return (
    <BlockWrapper>
      <div className="card-body">
        <div className="block">
          <Data>
            <InputWrapper>
              <SpanTitle>
                <span className="text">DATA</span>
              </SpanTitle>
              <InputSpan>
                <span className="prefix">
                  <i className="anticon anticon-file-text" />
                </span>
                <input
                  type="text"
                  className="box-input"
                  onChange={(e) => onBlockChange(e)}
                  defaultValue={props.data}
                />
              </InputSpan>
            </InputWrapper>
          </Data>

          <PreviousHash>
            <div>PREVIOUS HASH</div>
            <Tag validity={previousBlockstatus} className="previous-hash-block">
              <span className="previous-hash-text">{previousHash}</span>
            </Tag>
          </PreviousHash>
          <Hash>
            <div className="mr-15">HASH</div>
            <Tag data-show="true" className="hash-block" validity={status}>
              <span className="ant-tag-text">{hash}</span>
            </Tag>
          </Hash>

          <InfoBlock>
            <div className="wrapper">
              <span className="name">{name}</span>
              <span className="timestamp">
                <span>on {timestamp}</span>
              </span>
            </div>

            {status === "valid" ? (
              <Nonce>
                <span className="nonce-text">{nonce}</span>
              </Nonce>
            ) : (
              <SettingsButton onClick={() => getValidHash()}>
                <i class="fa fa-wrench" />
              </SettingsButton>
            )}
          </InfoBlock>
        </div>
      </div>
    </BlockWrapper>
  );
}
