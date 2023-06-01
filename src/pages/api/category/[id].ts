import {NextApiRequest, NextApiResponse} from 'next';
import categories from '@/data/categories.json';
import {generateResponse, ApiResponse, generate500Response, generate400Response} from '@/utils/apiUtils';

export default function handler(req: NextApiRequest, res: NextApiResponse) {
    const id = Number(req.query.id)
    try {
        const category = categories.find(category => category.id === id);
        const response: ApiResponse<any> = generateResponse(category);

        if (!response.data) {
            const response = generate400Response({
                code: '404',
                message: 'Not Found'
            });

            res.status(400).json(response);
        }
        else{
            res.status(200).json(response);
        }

    } catch (error: any) {
        const response = generate500Response(error);
        res.status(500).json(response);
    }

}