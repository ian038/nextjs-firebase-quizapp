import { NextApiRequest, NextApiResponse } from 'next';
import { auth } from '../../../../firebase/admin'
import { addAnswer as addAnswerFb } from '../../../../utils/db'

// eslint-disable-next-line import/no-anonymous-default-export
export default async (req: NextApiRequest, res: NextApiResponse) => {
    switch (req.method) {
      case 'POST':
        await addAnswer(req, res);
        break;
      default:
        res.status(405).json({ status: false, message: 'Method Not found' });
        break;
    }
};

const addAnswer = async(req: NextApiRequest, res: NextApiResponse) => {
    try {
        const user = await auth.verifyIdToken(req.headers.token as string)
        console.log('User', user)
        const data = { ...req.body, quizId: req.query.id, userId: user.uid }
        const response = await addAnswerFb(data)
        return res.status(200).json({ status: true, data: { answerId: response.id } })
    } catch(error) {
        console.log('ANSWER ERROR', error)
        return res.status(500).json({ status: false, message: 'Something went wrong' })
    }
}