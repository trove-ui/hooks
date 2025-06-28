/**
 * 休眠指定的时间之后执行一些操作
 * @param ms 延迟的时间 单位：毫秒
 * @returns 
 */
export const sleep = (ms: number) => {
  return new Promise((resolve) => setTimeout(resolve, ms))
}
