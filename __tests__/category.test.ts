import axios from 'axios';
const API_BASE_URL = "http://127.0.0.1:3000/api/"

describe('/api/category', () => {
    it('should return paginated categories', async () => {
        const response = await axios.get(API_BASE_URL+ 'category');
        expect(response.status).toBe(200);
        expect(response.data).toEqual({
                "isSuccessful": true,
                "data": expect.any(Object),
                "meta": {
                    "page": expect.any(Number),
                    "take": expect.any(Number),
                    "itemCount": expect.any(Number),
                    "pageCount": expect.any(Number),
                    "hasPreviousPage": expect.any(Boolean),
                    "hasNextPage": expect.any(Boolean)
                },
                "errorCode": null
            });
    });
});

describe('/api/category/{id}', () => {
    it('should return a category by id if found', async () => {
        const response = await axios.get(API_BASE_URL+ 'category/1');
        expect(response.status).toBe(200);
        expect(response.data).toEqual({
            "isSuccessful": true,
            "data": expect.any(Object),
            "errorCode": null
        });
    });

    it('should return a 400 error if category is not found', async () => {
        try {
            await axios.get(API_BASE_URL+ 'category/1000');
        } catch (error: any) {
            expect(error.response.status).toBe(400);
            expect(error.response.data).toEqual({
                "isSuccessful": false,
                "errorCode": {
                    "code": "404",
                    "message": "Not Found"
                }
            });
        }
    });
});
