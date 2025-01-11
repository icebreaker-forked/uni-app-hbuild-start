/**
 * 替换空格和换行
 * @param val 
 * @returns 
 */
export const filterSpacesAndNewLines = (val: string) => {
	if (val) {
		return val.replace(/[\r\n\t]+/gm, '').trim();
	} else {
		return val;
	}
};
