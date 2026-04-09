export declare class AppError extends Error {
    message: string;
    statusCode?: number | undefined;
    constructor(message: string, statusCode?: number | undefined);
}
export declare const handleError: (error: unknown) => void;
//# sourceMappingURL=errorHandler.d.ts.map