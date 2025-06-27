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

export interface TimeProps {
  /**
   * 支持 Date 对象、字符串或时间戳格式的时间值
   */
  timeToConvert?: Date | string | number;
  /**
   * 目标格式
   */
  targetFormat: string;
  /**
   * 是否跟随系统时间
   */
  followSystemTime?: boolean;
  /**
   * 时区
   */
  timeZone?: string;
}  