export default async function Num ({params}: {params: Promise<{ id :  string}> })
{
    const id = (await params).id
    return (
    
        <div className='justify-items-center'>  
            Projet ID: {id}     
            <h1 className='text-6xl text-blue-500'>Page de projets</h1>
            <p className='text-3xl text-red-500'>pourquoi</p>
        </div>
    )
}

