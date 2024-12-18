export default function Main() {
    return (
        <>
            <div className="container mx-auto">
                <div className="grid grid-cols-1 md:grid-cols-2 h-screen">
                    <div className="max-h-96 md:h-screen">
                        <img className="w-screen h-screen object-cover object-top" src="https://images.pexels.com/photos/270373/pexels-photo-270373.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940" alt="" />
                    </div>
                    <div className="flex bg-gray-100 p-10">
                        <div className="mb-auto text-slate-800 mt-auto max-w-lg">
                            <h1 className="text-3xl uppercase">Mathis Kasperczak</h1>
                            <p className="font-semibold mb-5">Vrai Developpeur</p>
                            <p> Salut moi c'est mathis le maïs je me présente rapido bueno Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Donec odio. Quisque volutpat mattis eros. Nullam malesuada erat ut turpis. Suspendisse urna nibh, viverra non, semper suscipit, posuere a, pede.</p>
                            <button className="bg-black rounded-md py-3 px-7 mt-6 text-white">Me contacter (rediriger sur la partie contacte)</button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}