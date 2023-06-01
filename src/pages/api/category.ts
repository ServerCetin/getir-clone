import { NextApiRequest, NextApiResponse } from 'next';
import categories from '@/data/categories';
import { paginate, validateQuery, ApiPaginatedResponse } from '@/utils/apiUtils';
import { HomeCategory } from "@/types/homeCategory";

export default function handler(req: NextApiRequest, res: NextApiResponse<ApiPaginatedResponse<HomeCategory>>) {
    const { page, take } = validateQuery(req.query);
    const paginatedData = paginate(categories, page, take);

    res.status(200).json(paginatedData);
}
