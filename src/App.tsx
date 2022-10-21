import { useRecoilState } from 'recoil';
import styled from 'styled-components';
import { ILotto, lottoState } from './Atoms/atoms';
import Lotto from './Components/Lotto';
import { useQuery } from 'react-query';
import { createLottoNum } from './Api/api';

const Wrapper = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const LottoBox = styled.div`
  width: 700px;
  height: 800px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 0px 25px;
  margin-bottom: 50px;
`;

const CreateLottoBtn = styled.button`
  all: unset;
  background-color: ${(props) => props.theme.color.elementColor};
  padding: 20px 40px;
  border-radius: 15px;
  cursor: pointer;
`;

function App() {
  const [lotto, setLotto] = useRecoilState(lottoState);

  const onCreateLotto = () => {
    setLotto((allLottos) => {
      const lottoAry: number[] = [];
      for (let i = 0; i < 6; i++) {
        let lottoNum = Math.floor(Math.random() * 44) + 1;

        lottoAry.map((num) => {
          if (lottoNum === num) {
            lottoNum = Math.floor(Math.random() * 44) + 1;
          }
        });
        lottoAry.push(lottoNum);
      }
      lottoAry.sort((a, b) => {
        return a - b;
      });

      const lottoObj: ILotto = {
        lottoKey: Date.now(),
        lottoNumber: lottoAry,
      };

      return [lottoObj, ...allLottos];
    });
  };

  return (
    <Wrapper>
      <LottoBox>
        {lotto.map((lottoAry) => (
          <Lotto
            key={lottoAry.lottoKey}
            lottoKey={lottoAry.lottoKey}
            lottoNumber={lottoAry.lottoNumber}
          />
        ))}
      </LottoBox>
      <CreateLottoBtn onClick={onCreateLotto}>Lotto 자동 생성</CreateLottoBtn>
    </Wrapper>
  );
}

export default App;
