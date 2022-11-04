import styled from 'styled-components';
import { Button } from '../Atoms/Button';

interface Props {
  onBtnText: string;
  onClickHandler: () => void;
  enabled: boolean;
}

interface CustomBtnProps {
  enabled: boolean;
}

const CustomBtn = styled(Button)`
  background: none;
  border-radius: 10px;
  border: 2px solid #05396e;
  background-color: azure;
  color: ${(props: CustomBtnProps) => (props.enabled ? '#05396e' : '#7393B3')};
`;
export const NavBtn = ({ onBtnText, onClickHandler, enabled }: Props) => {
  return (
    <CustomBtn enabled={enabled} onClick={enabled ? onClickHandler : () => {}}>
      {onBtnText}
    </CustomBtn>
  );
};
