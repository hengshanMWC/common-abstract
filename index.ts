export interface Task {
  start: (...params: any) => Promise<any>
  pause: AnyFunc
  clear: AnyFunc
}

export type AnyFunc = (...params: any) => any

export type CurrentResolve = (data: any) => void
export type CurrentReject = (err: any) => void

export abstract class HoldPromise {
  protected currentResolve?: CurrentResolve | undefined
  protected currentReject?: CurrentReject | undefined
  protected abstract triggerResolve?(value: any): boolean
  protected abstract triggerReject?(err: any): boolean
}
