import React, { FormEvent, useContext, useState } from 'react';
import { ICreateUserAsk } from 'types';
import { NavigateFunction, useNavigate } from 'react-router-dom';
import { FormTemplate } from '../Atoms/FormTemplate';
import { ReusableInput } from '../Molecules/ReusableInput';
import { FormLabel } from '../Atoms/FormLabel';
import { SubmitInput } from '../Atoms/SubmitInput';
import { Api } from '../../Utils/Api/Api';
import {
  NotificationsContext,
  NotificationsContextI,
} from '../../ContextFactories/NotificationsContext';

const onSubmitHandler = async (
  e: FormEvent<HTMLFormElement>,
  data: ICreateUserAsk,
  setNotification: React.Dispatch<React.SetStateAction<NotificationsContextI>>,
  nav: NavigateFunction,
) => {
  e.preventDefault();
  const res = await Api.sendRegisterAsk(data);

  // TODO refactor this code to be hidden in helper Fn
  if (!res.status) {
    setNotification(
      res.message
        ? {
            display: true,
            message:
              typeof res.message !== 'string' ? res.message[0] : res.message,
          }
        : { display: false, message: '' },
    );
  } else if (res.status) {
    setNotification(
      res.message
        ? {
            display: true,
            message:
              typeof res.message !== 'string' ? res.message[0] : res.message,
          }
        : { display: false, message: '' },
    );
    nav('/desktop');
  }
};

export const RegisterForm = () => {
  const nav = useNavigate();

  const { setNotification } = useContext(NotificationsContext);
  // object with stores all fields values for form
  const [data, setData] = useState({
    login: '',
    password: '',
    name: '',
    surname: '',
    age: 12,
    email: '',
  } as ICreateUserAsk);

  return (
    <FormTemplate
      onSubmit={(event) => onSubmitHandler(event, data, setNotification, nav)}
    >
      <FormLabel>Login</FormLabel>
      <ReusableInput
        placeholder={data}
        type="text"
        changeHandler={setData}
        name="login"
      />
      <FormLabel>Password</FormLabel>
      <ReusableInput
        placeholder={data}
        type="password"
        changeHandler={setData}
        name="password"
      />
      <FormLabel>Email</FormLabel>
      <ReusableInput
        placeholder={data}
        type="email"
        changeHandler={setData}
        name="email"
      />
      <FormLabel>Name</FormLabel>
      <ReusableInput
        placeholder={data}
        type="text"
        changeHandler={setData}
        name="name"
      />
      <FormLabel>Surname</FormLabel>
      <ReusableInput
        placeholder={data}
        type="text"
        changeHandler={setData}
        name="surname"
      />
      <FormLabel>Age</FormLabel>
      <ReusableInput
        placeholder={data}
        type="number"
        changeHandler={setData}
        name="age"
      />
      <SubmitInput type="submit" value="Register" />
    </FormTemplate>
  );
};
