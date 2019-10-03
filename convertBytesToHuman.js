/*
 * В этом задании надо разработать функцию
 * `convertBytesToHuman`. Эта функция  должна принимать
 * аргумент `bytes` только числового типа.
 * На выходе функция должна отдать
 * человекопонятную строку, которая будет
 * отражать размер файла. Примеры использования:
 * `convertBytesToHuman(1024) === '1 KB';`
 * `convertBytesToHuman(123123123) === '117.42 MB';`
 * Необходимо предусмотреть защиту от
 * передачи аргументов неправильного типа
 * и класса (например, отрицательные числа)
 */

export default function convertBytesToHuman(bytes) {
	if (typeof(bytes) != "number" || bytes < 0)
		return false
	if (bytes < 1024)
		return String(bytes) + " B"

	let ret = bytes / 1024
	if (ret < 1024)
		return String(ret) + " KB"

	ret /= 1024
	if (ret < 1024)
		return String(ret) + " MB"

	ret /= 1024
	if (ret < 1024)
		return String(ret) + " GB"

	ret /= 1024
	return String(ret) + " TB"
}
