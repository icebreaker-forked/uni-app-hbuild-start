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


//判断是null或者undefined
export const isNullOrUndefined = (value: any) => {
	return value === null || value === undefined;
}