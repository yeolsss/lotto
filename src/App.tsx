import { useEffect } from "react";
import { useRecoilState } from "recoil";
import styled from "styled-components";
import { ILotto, lottoState } from "./Atoms/atoms";
import Lotto from "./Components/Lotto";

const Wrapper = styled.div`
  width: 100vw;
  height: calc(var(--vh, 1vh) * 100);
  display: flex;
  flex-direction: column;
  align-items: center;
  position: relative;
`;

const LottoBox = styled.div`
  width: 100%;
  height: 70%;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 10px 25px;
  overflow-y: hidden;
  overflow: scroll;
  margin-top: 50px;
  margin-bottom: 50px;
  scrollbar-width: none;
    &::-webkit-scrollbar {
      display: none;
    }
`;

const CreateLottoBtn = styled.button`
  all: unset;
  background-color: ${(props) => props.theme.color.elementColor};
  padding: 20px 40px;
  border-radius: 15px;
  cursor: pointer;
  margin-bottom: 50px;
`;

function App() {
  function setScreenSize() {
    const vh = window.innerHeight * 0.01;
    document.documentElement.style.setProperty("--vh", `${vh}px`);
  }
  useEffect(() => {
    setScreenSize();
  }, []);

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
