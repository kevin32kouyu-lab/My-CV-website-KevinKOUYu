/**
 * 这个文件提供最基础的类名拼接方法，避免组件里重复写判断逻辑。
 * 相关模块：components/industrial、site-chrome、app 下各页面。
 */

// 合并条件类名，统一返回可直接挂到 className 的字符串。
export function cn(...classes) {
  return classes.filter(Boolean).join(" ");
}
