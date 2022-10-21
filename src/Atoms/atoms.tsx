import { atom } from 'recoil';

export interface ILotto {
  lottoKey: number;
  lottoNumber: number[];
}

export const lottoState = atom<ILotto[]>({
  key: 'lotto',
  default: [],
});
