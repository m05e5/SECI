"use client"
import { useLocale } from "next-intl"
import { useRouter } from "next/navigation"
import { ChangeEvent,  useTransition } from "react"

export default function LocalSwitch() {
    const [ isPending, startTransition ] = useTransition()
    const router = useRouter()
    const localActive = useLocale()

    const onSelectChange = (e: ChangeEvent<HTMLSelectElement>) => {
        const nextLocale = e.target.value
        startTransition(() => {
            router.replace(`/${nextLocale}`)
        })
    }

    return (
        <label className="border-2 rounded">
            <p className="sr-only">change language</p>
            <select className="bg-transparent" disabled={isPending} defaultValue={localActive} onChange={onSelectChange}>
                <option value="en">EN</option>
                <option value="fr">FR</option>
            </select>
        </label>
    )
}
