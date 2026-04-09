export class AppError extends Error {
    message;
    statusCode;
    constructor(message, statusCode) {
        super(message);
        this.message = message;
        this.statusCode = statusCode;
        this.name = 'AppError';
    }
}
export const handleError = (error) => {
    if (error instanceof AppError) {
        console.error(`[App Error] ${error.name} (${error.statusCode || 'N/A'}): ${error.message}`);
    }
    else if (error instanceof Error) {
        console.error(`[System Error]: ${error.message}`);
    }
    else {
        console.error('[Unknown Error]: An unexpected error occurred.', error);
    }
};
//# sourceMappingURL=errorHandler.js.map