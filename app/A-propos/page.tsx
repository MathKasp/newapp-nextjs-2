'use client'

import { useQuery } from '@tanstack/react-query';

export default function UserList() {

    const { isLoading, error, data } = useQuery({
        queryKey: ['repoData'], queryFn: () => fetch ('https://api.github.com/repos/TanStack/query').then((res) => res.json()),
    })

    if (isLoading) return 'Loading...';

    if (error) return 'An error has occured: ' + error.message;
        
    return (     
    <div className='justify-items-center'>  
        <h1>{data?.name}</h1>
        <p>{data?.description}</p>
        <strong> :eyes: {data?.subsribers_count}</strong>{'  '} <br/>
        <strong> :sparkles: {data?.stargazers_count}</strong>{'  '}<br/>
        <strong> :couverts: {data?.forks}</strong>{'  '}
    </div>
    )
}
