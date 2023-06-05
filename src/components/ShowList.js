import Link from "../context/Link";
function ShowList({ shows, onClick }) {
    const rendered = shows.map((show) => {
        return (
            <div className="inline-block w-1/2 bg-gradient-to-r from-yellow-500 to-pink-500 border-2 border-amber-950 rounded-lg" key={show.show.id}>
                <h2 className="p-2 text-red-900 hover:text-white">Movie Name :{show.show.name}</h2>
                <img src={show.show.image.medium} alt="It is Movie"></img>
                <h3 className="p-2 text-white">Language:{show.show.language}</h3>
                <h3 className="p-2 text-white">Status:{show.show.status}</h3>
                <h3 className="p-2 text-white">Rating: {show.show.rating.average}</h3>
                <Link key={show.show.name} to="/SummaryPage" onClick={onClick} item={show.show}>{show.show.name} movie Summary</Link>
            </div>
        )
    })
    return (
        <div className="px-12 py-12 bg-gradient-to-r from-pink-500 to-yellow-500">
            <h1 className=" hover:text-green-500 pb-4">These are Movie List</h1>
            {rendered}
        </div>
    );
};

export default ShowList;
