function Card(props) {
    let badgetText
    if (props.openSpots === 0) {
        badgeText = "SOLD OUT"
    } else if (props.location === "Online") {
        badgeText = "ONLINE"
    }

    return (
        <div className="card">
            {
                badgetText && <div className="card-badge">{badgetText}</div>
            }
            <img src={`../assets/${props.item.coverImg}`} alt="imagem de uma mulher na piscina" />
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