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

export interface TimerProps {
  /**
   * 需要转换的时间
   */
  time?: Date;
  /**
   * 时区
   */
  timezone?: string;
  /**
   * 时间格式
   */
  format?: string;
  /**
   * 实时更新
   */
  update?: boolean;
  /**
   * 根据何种方式得出当前时期
   */
  definePeriod?:(time: Date) => string;
}

export interface Timer {
  /**
   * 格式化后的时间
   */
  formatText: string;
  /**
   * 时期，例如：上午、下午、晚上
   */
  period: string;
}
