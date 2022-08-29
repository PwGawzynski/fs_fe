import React from 'react';
import { Input } from '../Atoms/Input';

interface Props {
  name: string;
  type: 'text' | 'password' | 'number' | 'email' | 'tel';
  changeHandler: React.Dispatch<React.SetStateAction<any>>;
  placeholder: any;
  autoComplete?: 'on' | 'off';
}

export const ReusableInput = (props: Props) => {
  const { placeholder } = props;
  const { changeHandler } = props;
  const { autoComplete } = props;
  const { name } = props;
  const { type } = props;

  return (
    <Input
      type={type || 'text'}
      value={placeholder[name]}
      onChange={(event) =>
        changeHandler((prev: any) => {
          return {
            ...prev,
            [name]: event.target.value,
          };
        })
      }
      autoComplete={autoComplete}
    />
  );
};

ReusableInput.defaultProps = {
  autoComplete: 'on',
};
