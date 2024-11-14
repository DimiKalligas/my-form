'use server'

export async function enterPerson(previousState, formData) {
    const name = formData.get('person')
    console.log('hello')

    console.log('name from form:', name)
    return {message: true};
} 