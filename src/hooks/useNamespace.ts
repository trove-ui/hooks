import { useMemo } from "react";
import type { JoinType, NamespaceProps } from "./types";

export default function useNamespace(props?: NamespaceProps) {
  let {
    type = '',
    prefix = '',
    separator = '-'
  } = props || {}

  const name = useMemo(() => {
    if (!type) {
      type = ''
    }
    if (!prefix) {
      prefix = ''
    }
    if (!separator) {
      separator = ''
    }
    return `${prefix}${prefix && separator}${type}`
  }, [prefix, separator, type])

  const ns = {
    name,
    /**
     * 转换为驼峰命名
     * @returns 转换后的字符串
     */
    toCamelCase() {
      if (separator) {
        return this.name.replace(new RegExp(`${separator}(\\w)`, 'g'), (_, c) => c.toUpperCase())
      }
      return prefix + type.charAt(0).toUpperCase() + type.slice(1)
    },
    /**
     * 转换为大驼峰命名
     * @returns 转换后的字符串
     */
    toPascalCase() {
      return this.toCamelCase().charAt(0).toUpperCase() + this.toCamelCase().slice(1)
    },
    /**
     * 转换为全大写命名
     * @returns 转换后的字符串
     */
    toUpperCase() {
      return this.name.toUpperCase().split(separator).join('')
    },
    /**
     * 转换为全小写命名
     * @returns 转换后的字符串
     */
    toLowerCase() {
      return this.name.toLowerCase().split(separator).join('')
    },
    /**
     * 组合类名
     */
    cls(...rest: JoinType[]) {
      return rest.map((str) => {
        if (typeof str === 'string') {
          return str
        }
        if (typeof str === 'boolean') {
          return ''
        }
        return Object.keys(str).filter(key => str[key])
      }).join(' ')
    },

  }

  return ns
}