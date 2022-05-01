import x_request from '../index'
import { IAccount, IUserInfo, IDataType, ILoginResult } from './types'
enum LoginAPI {
  AccountLogin = '/login',
  LoginUserInfo = '/users/', // users/{id}
  UserMenus = '/role/' // role/{id}/menu
}
export function accountLoginRequest(account: IAccount) {
  //
  return x_request.post<IDataType<ILoginResult>>({
    url: LoginAPI.AccountLogin,
    data: account
  })
}

export function requestUserInfoById(id: number) {
  return x_request.get<IDataType<IUserInfo>>({
    url: LoginAPI.LoginUserInfo + id,
    isShowLoading: false
  })
}

export function requestUserMenus(id: number) {
  return x_request.get<IDataType>({
    url: LoginAPI.UserMenus + id + '/menu',
    isShowLoading: false
  })
}
