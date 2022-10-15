import Link from "next/link";

function Header() {
    return (
        <header className="flex p-5">
            <div className="flex items-center space-x-5 justify-between">
                <Link href="/">
                    <img className="w-22 object-contain cursor-pointer" src={"/images/logo.png"} alt="logo" />
                </Link>
                <div className="hidden md:inline-flex items-center space-x-5">
                    <h3>About</h3>
                    <h3>Contact</h3>
                </div>
            </div>
        </header>
    );
}

export default Header;
