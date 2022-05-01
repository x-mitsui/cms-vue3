import { ILoginState } from './login/types'

// 放所有的类型，便于共享使用
export interface IRootState {
  name: string
  age: number
}

// Root下各module的类型
export interface IRootWithModule {
  loginModule: ILoginState
}

export type IStoreType = IRootState & IRootWithModule
// 效果同上，语法不同而已
export interface IStoreTypeSame extends IRootState, IRootWithModule {}
