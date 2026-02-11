export class AppError<TError extends string> extends Error {
	constructor(message: TError) {
		super(message)
		this.name = 'AppError'
	}
}
