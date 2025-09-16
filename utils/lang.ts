export const { platform } = uni.getDeviceInfo();

// 是否安卓
export const isAndroid = platform == 'android';

// 是否苹果
export const isIos = platform == 'ios';

// 是否小数
export function isDecimal(value: any): boolean {
	return String(value).length - String(value).indexOf('.') + 1 > 0;
}

//正则表达式验证邮箱
export const isEmail = (email: string) => {
	const emailReg = /^([a-zA-Z]|[0-9])(\w|\-)+@[a-zA-Z0-9]+\.([a-zA-Z]{2,4})$/;
	return emailReg.test(email);
};

//正则表达式验证大多数手机格式
export const isCommonPhone = (email: string) => {
	const numberReg = /^[0-9]*$/;
	return numberReg.test(email);
};

//判断数字的位数
export const isNumberOfQuantity = (quantity: number, text: string) => {
	return new RegExp(`^\\d{${quantity}}$`).test(text);
};

export const isObject = (obj: any) => {
	return Object.prototype.toString.call(obj) === '[object Object]';
};

// 是否为空
export function isEmpty(val: any) {
	return val === '' || val === null || val === undefined;
}
