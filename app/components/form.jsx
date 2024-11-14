"use client"

import { useActionState } from 'react'
import { enterPerson } from '../actions'

export default function Form() {
  const [error, action, isPending] = useActionState(enterPerson, undefined)

  return (
    <form action={action} className='flex flex-col gap-y-2'>
        <input
            type='text'
            name='person'
            placeholder='Enter persons name'
            className='py-2 px-3 rounded-sm'
        />
        <button
          disabled={isPending}
          className='bg-blue-500 text-white py-2 px-3 rounded-sm'
        >
          Press Here!
        </button>

        {isPending && <p>Loading...</p>}
    </form>
  )
}
