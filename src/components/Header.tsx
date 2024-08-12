import { LOGO_IMG_SRC } from "../utils/constants";

const Header = () => {
    return (
        <div className="flex justify-between bg-[#223D44]">
            <div className="flex">
                <img src={LOGO_IMG_SRC} className="w-20 h-20" alt="food main logo"></img>
                <h1 className="text-xl text-white mt-8">Food Finder</h1>
            </div>
            <div>
                <input type="text" placeholder="🔎 Search Bar" className="search-input mt-6 p-1 mr-4"></input>
            </div>
        </div>
    );
}
export default Header;