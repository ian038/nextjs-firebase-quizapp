import axios from 'axios'

export const addQuizApi = async(auth, values) => {
    try {
        const header = {
            'Content-Type': 'application/json',
            token: auth.token
        }
        const res = await axios.post('/api/quiz', values, { headers: header })
        return res
    } catch(error) {
        throw error
    }
}

export const addAnswerApi = async(auth, quizId, values) => {
    try {
        const header = {
            'Content-Type': 'application/json',
            token: auth.token
        }
        const res = await axios.post(`/api/quiz/${quizId}/answer`, { questions: values, createdAt: new Date(), updatedAt: new Date() }, { headers: header })
        return res
    } catch(error) {
        console.log('Error 2', error)
        throw error
    }
}