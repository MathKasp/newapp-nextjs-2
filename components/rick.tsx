'use client'

import { useRouter } from 'next/navigation'
import { Button } from "@/components/ui/button"

export default function RickButton ()
{
    const router = useRouter()
    return (
        <div>
            <Button onClick={() => router.replace('https://youtu.be/dQw4w9WgXcQ?si=Uc4JuOhYHIVCMElW')}> Never gonna give you up </Button>
        </div>
    )
}