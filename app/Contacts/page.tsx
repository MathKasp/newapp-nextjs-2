import Image from 'next/image';
import RickButton from "@/components/rick";

export default function Index() {
    return (
    <div className='justify-items-center'>  
        <RickButton/>
        <h1>Page de Contacts</h1>
        <Image src='/rayanviktor.jpg' alt='Rayan renold cosplay viktor' width={400} height={200}/>
    </div>
    )
}
