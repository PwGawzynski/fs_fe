import { LoginUserAsk } from 'types';
import { FormEvent, useContext, useState } from 'react';
import { NavigateFunction, useNavigate } from 'react-router-dom';
import { FormTemplate } from '../Atoms/FormTemplate';
import { ReusableInput } from '../Molecules/ReusableInput';
import { FormLabel } from '../Atoms/FormLabel';
import { SubmitInput } from '../Atoms/SubmitInput';
import {
  NotificationContextObj,
  NotificationsContext,
} from '../../ContextFactories/NotificationsContext';
import { Api } from '../../Utils/Api/Api';

const handleOnSubmit = async (
  e: FormEvent<HTMLFormElement>,
  notification: NotificationContextObj,
  data: LoginUserAsk,
  nav: NavigateFunction,
) => {
  e.preventDefault();
  const res = await Api.sendLoginAsk(data);
  if (res && res.status) {
    nav('/desktop');
  } else {
    notification.setNotification({
      display: true,
      message: res.message || 'Something went wrong, try again later.',
    });
  }
};

export const LoginForm = () => {
  const [formData, setFormData] = useState({
    login: '',
    password: '',
  } as LoginUserAsk);
  const notification = useContext(NotificationsContext);
  const nav = useNavigate();

  return (
    <FormTemplate
      onSubmit={(e) => handleOnSubmit(e, notification, formData, nav)}
    >
      <FormLabel>Login</FormLabel>
      <ReusableInput
        placeholder={formData}
        type="text"
        changeHandler={setFormData}
        name="login"
      />
      <FormLabel>Password</FormLabel>
      <ReusableInput
        placeholder={formData}
        type="password"
        changeHandler={setFormData}
        name="password"
      />
      <SubmitInput type="submit" value="Login" />
    </FormTemplate>
  );
};
