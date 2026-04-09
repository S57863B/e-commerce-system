export class AppError extends Error {
    constructor (public message: string, public statusCode?: number){
        super(message);
        this.name = 'AppError';
    }
}

export const handleError = (error: unknown): void => {
    if (error instanceof AppError) {
        console.error(`[App Error] ${error.name} (${error.statusCode || 'N/A'}): ${error.message}`);
    } else if (error instanceof Error) {
        console.error(`[System Error]: ${error.message}`);
    } else {
        console.error('[Unknown Error]: An unexpected error occurred.', error);
    }
}