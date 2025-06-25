export interface NamespaceProps {
  /**
   * 前缀
   */
  prefix?: string
  /**
   * 组件类型
   */
  type?: string
  /**
   * 分隔符
   */
  separator?: string
}

export type JoinType = string | Record<string, boolean> | boolean

export interface CountdownProps {
  /**
   * 初始计时 ms
   */
  initial?: number
  /**
   * 间隔时间 ms
   */
  interval?: number
  /**
   * 是否自动计时
   */
  autoStart?: boolean
  /**
   * 何时停止计时 ms
   */
  stopWhen?: number
  /**
   * 顺时针计时
   */
  clockwise?: boolean
}
