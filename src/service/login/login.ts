import x_request from '../index'
import { IAccount, IDataType, ILoginResult } from './types'
enum LoginAPI {
  AccountLogin = '/login'
}
export function accountLoginRequest(account: IAccount) {
  //
  return x_request.post<IDataType<ILoginResult>>({
    url: LoginAPI.AccountLogin,
    data: account
  })
}
