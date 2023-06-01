export type PaginationQuery = {
    page: number;
    take: number;
};

export type ApiPaginatedResponse<T> = {
    isSuccessful: boolean;
    data: T[];
    meta: {
        page: number;
        take: number;
        itemCount: number;
        pageCount: number;
        hasPreviousPage: boolean;
        hasNextPage: boolean;
    };
    errorCode: null;
};

export type ApiResponse<T> = {
    isSuccessful: true;
    data: T;
    errorCode: null;
};

export type ApiError = {
    code: string;
    message: string;
};

export type ApiErrorResponse = {
    isSuccessful: false;
    errorCode: ApiError;
};

export function validateQuery(query: any): PaginationQuery {
    let { page = 1, take = 100 } = query;

    page = Number(page);
    take = Number(take);

    if (Number.isNaN(page) || page < 1) {
        page = 1;
    }

    if (Number.isNaN(take) || take < 1) {
        take = 100;
    }

    return { page, take };
}

export function paginate<T>(data: T[], page: number, take: number) {
    const startIndex = (page - 1) * take;
    const endIndex = page * take;
    const hasPreviousPage = startIndex > 0;
    const hasNextPage = endIndex < data.length;

    const paginatedData: ApiPaginatedResponse<T> = {
        isSuccessful: true,
        data: data.slice(startIndex, endIndex),
        meta: {
            page,
            take,
            itemCount: data.length,
            pageCount: Math.ceil(data.length / take),
            hasPreviousPage,
            hasNextPage,
        },
        errorCode: null,
    };

    return paginatedData;
}

export function generateResponse<T>(data: T): ApiResponse<T> {
    return {
        isSuccessful: true,
        data,
        errorCode: null,
    };
}

export function generate400Response(errorCode: ApiError): ApiErrorResponse {
    return {
        isSuccessful: false,
        errorCode,
    };
}

export function generate500Response(message: string): ApiErrorResponse {
    return {
        isSuccessful: false,
        errorCode: {
            code: '500',
            message: message || 'Internal Server Error',
        },
    };
}
