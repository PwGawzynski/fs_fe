import styled from 'styled-components';
import { useEffect, useState } from 'react';
import { convertToTime } from '../../Utils/helpers/convertToTime';

const P = styled.p`
  font-family: Roboto, serif;
  color: #05396e;
  margin: 0;
  padding: 0;
  display: block;
  text-align: end;
  width: 90%;
`;

export interface Props {
  initMs: number;
  on: boolean;
}

export const Timer = ({ initMs, on }: Props) => {
  const [ms, setMs] = useState(initMs);
  useEffect(() => {
    setMs(initMs);
    let intervalId: any;
    if (on) {
      (async () => {
        intervalId = setInterval(
          () => setMs((prevState) => prevState + 1),
          1000,
        );
      })();
    } else {
      // setMs(initMs);
    }
    return () => {
      clearInterval(intervalId);
    };
  }, [initMs, setMs, on]);
  return <P>{convertToTime(ms)}</P>;
};
