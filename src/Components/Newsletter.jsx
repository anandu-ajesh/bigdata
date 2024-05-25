

const Newsletter = () => {
    return (
        <div className="w-full p-16 text-white px-4">
            <div className="max-w-[1240px] mx-auto grid lg:grid-cols-3">
                <div className="lg:col-span-2 my-4">
                    <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold py-2">Want tips and tricks to optimize your flow?</h1>
                    <p>SignUp to our newsletter and stay up to date</p>
                </div>
                <div className="my-4">
                    <div className="flex flex-col sm:flex-row items-center justify-between w-full">
                        <input type="email" placeholder="Enter your email" className="p-3 flex w-full rounded-md text-black" />
                        <button className="bg-green-500 text-black rounded-md font-medium w-[200px] ml-4 my-6 py-3">Notify Me</button>
                    </div>
                    <p>We care about the protection of your data. Read our <span className="text-green-500">privacy policy.</span></p>
                </div>

            </div>

        </div>
    )
}

export default Newsletter