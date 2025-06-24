import { useMemo } from "react";
import { NamespaceProps } from "./types";

export default function useNamespace(props: NamespaceProps) {
  const {
    type,
    prefix = '',
    separator = '-'
  } = props

  const name = useMemo(() => {
    return `${prefix}${prefix && separator}${type}`
  }, [prefix, separator, type])

  const tocpn = useMemo(() => {
    return name
      .split(separator)
      .map((item) => item.charAt(0).toUpperCase() + item.slice(1))
      .join('')
  }, [name, separator])

  return {
    name,
    tocpn
  }
}