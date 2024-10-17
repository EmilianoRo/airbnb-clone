function Card(props) {
    
    return (
        <div className="card">
            <img src={`../${props.item.coverImg}`} alt="imagem de uma mulher na piscina" />
            <div className="card-status">
                <p className="star">&#9733; </p>
                <span className="nota">{props.item.stats.rating}</span>
                <span className="cinza">({props.item.stats.reviewCount}) • </span>
                <span className="cinza">{props.item.country}</span>
            </div>
            <p>{props.item.title}</p>
            <p><span className="negrito">From ${props.item.price}</span> / person</p>
        </div>
    )
}

export default Card