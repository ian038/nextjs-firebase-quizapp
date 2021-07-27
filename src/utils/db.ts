import firebase from 'firebase'

export const addUser = async (authUser: any) => {
    const res = await firebase
    .firestore()
    .collection('users')
    .doc(authUser.uid as string)
    .set({ ...authUser }, { merge: true })
    return res
}

export const addQuiz = async quizData => {
    let response = await firebase.firestore().collection('quiz').add(quizData)
    return response
}

export const getAllQuiz = async() => {
    const snapshot = await firebase.firestore().collection('quiz').get()
    const quiz = snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }))
    return quiz
}

export const getAllUsers = async() => {
    const snapshot = await firebase.firestore().collection('users').get()
    const users = snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }))
    return users
}

export const getSingleQuiz = async quizId => {
    const snapshot = await firebase.firestore().collection('quiz').doc(String(quizId)).get()
    const quizData = snapshot.exists ? JSON.stringify(snapshot.data()) : null
    return quizData
}
