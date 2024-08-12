export function isEnumValue<T extends { [k: string]: string }>(e: T, name: unknown): name is T[keyof T] {
	return typeof name === 'string' && Object.values(e).includes(name);
}
