import Link from "next/link";

export default function Header() {
    return (
        <header>
            <h1>MovieDB</h1>
            <nav>
                <ul>
                    <li><Link href={"/"}>Home</Link></li>
                    <li><Link href={"/search"}>Search</Link></li>
                </ul>
            </nav>
        </header>
    );
}