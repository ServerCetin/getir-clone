type PaginationQuery = {
    page: number,
    limit: number
}

export type ApiPaginatedResponse<T> = {
    isSuccessful: boolean,
    data: T[]
    "meta": {
        "page": number,
        "take": number,
        "itemCount": number,
        "pageCount": number,
        "hasPreviousPage": boolean,
        "hasNextPage": boolean
    }
    "errorCode": null
}

export type ApiResponse<T> = {
    isSuccessful: true,
    data: T,
    "errorCode": null
}

export type ApiError = {
    code: string,
    message: string
}

export type ApiErrorResponse = {
    isSuccessful: false,
    errorCode: ApiError
}

export function validateQuery(query: any): PaginationQuery {
    let { page = 1, limit = 100 } = query;

    page = Number(page);
    limit = Number(limit);

    if (Number.isNaN(page) || page < 1) {
        page = 1;
    }

    if (Number.isNaN(limit) || limit < 1) {
        limit = 100;
    }

    return { page, limit };
}

export function paginate<T>(data: T[], page: number, limit: number) {
    const startIndex = (page - 1) * limit;
    const endIndex = page * limit;
    const hasPreviousPage = startIndex > 0;
    const hasNextPage = endIndex < data.length;

    const paginatedData: ApiPaginatedResponse<T> = {
        isSuccessful: true,
        data: data.slice(startIndex, endIndex),
        meta: {
            page,
            take: limit,
            itemCount: data.length,
            pageCount: Math.ceil(data.length / limit),
            hasPreviousPage,
            hasNextPage
        },
        errorCode: null
    };

    return paginatedData;
}

export function generateResponse<T>(data: T): ApiResponse<T> {
    let response: ApiResponse<T>;
    response = {
        isSuccessful: true,
        data: data,
        errorCode: null
    };

    return response;
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
            message: message || 'Internal Server Error'
        },
    };
}
