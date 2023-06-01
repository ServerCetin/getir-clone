import axios from 'axios';
import { HomeCategory } from '@/types/homeCategory';
import { ApiPaginatedResponse } from '@/utils/apiUtils';

export async function fetchCategories(page: number, take: number): Promise<ApiPaginatedResponse<HomeCategory[]>> {
    try {
        const response = await axios.get<ApiPaginatedResponse<HomeCategory[]>>(`${process.env.API_BASE_URL}/category`, {
            params: {
                page,
                take,
            },
        });
        return response.data;
    } catch (error) {
        console.error('Error fetching categories:', error);
        throw error;
    }
}

export async function fetchAllCategories(): Promise<HomeCategory[]> {
    const take = 100;
    let page = 1;
    const allCategories: HomeCategory[] = [];

    try {
        while (true) {
            const response = await fetchCategories(page, take);
            const { data }: any = response;

            allCategories.push(...data);

            if (!response.meta.hasNextPage) {
                break;
            }

            page++;
        }
    } catch (error) {
        console.error('Error fetching all categories:', error);
        throw error;
    }

    return allCategories;
}
