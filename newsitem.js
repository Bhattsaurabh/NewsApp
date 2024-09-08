
export default function NewsItem(props) {

    return (
        <>
            <div className="container" >
                <div className="card mt-8">
                    <img className="card-img-top" alt="unavailable" src={props.imageUrl}
                        style={{ height: "10rem" }} />
                    <div className="card-body">
                        <h5 className="card-title">{props.title.slice(0, 34)}</h5>
                        <p className="card-text">{props.description.slice(0, 70)}</p>

                        <a href={props.newsurl} target="_blank"  rel="noreferrer">
                            <button type="button" className="btn btn-sm btn-dark" data-toggle="tooltip"
                                data-placement="top" title={props.description}>
                                Read more
                            </button>
                        </a>
                    </div>
                </div>
            </div>


        </>
    )
}