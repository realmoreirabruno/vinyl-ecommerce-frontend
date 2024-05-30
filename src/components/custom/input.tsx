import React from 'react'

interface Props {
    children: React.ReactNode,
    type: string,
    onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

export default function Input2({children, type, onChange} : Props) {
  return (
    <>
        <label htmlFor={type} className='text-sm font-normal'>{children}</label>
        <input type={type} onChange={onChange} className='bg-zinc-50 p-2 ring-1 ring-offset-zinc-900/20 rounded-md mb-3'/>
    </>
  )
}
