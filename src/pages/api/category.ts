import { NextApiRequest, NextApiResponse } from 'next';
import categories from '../../data/categories.json';
import { paginate, validateQuery, ApiPaginatedResponse } from '@/utils/apiUtils';

export default function handler(req: NextApiRequest, res: NextApiResponse) {
    const { page, limit } = validateQuery(req.query);
    const data = paginate(categories, page, limit);

    const response: ApiPaginatedResponse<typeof categories[0]> = {
        page,
        limit,
        total: categories.length,
        data,
    }

    res.status(200).json(response);
}
