import styled from 'styled-components';
import React from 'react';
import { NavigateFunction, useNavigate } from 'react-router-dom';

interface BtnProps {
  firstColumn: number;
  firstRow: number;
  color: string;
}

interface PProps {
  color: string;
}

interface Props extends BtnProps {
  actionPath: string;
  navTo: string;
  children: React.ReactNode;
}

const Btn = styled.button`
  grid-row: ${(props: BtnProps) =>
    props.firstRow ? `${props.firstRow} / span 4` : ' 1 / span 1 '};
  grid-column: ${(props: BtnProps) =>
    props.firstColumn ? `${props.firstColumn} / span 8` : ' 1 / span 1 '};
  border: ${(props: BtnProps) =>
    props.color ? `2px solid${props.color}` : '2px solid black'};
  background-color: white;
  border-radius: 10px;
`;

const BtnValue = styled.p`
  text-align: center;
  color: ${(props: PProps) => props.color || 'black'};
  margin: 0;
  padding: 0;
  font-size: 2.8vw;
  font-weight: bold;
`;

const handleOnClick = (
  actionPath: string,
  navTo: string,
  nav: NavigateFunction,
) => {
  console.log(
    'click on navigation btn with path: ',
    actionPath,
    ' and navigation to ',
    navTo,
    'and nav fn',
    nav,
  );
};

export const ControlCenterBtn = (props: Props) => {
  const { children, navTo, actionPath, firstColumn, firstRow, color } = props;
  const nav = useNavigate();
  return (
    <Btn
      color={color}
      firstRow={firstRow}
      firstColumn={firstColumn}
      onClick={() => handleOnClick(actionPath, navTo, nav)}
    >
      <BtnValue color={color}>{children}</BtnValue>
    </Btn>
  );
};
