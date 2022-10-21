import { useEffect } from 'react';
import styled from 'styled-components';
import { ILotto } from '../Atoms/atoms';
import LottoNum from './LottoNum';

const LottoNumBox = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 25px;
  width: inherit;
  padding: 0px 15px;
`;

const LottoCircle = styled.div<{ lottoNum: number }>`
  width: 60px;
  height: 60px;
  border-radius: 60px;
  background-color: ${(props) =>
    props.lottoNum < 11
      ? props.theme.color.lotto1
      : props.lottoNum > 11 && props.lottoNum < 21
      ? props.theme.color.lotto2
      : props.lottoNum > 21 && props.lottoNum < 31
      ? props.theme.color.lotto3
      : props.lottoNum > 31 && props.lottoNum < 41
      ? props.theme.color.lotto4
      : props.theme.color.lotto5};
  display: flex;
  justify-content: center;
  align-items: center;
  box-shadow: ${(props) => props.theme.color.shadowColor};
`;

function Lotto({ lottoKey, lottoNumber }: ILotto) {
  return (
    <LottoNumBox>
      {lottoNumber.map((num, index) => (
        <LottoCircle key={index} lottoNum={num}>
          {num}
        </LottoCircle>
      ))}
    </LottoNumBox>
  );
}

export default Lotto;
