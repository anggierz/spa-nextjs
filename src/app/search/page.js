import Header from "@/components/Header";

export default function Search() {
    return (
        <>
        <Header />
        <div>
        <h1>Search</h1>
        <p>Search for a movie.</p>
        <div className="search-container">
            <input type="search" id="site-search" name="q" className="search-input"/>
            <button className="search-button">Search</button>
        </div>
        </div>
        </>
    );
}