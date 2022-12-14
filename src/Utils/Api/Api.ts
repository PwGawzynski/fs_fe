import axios, { AxiosError } from 'axios';
import { ICreateUserAsk, LoginUserAsk, UniversalResponseObject } from 'types';

export class Api {
  // axios main class instance
  static axiosInstance = axios.create({
    baseURL: 'http://localhost:3001',
    timeout: 5000,
    withCredentials: true,
  });

  // helper method for check error type and return user friendly UniversalResponseObject
  static validateError(e: unknown): UniversalResponseObject {
    // if error is Axios type
    if (e instanceof AxiosError) {
      // check if server send response but something wos wrong with given data
      if (e.response) {
        return {
          status: false,
          message: e.response.data.message,
        } as UniversalResponseObject;
      }
      // in the other case when something was wrong with server and data was not been sent
      if (e.request) {
        return {
          status: false,
          message: 'Something is wrong with our server, we working on it.',
        } as UniversalResponseObject;
      }
    }
    // at least if error if unknown type, or comes from bad made request
    return {
      status: false,
      message: 'Unknown failure, we working on it, try again later.',
    } as UniversalResponseObject;
  }

  // sends POST request on 'http://localhost:3001/users/register' with given data
  static async sendRegisterAsk(
    data: ICreateUserAsk,
  ): Promise<UniversalResponseObject> {
    try {
      return (
        await Api.axiosInstance.post('/users/register', data, {
          headers: { 'Content-Type': 'application/json' },
        })
      ).data as UniversalResponseObject;
    } catch (e) {
      // in case of bad data given or server failure it convert error to  URO( UniversalResponseObject )
      return Api.validateError(e);
    }
  }

  static async sendLoginAsk(
    data: LoginUserAsk,
  ): Promise<UniversalResponseObject> {
    try {
      return (
        await Api.axiosInstance.post('/auth/login', data, {
          headers: { 'Content-Type': 'application/json' },
        })
      ).data as UniversalResponseObject;
    } catch (e) {
      // in case of bad data given or server failure it convert error to  URO( UniversalResponseObject )
      return Api.validateError(e);
    }
  }

  // TODO add err handling
  static async getUserProfilePicture(): Promise<Blob> {
    return (
      await Api.axiosInstance.get('/users/profile/photo', {
        responseType: 'blob',
      })
    ).data as Blob;
  }

  // sends logOut ask for given in cookies jwt
  static async sendLogOutAsk(): Promise<UniversalResponseObject> {
    try {
      return (
        await Api.axiosInstance.get('/auth/logout', {
          withCredentials: true,
        })
      ).data as UniversalResponseObject;
    } catch (e) {
      // in case of bad data given or server  failure it convert error to  URO( UniversalResponseObject )
      return Api.validateError(e);
    }
  }
}
