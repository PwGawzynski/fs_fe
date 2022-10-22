import styled from 'styled-components';
import React from 'react';

interface BtnProps {
  firstColumn: number;
  firstRow: number;
  color: string;
}

interface PProps {
  color: string;
}

interface Props extends BtnProps {
  children: React.ReactNode;
  onClickHandler?: (param: any[]) => Promise<any>;
  onClickParams?: any[];
}

const defaultProps = {
  onClickHandler: () => {},
  onClickParams: [],
};

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

export const ControlCenterBtn = (props: Props) => {
  const {
    children,
    firstColumn,
    firstRow,
    color,
    onClickHandler,
    onClickParams,
  } = props;
  return (
    <Btn
      color={color}
      firstRow={firstRow}
      firstColumn={firstColumn}
      onClick={() =>
        onClickHandler && onClickParams && onClickHandler(onClickParams)
      }
    >
      <BtnValue color={color}>{children}</BtnValue>
    </Btn>
  );
};

ControlCenterBtn.defaultProps = defaultProps;
