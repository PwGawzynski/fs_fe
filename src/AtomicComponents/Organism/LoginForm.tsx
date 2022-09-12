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
import { useAuth } from '../../Utils/Hooks/authHook';

const handleOnSubmit = async (
  e: FormEvent<HTMLFormElement>,
  notification: NotificationContextObj,
  data: LoginUserAsk,
  nav: NavigateFunction,
  setLoginILS: (data: boolean) => Promise<void>,
) => {
  e.preventDefault();
  const res = await Api.sendLoginAsk(data);
  if (res && res.status) {
    await setLoginILS(true);
    nav('/protected/desktop');
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

  const { setLoginInLS } = useAuth();

  return (
    <FormTemplate
      onSubmit={(e) =>
        handleOnSubmit(e, notification, formData, nav, setLoginInLS)
      }
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
