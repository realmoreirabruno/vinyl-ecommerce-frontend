import React from 'react'

interface Props {
    children: React.ReactNode
    type: string;
    required?: boolean;
    style?: string;
    hig?: boolean; // <label className={`${hig && "text-green-600"`}</label> e claro declarar o hig na func input
    onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void; //the onChange can have any name
}

export default function input({ children, type, required, style, hig, onChange } : Props) {
  return (
    <>
    <label className={`${style} flex flex-col text-sm font-normal text-zinc-400 mb-1`}>
        {children}
        <input type={type} required={required} onChange={onChange} className="w-full ring-2 ring-zinc-300 rounded-sm h-8 text-zinc-500 font-semibold hover:ring-blue-400"/>
    </label>
    </>
  )
}
