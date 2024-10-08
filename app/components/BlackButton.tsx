import React from 'react'

export default function BlackButton({text, widthFull}: {text: string, widthFull?: boolean}) {
    return (
        <button type='button' className={`border-[2px] w-fit transition duration-500 border-slate-900 rounded-md hover:bg-slate-900 hover:text-white bg-white text-slate-900 py-3 px-10 ${widthFull && "w-full"}`}>{text}</button>
    )
}
