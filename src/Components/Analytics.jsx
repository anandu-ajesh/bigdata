import laptop from "../assets/laptop.jpg"

const Analytics = () => {
    return (
        <div className="w-full bg-white py-16 px-4">
            <div className="max-w-[1240px] mx-auto grid md:grid-cols-2">
                <img className="rounded-2xl mx-auto w-[500px] h-[500px] my-4" src={laptop} alt="laptop" />
                <div className="flex flex-col justify-center">
                    <p className="text-green-500 font-bold">DATA ANALYTICS DASHBOARD</p>
                    <h1 className="md:text-4xl sm:text-3xl text-2xl font-bold py-2">Manage Data Analytics Centrally</h1>
                    <p>Centralizing data analytics ensures consistent, efficient, and strategic use of data across your organization. By consolidating tools and processes, you gain accurate insights, streamline reporting, and foster collaboration. This approach enhances data governance, optimizes resource allocation, and supports data-driven decision-making, ultimately driving a cohesive business strategy and simplifying compliance with data privacy and security regulations.</p>
                    <button className="bg-slate-950 text-green-500 rounded-2xl w-[200px] mx-auto md:mx-0 my-6 py-3">Get Started</button>
                </div>
            </div>
        </div>
    )
}

export default Analytics