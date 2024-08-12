const FoodCard = () => {
    return (
        <div className="w-1/6 p-4 m-4 bg-white rounded-lg shadow-lg shadow-slate-400">
            <h1 className="text-3xl">Biryani</h1>
            <div>
                <img src="https://t3.ftcdn.net/jpg/01/96/80/24/360_F_196802485_VQxk0qmyPGTq56rKYXGikVGApD3A7v5T.jpg" alt="food image" className="h-48"></img>
            </div>
            <div>
                <p className="text-lg">Description of biryani</p>
            </div>
        </div>
    );
}

export default FoodCard;