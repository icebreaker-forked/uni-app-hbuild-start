// 是否安卓
export const isAndroid = DEVICE_INFO.osName === "android";

// 是否苹果
export const isIos = DEVICE_INFO.osName === "ios";

// 是否小数
export function isDecimal(value: any): boolean {
  return String(value).length - String(value).indexOf(".") + 1 > 0;
}

// 正则表达式验证邮箱
export function isEmail(email: string) {
  const emailReg = /^([a-z0-9])(\w|-)+@[a-z0-9]+\.([a-z]{2,4})$/i;
  return emailReg.test(email);
}

// 正则表达式验证大多数手机格式
export function isCommonPhone(email: string) {
  const numberReg = /^\d*$/;
  return numberReg.test(email);
}

// 判断数字的位数
export function isNumberOfQuantity(quantity: number, text: string) {
  return new RegExp(`^\\d{${quantity}}$`).test(text);
}

// 判断输入是否是字符串
export function isString(str: any) {
  return Object.prototype.toString.call(str) === "[object String]";
}

// 判断输入是否是数字
export function isNumber(num: any) {
  return Object.prototype.toString.call(num) === "[object Number]";
}

// 判断输入是否是数组
export function isArray(arr: any) {
  return Object.prototype.toString.call(arr) === "[object Array]";
}

// 判断输入是否是对象
export function isObject(obj: any) {
  return Object.prototype.toString.call(obj) === "[object Object]";
}

// 判断输入是否是函数
export function isFunction(fun: any) {
  return Object.prototype.toString.call(fun) === "[object Function]";
}

// 判断输入是否是布尔值
export function isBoolean(boo: any) {
  return Object.prototype.toString.call(boo) === "[object Boolean]";
}

// 判断输入是否是JSON
export function isJSON(json: any) {
  try {
    if (isObject(JSON.parse(json))) {
      return true;
    }
  }
  catch (e) {}
  return false;
}

// 是否为空
export function isEmpty(val: any) {
  return val === "" || val === null || val === undefined;
}
